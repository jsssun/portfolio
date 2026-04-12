const portfolioData = {
  profile: {
    name: "정선우",
    role: "백엔드 개발자",
    bio: "다양한 프로젝트와 동아리 활동을 통해 책임감 있게 끝까지 완주하는 태도와 협업 능력을 키웠습니다. 끊임없이 배우고 성장하는 개발자가 되기 위해 노력하고 있습니다.",
    avatar: "icons/profile_main.png",
    email: "gmhie1208@gmail.com",
    github: "https://github.com/jsssun"
  },

  techStack: {
    "Language": ["Java", "Python", "C#", "JavaScript", "TypeScript"],
    "Database": ["MySQL"],
    "Infra / DevOps": ["Nginx", "Apache Tomcat", "Docker", "AWS", "WSL"],
    "Backend": ["Spring Boot", "Servlet/JSP", "JDBC", "HikariCP", "Lombok", "Logback", "JUnit"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML"],
    "협업 도구": ["Git", "Postman", "Notion"]
  },

  certs: [
    "OPIc IH",
    "정보처리기사",
    "TOPCIT 3수준",
    "SAP Certified Associate (ABAP Cloud)"
  ],

  projects: [
    {
      id: "payment",
      title: "MSA 카드 결제 시뮬레이터",
      role: "VAN 서비스 개발 · MSA 설계",
      desc: "POS → VAN → 카드사 → 은행 전 구간을 MSA + Docker로 구현한 실시간 결제 승인 및 정산 프로젝트",
      img: "icons/payment.png",
      stack: ["Java", "Spring Boot", "Spring Batch", "Spring Data JPA", "MySQL", "Docker", "Eureka"],
      links: { github: "https://github.com/fisa-card-payment" },
      detail: {
        overview: "POS 단말기의 결제 요청이 VAN을 거쳐 카드사 내부 서비스까지 처리되는 전체 파이프라인을 MSA 아키텍처로 구현한 시뮬레이터입니다. VAN, API Gateway, Payment, Settlement, Banking 5개 서비스가 Eureka 기반으로 연동됩니다.",
        problem: "서비스 간 직접 의존 없이 실시간 결제 승인과 야간 정산 배치를 안정적으로 처리해야 했고, 정산 완료 시점을 클라이언트에 효율적으로 통보해야 했습니다.",
        solution: "Spring Batch chunk 처리로 대량 거래 데이터를 안정적으로 정산 CSV로 변환하고, SSE(Server-Sent Events)를 도입해 정산 완료 결과를 실시간으로 VAN에 Push하도록 설계했습니다.",
        contributions: [
          "VAN 서비스 전체 설계 및 구현 — BIN 조회 기반 카드사 식별, API Gateway 경유 결제 중계",
          "Spring Batch(Reader → Processor → Writer) 구조로 일일 승인 내역 CSV 생성 및 카드사 전송 자동화",
          "SSE 기반 정산 결과 실시간 수신 구현 — Polling 대비 불필요한 요청 제거",
          "Spring Cloud Gateway MVC 구성 — 라우팅 규칙 설정 및 UUID 기반 TraceId 헤더 자동 생성으로 MSA 요청 추적",
          "Eureka Server 구성 — 5개 마이크로서비스(Gateway/VAN/Payment/Settlement/Banking) 등록 및 상태 모니터링",
          "Eureka + Docker Compose 기반 5개 마이크로서비스 네트워크 구성",
          "ISO 8583 표준 참고한 RRN/STAN/응답코드 설계, DDC 방식 정산 구조 적용"
        ],
        codeSnippets: [
          {
            title: "결제 승인 처리 — VanService.java",
            code: `@Transactional
public PaymentResponseDto processPayment(PaymentRequestDto request) {
    // 1. BIN 조회: 카드번호 앞 6자리로 카드사 식별
    //    실제 VAN 시스템과 동일한 방식 (ISO 8583 표준 참고)
    String binPrefix = request.getCardNumber().replaceAll("-", "").substring(0, 6);
    CardBin cardBin = cardBinRepository.findByBinPrefix(binPrefix).orElse(null);
    String cardCompany = cardBin != null ? cardBin.getCompanyName() : "UNKNOWN";

    // 2. API Gateway 경유로 카드사 승인 요청
    //    카드사 내부 서비스에 직접 접근하지 않고 Gateway를 통해 라우팅
    String cardCompanyEndpoint = "http://api-gateway:8080/api/payment/approve";
    log.info("[VAN] 결제 요청 - 가맹점: {}, 금액: {}", request.getMerchantId(), request.getAmount());

    PaymentResponseDto cardResponse = null;
    try {
        cardResponse = restTemplate.postForObject(
                cardCompanyEndpoint, request, PaymentResponseDto.class);
    } catch (Exception e) {
        log.error("[VAN] 카드사 요청 실패: {}", e.getMessage());
    }

    // 3. RRN(거래 고유번호)은 카드사가 생성해서 응답으로 전달
    //    실패 시 임시 에러 RRN 생성 (서비스 중단 없이 계속 동작)
    String rrn = (cardResponse != null && cardResponse.getRrn() != null)
            ? cardResponse.getRrn()
            : "ERR" + System.currentTimeMillis() % 100000;

    // 4. 응답코드 00 = 승인, 그 외 = 거절
    String status = (cardResponse != null && "00".equals(cardResponse.getResponseCode()))
            ? "APPROVED" : "REJECTED";
    String approvalCode = cardResponse != null ? cardResponse.getApprovalCode() : null;
    String responseCode = cardResponse != null ? cardResponse.getResponseCode() : "99";

    // 5. 거래 결과 DB 저장
    VanTransaction tx = VanTransaction.builder()
            .rrn(rrn)
            .stan(request.getStan())
            .cardNumber(request.getCardNumber())
            .amount(request.getAmount())
            .merchantId(request.getMerchantId())
            .cardCompany(cardCompany)
            .responseCode(responseCode)
            .approvalCode(approvalCode)
            .status(status)
            .build();
    vanTransactionRepository.save(tx);
    log.info("[VAN] 거래 저장 완료 - RRN: {}, STATUS: {}", rrn, status);

    return PaymentResponseDto.builder()
            .rrn(rrn)
            .approvalCode(approvalCode)
            .responseCode(responseCode)
            .status(status)
            .message(status.equals("APPROVED") ? "승인 완료" : "승인 거절")
            .build();
}`
          },
          {
            title: "Spring Batch 설정 — AcquisitionJobConfig.java",
            code: `@Slf4j
@Configuration
@EnableScheduling
@RequiredArgsConstructor
public class AcquisitionJobConfig {

    private final JobRepository jobRepository;
    private final PlatformTransactionManager transactionManager;
    private final AcquisitionItemReader reader;
    private final AcquisitionItemProcessor processor;
    private final AcquisitionItemWriter writer;
    private final JobLauncher jobLauncher;

    @Bean
    public Job acquisitionJob() {
        return new JobBuilder("acquisitionJob", jobRepository)
                .start(acquisitionStep())
                .build();
    }

    @Bean
    public Step acquisitionStep() {
        // chunk(100): 100건씩 묶어서 처리
        // → 메모리 효율적이고 중간 실패 시 해당 chunk부터 재시작 가능
        return new StepBuilder("acquisitionStep", jobRepository)
                .<VanTransaction, String>chunk(100, transactionManager)
                .reader(reader)       // DB에서 당일 APPROVED 거래 조회
                .processor(processor) // 카드번호 마스킹 + CSV 한 줄 변환
                .writer(writer)       // CSV 파일 생성 + 카드사 전송
                .build();
    }

    // 매일 자정 자동 실행
    // JobParameters에 time 추가: 같은 Job을 날마다 실행하기 위해 고유 파라미터 필요
    @Scheduled(cron = "0 0 0 * * *")
    public void runBatch() throws Exception {
        log.info("[BATCH] 매입 배치 시작");
        reader.reset();
        JobParameters params = new JobParametersBuilder()
                .addLong("time", System.currentTimeMillis())
                .toJobParameters();
        jobLauncher.run(acquisitionJob(), params);
    }
}`
          },
          {
            title: "CSV 변환 (카드번호 마스킹) — AcquisitionItemProcessor.java",
            code: `@Slf4j
@Component
public class AcquisitionItemProcessor implements ItemProcessor<VanTransaction, String> {

    @Override
    public String process(VanTransaction tx) {
        // 카드번호 마스킹: 앞 6자리 + ****** + 뒤 4자리
        // 개인정보 보호를 위해 중간 6자리를 마스킹
        // 예) 1234567890120003 → 123456******0003
        String cardNumber = tx.getCardNumber().replaceAll("-", "");
        String maskedCard;
        if (cardNumber.length() >= 10) {
            maskedCard = cardNumber.substring(0, 6)
                    + "******"
                    + cardNumber.substring(cardNumber.length() - 4);
        } else {
            maskedCard = "******";
        }

        // CSV 한 줄 생성: RRN,STAN,CARD_NUMBER,AMOUNT,MERCHANT_ID,CARD_COMPANY,APPROVAL_CODE,CREATED_AT
        return String.join(",",
                tx.getRrn(),
                tx.getStan(),
                maskedCard,
                String.valueOf(tx.getAmount()),
                tx.getMerchantId(),
                tx.getCardCompany() != null ? tx.getCardCompany() : "UNKNOWN",
                tx.getApprovalCode() != null ? tx.getApprovalCode() : "",
                tx.getCreatedAt().toString()
        );
    }
}`
          },
          {
            title: "SSE 정산 결과 수신 — SseController.java",
            code: `@Slf4j
@RestController
@RequestMapping("/api/van/sse")
public class SseController {

    // batchDate별로 SSE 연결 관리 (다중 날짜 구독 대응)
    private final Map<String, SseEmitter> emitters = new ConcurrentHashMap<>();

    public record BatchResultRequest(
            String batchDate,
            String statusCode, // SUCCESS / COMPARE_FAILED / SETTLEMENT_FAILED
            String message
    ) {}

    // VAN 관리자가 정산 결과를 기다릴 때 구독
    // Polling 방식 대비 불필요한 요청 없이 서버에서 Push
    @GetMapping(value = "/subscribe/{batchDate}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter subscribe(@PathVariable String batchDate) {
        SseEmitter emitter = new SseEmitter(30 * 60 * 1000L); // 30분 타임아웃
        emitters.put(batchDate, emitter);
        emitter.onCompletion(() -> emitters.remove(batchDate));
        emitter.onTimeout(() -> emitters.remove(batchDate));
        log.info("[SSE] 구독 시작 - 날짜: {}", batchDate);
        return emitter;
    }

    // 카드사가 대조 완료 후 결과를 VAN으로 통보하는 엔드포인트
    @PostMapping("/batch-result")
    public void receiveBatchResult(@RequestBody BatchResultRequest resultRequest) {
        log.info("[SSE] 배치 결과 수신 - 날짜: {}, 상태: {}", 
                resultRequest.batchDate(), resultRequest.statusCode());

        SseEmitter emitter = emitters.get(resultRequest.batchDate());
        if (emitter != null) {
            try {
                emitter.send(SseEmitter.event()
                        .name("batch-result")
                        .data(resultRequest));

                // 최종 상태(SUCCESS, FAILED 시리즈)이면 연결 종료
                if (!"PROCESSING".equals(resultRequest.statusCode())) {
                    emitter.complete();
                    emitters.remove(resultRequest.batchDate());
                }
            } catch (IOException e) {
                log.error("[SSE] 전송 중 오류: {}", e.getMessage());
                emitters.remove(resultRequest.batchDate());
            }
        } else {
            log.warn("[SSE] 활성 구독 없음 - 날짜: {}", resultRequest.batchDate());
        }
    }
}`
          }
        ]
      }
    },
    {
      id: "rag",
      title: "포트폴리오 RAG 챗봇",
      role: "백엔드 개발 / 인프라 배포",
      desc: "Spring AI + Qdrant 벡터DB로 구현한 RAG 파이프라인을 Ubuntu Server에 직접 배포한 포트폴리오 AI 어시스턴트",
      img: "icons/rag2.png",
      stack: ["Java", "Spring Boot", "Spring AI", "OpenAI API", "Qdrant", "Docker", "Nginx", "Ubuntu"],
      links: { github: "https://github.com/jsssun/portfolio-rag" },
      detail: {
        overview: "방문자가 포트폴리오 사이트에서 직접 질문할 수 있는 AI 어시스턴트입니다. profile.txt를 512토큰 단위로 청킹하여 Qdrant 벡터DB에 임베딩 저장하고, 질문이 들어오면 유사도 검색으로 관련 청크를 조회한 뒤 OpenAI GPT에 컨텍스트로 주입해 답변을 생성하는 RAG(Retrieval-Augmented Generation) 구조입니다.",
        problem: "LLM에게 단순히 질문만 던지면 학습 데이터 기반으로 부정확한 답변을 생성합니다. 포트폴리오 특성상 실제 본인 정보(프로젝트, 자격증, 수상 내역 등)만 정확하게 답해야 했고, VirtualBox Ubuntu Server 환경에서 외부 접근이 가능한 배포 구성도 처음부터 직접 설계해야 했습니다.",
        solution: "검색 결과를 시스템 프롬프트에 주입하는 RAG 구조로 LLM의 hallucination을 차단했습니다. Qdrant는 gRPC 포트(6334)를 통해 연결하고, Nginx 리버스 프록시로 HTTPS를 처리했습니다. 앱 시작 시 profile.txt를 자동 임베딩하는 ProfileDataLoader로 초기 데이터 적재를 자동화했습니다.",
        contributions: [
          "RAG 파이프라인 전체 설계 및 구현 — 청킹(TokenTextSplitter, 512토큰) → 임베딩 → 벡터 저장 → 유사도 검색 → LLM 호출",
          "QdrantDocumentStore: gRPC 기반 Qdrant 클라이언트 직접 구성, 컬렉션 자동 생성(initializeSchema) 및 유사도 검색 구현",
          "RagService: 검색된 청크를 [1]/[2] 형식 컨텍스트로 조합 후 시스템 프롬프트에 주입, 정보 범위 제한으로 hallucination 방지",
          "ProfileDataLoader(ApplicationRunner): 앱 시작 시 profile.txt 자동 임베딩, 중복 저장 방지 로직 포함",
          "Ubuntu Server에 Docker + Nginx 기반 배포, CORS 설정으로 GitHub Pages에서 직접 호출 가능하도록 구성",
          "포트폴리오 프론트엔드에서 /api/rag/health 헬스체크로 서버 상태 확인 후 채팅 UI 조건부 표시"
        ],
        codeSnippets: [
          {
            title: "RAG 답변 생성 흐름 — RagService.java",
            code: `public QueryResponseDto generateAnswer(String question, int maxResults) {
    // 1단계: Qdrant에서 관련 청크 유사도 검색
    List relevantDocs =
        vectorStore.similaritySearch(question, Math.max(maxResults, 5));

    if (relevantDocs.isEmpty())
        return new QueryResponseDto(question, "관련 정보를 찾을 수 없습니다.", List.of());

    // 2단계: 청크 → [1] 내용 형태로 컨텍스트 조합
    String context = IntStream.range(0, relevantDocs.size())
        .mapToObj(i -> "[" + (i+1) + "] " + relevantDocs.get(i).getContent())
        .collect(Collectors.joining("\\n\\n"));

    // 3단계: 시스템 프롬프트에 컨텍스트 주입 (RAG 핵심)
    // → 이 제약 없으면 LLM이 학습 데이터 기반으로 hallucination 발생
    String systemPrompt = """
        당신은 정선우의 포트폴리오 AI 어시스턴트입니다.
        주어진 정보에 없는 내용은 "해당 정보는 없습니다"라고 답하세요.
        정보: """ + context;

    // 4단계: LLM 호출 → 최종 답변 반환
    var response = chatService.chat(question, systemPrompt);
    String answer = response.getResult().getOutput().getText();
    return new QueryResponseDto(question, answer, sources);
}`
          },
          {
            title: "벡터DB 청킹 저장 — QdrantDocumentStore.java",
            code: `public void addDocument(String id, String text, Map metadata) {
    Document document = new Document(text, metadata);

    // 긴 텍스트를 512토큰 단위로 분할
    // 통째로 임베딩하면 토큰 한도 초과 + 검색 정밀도 저하
    TokenTextSplitter splitter = TokenTextSplitter.builder()
        .withChunkSize(512)
        .withMinChunkSizeChars(100)
        .withKeepSeparator(true)
        .build();

    List chunks = splitter.split(document);

    // 각 청크를 임베딩 후 Qdrant에 저장
    vectorStore.add(chunks);
}`
          }
        ]
      }
    },
    {
      id: "picount",
      title: "PICOUNT (가계부 웹 서비스)",
      role: "백엔드 개발",
      desc: "소비 데이터를 기반으로 예산을 카테고리별로 관리하고 월별 소비 패턴을 시각화하는 가계부 웹 서비스",
      img: "icons/picount.png",
      stack: ["Java", "Spring Boot", "MySQL", "AWS EC2", "Gradle"],
      links: { github: "https://github.com/Picount-SOLUX" },
      detail: {
        overview: "사용자의 소비 데이터를 카테고리 단위로 관리하고, 월별 소비 통계 및 감정 기반 소비 패턴을 분석할 수 있는 가계부 서비스입니다. 데이터 집계 및 시각화를 통해 사용자에게 직관적인 소비 인사이트를 제공합니다.",
        problem: "소비 데이터를 단순 기록하는 수준을 넘어, 월별 통계와 변화 추이를 효율적으로 계산해야 했으며, 인증 및 프론트-백엔드 분리 환경에서 발생하는 보안 및 통신 이슈를 해결해야 했습니다.",
        solution: "카테고리 기반 데이터 모델을 설계하고, 월말 리포트 기능에서 집계 로직을 구현하여 소비 통계 및 변화량을 계산했습니다. 또한 Spring Security 설정을 통해 JWT 인증 흐름을 개선하고 CORS 문제를 해결하여 안정적인 API 통신 환경을 구축했습니다.",
        contributions: [
          "수입·지출 등록/수정/삭제 API 구현 및 카테고리 기반 DB 설계",
          "친구 추가 및 방명록 기능 개발을 통한 사용자 간 상호작용 기능 구현",
          "캘린더 기반 소비 기록 및 이미지 저장 기능 API 개발",
          "월말 소비 리포트 기능 구현 — 카테고리별 통계 및 소비 추이 계산",
          "JWT 인증 실패 응답 처리 로직 개선 및 예외 처리 일관성 확보",
          "Spring Security 기반 CORS 설정을 통한 프론트-백엔드 통신 문제 해결"
        ]
      }
    },
    {
      id: "cardtrend",
      title: "고객 카드 결제 트랜드 대시보드",
      role: "풀스택 개발 / 인프라 설계",
      desc: "Nginx 이중화 + MySQL Replication 구조 위에서 530만 건 데이터를 실시간 집계·시각화하는 3-Tier 대시보드",
      img: "icons/card.png",
      stack: ["Java", "Servlet/JSP", "JDBC", "HikariCP", "Nginx", "Tomcat", "MySQL", "Docker", "Logback"],
      links: { github: "https://github.com/jsssun/card-trend-dashboard" },
      detail: {
        overview: "약 530만 건의 거래 원천 데이터를 분기 단위로 사전 집계하여 카테고리별 금액·비율·증감률을 빠르게 조회할 수 있는 3-Tier 구조의 대시보드입니다. Nginx 로드밸런서 → Tomcat WAS 이중화 → MySQL Source/Replica 구조로 고가용성을 확보했습니다.",
        problem: "530만 건 원천 데이터를 매번 직접 조회할 경우 응답 속도가 지나치게 느려지는 문제와, WAS 이중화 환경에서 세션이 유지되지 않는 문제가 있었습니다.",
        solution: "사전 집계 테이블(TREND_QUARTERLY)을 도입해 쿼리 성능을 대폭 개선하고, Nginx Session Replication과 HikariCP 기반 Read/Write 분리 DataSource를 적용해 가용성과 성능을 함께 확보했습니다.",
        contributions: [
          "Nginx(로드밸런서) → Apache Tomcat 2대(이중화) → MySQL Source/Replica 전체 인프라 설계 및 구현",
          "사전 집계 테이블 도입으로 530만 건 데이터 조회 성능 최적화",
          "HikariCP 기반 Read/Write DataSource 분리 구성 (읽기 → Replica, 쓰기 → Source)",
          "Nginx Session Replication 적용으로 WAS 이중화 환경에서 세션 일관성 보장",
          "분기별 소비 트렌드, 전분기 대비 증감률, Top 3 카테고리 시각화 기능 구현"
        ]
      }
    },
  ],

  activities: [
    { title: "우리FISA 6기", period: "2025.12 ~ 현재", desc: "클라우드 서비스 개발 과정 (React, Next.js, TypeScript, Java, Spring Boot)" },
    { title: "개발 동아리", period: "2024.03 ~ 2026.02", desc: "기술 세미나 6회 운영, 부원·프로젝트팀 관리, 타 학회 협업 해커톤 추진. 프로젝트 발표회 대상·최우수상 수상" },
    { title: "알고리즘 학회", period: "2024.03 ~ 2025.02", desc: "매주 알고리즘 스터디 진행 및 과제 채점·피드백 제공" },
    { title: "게임 개발 동아리", period: "2023.09 ~ 2025.02", desc: "UNICON 우수상, SBA 게임 공모전 우수상 수상" }
  ],

  awards: [
    { title: "기술세미나 우수상", org: "우리FIS 아카데미", date: "2026.03.05", desc: "오픈소스 기여하기 주제로 기술세미나를 진행해 우수상을 수상하였습니다." },
    { title: "2024 SBA X 슈퍼빌런랩스 게임 컨테스트 우수상", org: "서울경제진흥원(SBA) & 슈퍼빌런랩스", date: "2024.09.08", desc: "전국 참가팀 중 창의성과 완성도를 인정받아 수상했으며, 기획 및 개발 능력과 팀 프로젝트를 통한 실무 문제 해결 능력을 인정받았습니다." },
    { title: "UNICON 2024 우수상", org: "UNIDEV", date: "2024.08.24", desc: "Travel Around The World를 UNICON 2024 게임 전시회에 출품하여 전국 19개 동아리, 50개 팀 중 4등을 수상했습니다." }
  ]
};

// --- Badge Map & Tech Stack Renderer ---

const BADGE_MAP = {
  "Java": "https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white",
  "Python": "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
  "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
  "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
  "C#": "https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white",
  "MySQL": "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
  "Nginx": "https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white",
  "Apache Tomcat": "https://img.shields.io/badge/Tomcat-F8DC75?style=flat&logo=apachetomcat&logoColor=black",
  "Docker": "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
  "AWS": "https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonwebservices&logoColor=white",
  "WSL": "https://img.shields.io/badge/WSL-0078D4?style=flat&logo=windows&logoColor=white",
  "Spring Boot": "https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white",
  "Spring Batch": "https://img.shields.io/badge/Spring_Batch-6DB33F?style=flat&logo=spring&logoColor=white",
  "Servlet/JSP": "https://img.shields.io/badge/Servlet%2FJSP-007396?style=flat&logo=openjdk&logoColor=white",
  "JDBC": "https://img.shields.io/badge/JDBC-007396?style=flat&logo=openjdk&logoColor=white",
  "HikariCP": "https://img.shields.io/badge/HikariCP-0096FF?style=flat&logoColor=white",
  "Lombok": "https://img.shields.io/badge/Lombok-CC0000?style=flat&logoColor=white",
  "Logback": "https://img.shields.io/badge/Logback-6DB33F?style=flat&logoColor=white",
  "JUnit": "https://img.shields.io/badge/JUnit5-25A162?style=flat&logo=junit5&logoColor=white",
  "React": "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black",
  "Next.js": "https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white",
  "Tailwind CSS": "https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white",
  "HTML": "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
  "Git": "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
  "Postman": "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white",
  "Notion": "https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white",
  "Eureka": "https://img.shields.io/badge/Eureka-6DB33F?style=flat&logo=spring&logoColor=white",
  "Spring Data JPA": "https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=flat&logo=spring&logoColor=white"
};

function renderTechStack(techStack) {
  return Object.entries(techStack).map(([category, items]) => `
    <div class="techstack-row">
      <span class="techstack-category">${category}</span>
      <div class="techstack-badges">
        ${items.map(item => {
    const url = BADGE_MAP[item];
    return url
      ? `<img src="${url}" alt="${item}" class="techstack-badge-img" />`
      : `<span class="techstack-badge">${item}</span>`;
  }).join("")}
      </div>
    </div>
  `).join("");
}

// --- App Logic ---

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  initTheme();

  window.addEventListener("hashchange", router);
  router();

  function router() {
    const hash = window.location.hash;
    window.scrollTo(0, 0);

    if (hash.startsWith("#project/")) {
      const projectId = hash.split("/")[1];
      const project = portfolioData.projects.find((p) => p.id === projectId);
      if (project) {
        renderDetail(project);
      } else {
        renderHome();
      }
    } else {
      renderHome();
    }
  }

  function renderHome() {
    const { profile, techStack, certs, projects, activities, awards } = portfolioData;

    app.innerHTML = `
      <header class="profile-section">
        <div class="avatar-wrapper">
          <img src="${profile.avatar}" alt="${profile.name}" class="avatar" />
        </div>
        <div class="profile-info">
          <h1 class="name">${profile.name}</h1>
          <p class="bio">${profile.bio}</p>
          <div class="social-links">
            <a href="mailto:${profile.email}" class="btn-pill">Email</a>
            <a href="${profile.github}" target="_blank" class="btn-pill">GitHub</a>
          </div>
        </div>
      </header>

      <hr class="divider" />

      <!-- 채팅 섹션: 서버 연결 확인 후 표시 -->
      <section class="fade-in chat-section" style="display:none;">
        <h2 class="section-title">선우에게 물어보기</h2>
        <p class="chat-desc">프로젝트, 기술스택, 경험 등 무엇이든 질문해보세요.</p>
        <div class="chat-container">
          <div class="chat-messages" id="chatMessages">
            <div class="chat-bubble bot">
              안녕하세요. 선우의 포트폴리오에 오셨군요.<br/>
              궁금하신 점이 있으시면 편하게 물어봐 주세요.
            </div>
          </div>
          <div class="chat-input-row">
            <input
              type="text"
              id="chatInput"
              class="chat-input"
              placeholder="어떤 프로젝트를 해봤나요?"
            />
            <button id="chatSendBtn" class="chat-send-btn" aria-label="전송">→</button>
          </div>
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Tech Stack</h2>
        <div class="techstack-table">
          ${renderTechStack(techStack)}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Certifications</h2>
        <div class="certs-list">
          ${certs.map((c) => `<span class="cert-badge">${c}</span>`).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Featured Projects</h2>
        <div class="grid-container">
          ${projects.map((p) => `
            <a href="#project/${p.id}" class="project-card">
              <div class="card-img-wrapper">
                <img src="${p.img}" alt="${p.title}" />
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3>${p.title}</h3>
                  <span class="role-badge">${p.role}</span>
                </div>
                <p class="card-desc">${p.desc}</p>
                <div class="tech-stack">
                  ${p.stack.slice(0, 3).map((t) => `<span class="tech-item">${t}</span>`).join("")}
                  ${p.stack.length > 3 ? `<span class="tech-item">+${p.stack.length - 3}</span>` : ""}
                </div>
              </div>
            </a>
          `).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Awards</h2>
        <div class="awards-list">
          ${awards.map((a) => `
            <div class="award-item">
              <div class="award-left">
                <span class="award-trophy">🏆</span>
              </div>
              <div class="award-body">
                <div class="award-header">
                  <h4 class="award-title">${a.title}</h4>
                  <span class="award-date">${a.date}</span>
                </div>
                <span class="award-org">${a.org}</span>
                <p class="award-desc">${a.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>

      <section class="fade-in">
        <h2 class="section-title">Experience & Activities</h2>
        <div class="activity-list">
          ${activities.map((a) => `
            <div class="activity-item">
              <div class="act-header">
                <h4>${a.title}</h4>
                <span class="period">${a.period}</span>
              </div>
              <p class="act-desc">${a.desc}</p>
            </div>
          `).join("")}
        </div>
      </section>

      <footer>
        &copy; 2026 ${profile.name}. All rights reserved.
      </footer>
    `;

    // app.innerHTML 세팅 완료 후 채팅 초기화
    initChat();
  }

  function renderDetail(p) {
    app.innerHTML = `
      <nav class="back-nav">
        <button class="back-btn">
          ← Back to Portfolio
        </button>
      </nav>

      <article class="detail-header">
        <h1 class="detail-title">${p.title}</h1>
        <span class="role-badge" style="font-size: 0.9rem; padding: 6px 12px;">${p.role}</span>
      </article>

      <div class="detail-grid">
        <div class="detail-main">
          <img src="${p.img}" alt="${p.title}" class="detail-image" />

          <div class="detail-desc">
            <h3>Overview</h3>
            <p>${p.detail.overview}</p>

            <h3>Problem & Solution</h3>
            <p><strong>Problem:</strong> ${p.detail.problem}</p>
            <p><strong>Solution:</strong> ${p.detail.solution}</p>

            <h3>Key Contributions</h3>
            <ul>
              ${p.detail.contributions.map((item) => `<li>${item}</li>`).join("")}
            </ul>

            ${p.detail.codeSnippets ? `
            <h3>핵심 코드</h3>
            ${p.detail.codeSnippets.map(snippet => `
              <div style="margin-bottom:24px;">
                <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px; font-weight:600;">${snippet.title}</p>
                <pre style="
                  background: var(--code-bg, #f6f8fa);
                  border: 1px solid var(--border);
                  border-radius: 10px;
                  padding: 18px;
                  overflow-x: auto;
                  font-size: 0.78rem;
                  line-height: 1.7;
                  color: var(--code-color, #24292e);
                  font-family: 'Courier New', monospace;
                  white-space: pre;
                ">${snippet.code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
              </div>
            `).join('')}
            ` : ''}
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-section">
            <span class="sidebar-label">Tech Stack</span>
            <div class="tech-stack" style="margin-top:8px;">
              ${p.stack.map((t) => `<span class="tech-item">${t}</span>`).join("")}
            </div>
          </div>

          <div class="sidebar-section">
            <span class="sidebar-label">Links</span>
            <a href="${p.links.github}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%;">GitHub Repository</a>
            ${p.links.playstore
        ? `<a href="${p.links.playstore}" target="_blank" class="btn-pill" style="display:block; text-align:center; width:100%; margin-top:10px;">Play Store</a>`
        : ""}
          </div>
        </aside>
      </div>

      <footer>
        &copy; 2026 ${portfolioData.profile.name}. All rights reserved.
      </footer>
    `;

    const backBtn = app.querySelector(".back-btn");
    backBtn.onclick = (e) => {
      e.preventDefault();
      window.location.hash = "";
    };
  }

  function initChat() {
    const section = document.querySelector(".chat-section");
    const input = document.getElementById("chatInput");
    const sendBtn = document.getElementById("chatSendBtn");
    const messages = document.getElementById("chatMessages");

    if (!section || !input || !sendBtn || !messages) return;

    const RAG_URL = "https://43.202.50.223.nip.io";

    // 서버 연결 확인 — 연결되면 섹션 표시, 아니면 숨김 유지
    fetch(`${RAG_URL}/api/rag/health`, {
      signal: AbortSignal.timeout(2000)
    })
      .then((res) => {
        if (!res.ok) throw new Error("서버 응답 오류");
        section.style.display = "block";
      })
      .catch(() => {
        section.style.display = "none";
      });

    // 메시지 버블 추가
    function addMessage(text, isUser) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${isUser ? "user" : "bot"}`;
      bubble.innerHTML = text.replace(/\n/g, "<br/>");
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    // 로딩 말풍선 (점 애니메이션)
    function addLoading() {
      const bubble = document.createElement("div");
      bubble.className = "chat-bubble bot loading";
      bubble.id = "loadingBubble";
      bubble.innerHTML = `<span class="loading-dots"><span>.</span><span>.</span><span>.</span></span>`;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function removeLoading() {
      const loading = document.getElementById("loadingBubble");
      if (loading) loading.remove();
    }

    // API 호출
    async function sendMessage() {
      const query = input.value.trim();
      if (!query) return;

      input.value = "";
      sendBtn.disabled = true;
      addMessage(query, true);
      addLoading();

      try {
        const res = await fetch(`${RAG_URL}/api/rag/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, maxResults: 3 }),
        });

        const json = await res.json();
        removeLoading();

        if (json.success) {
          addMessage(json.data.answer, false);
        } else {
          addMessage("답변을 가져오지 못했습니다. 다시 시도해주세요.", false);
        }
      } catch (e) {
        removeLoading();
        addMessage("서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.", false);
      } finally {
        sendBtn.disabled = false;
        input.focus();
      }
    }

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }

  function initTheme() {
    const STORAGE_KEY = "theme";
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;

    const iconEl = toggleBtn.querySelector(".theme-icon");
    if (!iconEl) return;

    const systemPrefersDark = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      iconEl.textContent = theme === "dark" ? "🌙" : "☀️";
      toggleBtn.setAttribute(
        "aria-label",
        `Switch to ${theme === "dark" ? "light" : "dark"} mode`
      );
    };

    const getInitialTheme = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
      return systemPrefersDark() ? "dark" : "light";
    };

    applyTheme(getInitialTheme());

    toggleBtn.addEventListener("click", () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
});
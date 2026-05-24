# SiC Wiki — 뼈대 재구성 설계안 (v2)

**작성일**: 2026-05-24
**기준**: 개인 SiC 학습 노트(책 구조) → 공개 wiki 미러링
**원칙**:
1. SiC 책 구조(Part I~IV + Defect) 그대로 mkdocs nav에 반영
2. SiC Defect Management 는 **최상위 독립 섹션** (결함 관리가 SiC 핵심 주제이므로 가장 잘 보이는 위치)
3. 기존 강점(Photo / FDC / Machine Vision) 은 **Part IV. 공정 제어 & AI 확장** 으로 통합 보존
4. onsemi 공개 백서(TND6396, BRD8094) 는 별도 **References** 섹션으로 분리

---

## 1. 새 뼈대 (Top-level Navigation)

```
홈
소개

📚 Part I. SiC Foundations             ← 재료·웨이퍼·디바이스 (Ch.1~3)
⚙️ Part II. Process & Manufacturing    ← 공정 흐름·산업 컨텍스트 (Ch.4~6)
📕 Part III. SiC Defect Management     ← 결함·검사·신뢰성 (독립 섹션)
🔧 Part IV. 공정 제어 & AI 확장          ← 기존 wiki 강점 통합 보존
📎 Part V. References                  ← 공개 백서·용어집
```

---

## 2. 상세 nav 매핑

### 📚 Part I. SiC Foundations  →  `docs/01-foundations/`

| 주제 | wiki 페이지 | 파일 경로 |
|---|---|---|
| (Part I 개요) | 개요 | `01-foundations/index.md` |
| 재료·결정 기초 | Ch.1 SiC 재료·결정 기초 | `01-foundations/ch01-material.md` |
| 웨이퍼 & 에피택셜 | Ch.2 SiC 웨이퍼 & 에피 (BPD/TSD/TED) | `01-foundations/ch02-wafer-epi.md` |
| 디바이스 구조 | Ch.3 SiC 디바이스 구조 (MOSFET/SJ/JBS) | `01-foundations/ch03-device.md` |

> **기존 파일 흡수**: `01-devices-process/sic-mosfet-structure.md` → Ch.3, `01-devices-process/epitaxy.md` + `01-devices-process/defects.md` → Ch.2 로 통합 이관

---

### ⚙️ Part II. Process & Manufacturing  →  `docs/02-process/`

| 주제 | wiki 페이지 | 파일 경로 |
|---|---|---|
| (Part II 개요) | 개요 | `02-process/index.md` |
| 공정 흐름 (FEOL→BEOL) | Ch.4 SiC 공정 흐름 (FEOL→BEOL) | `02-process/ch04-process-flow.md` |
| 산업 컨텍스트 | Ch.5 onsemi SiC 사업·제품·BK Factory 케이스 | `02-process/ch05-onsemi-bk.md` |
| 공급망·EV 전략 | Ch.6 수직계열 통합 & EV 전략 (BRD8094 참고) | `02-process/ch06-vertical-integration.md` |

---

### 📕 Part III. SiC Defect Management  →  `docs/03-defect/`  **(독립 최상위 섹션)**

| 주제 | wiki 페이지 | 파일 경로 |
|---|---|---|
| (Defect 섹션 표지) | 개요 + 결함 관리 키워드 맵 | `03-defect/index.md` |
| **Part A. 결함의 이해** | | |
| D-Ch.1 결함 분류 체계 | A-1 결함 분류 (Killer/Slow/Nuisance) | `03-defect/a01-classification.md` |
| D-Ch.2 SiC 표면 결함 | A-2 표면 결함 (Carrot/Triangular/Comet) | `03-defect/a02-surface.md` |
| D-Ch.3 Trench·Sub-CD 마이크로 결함 | A-3 Trench·Sub-CD 마이크로 | `03-defect/a03-trench-subcd.md` |
| D-Ch.4 Killer/Slow-Killer RCA | A-4 Killer RCA (5-Why/FMEA/FTA) | `03-defect/a04-killer-rca.md` |
| **Part B. 검사 장비·AI·운영** | | |
| D-Ch.5 AOI 검사 장비 운영 | B-5 AOI 운영 (레시피/EVT/PM) | `03-defect/b05-aoi.md` |
| D-Ch.6 ADC (Auto Defect Classification) | B-6 ADC (재학습 사이클) | `03-defect/b06-adc.md` |
| D-Ch.7 Klarity 운영 | B-7 Klarity (Wafer Map/DB/Yield) | `03-defect/b07-klarity.md` |
| **Part C. 관리 체계·품질** | | |
| D-Ch.8 SPC 기반 결함 밀도 관리 | C-8 SPC·WECO·결함밀도 트렌드 | `03-defect/c08-spc.md` |
| D-Ch.9 VOG (Visual Outgoing) | C-9 VOG (Sample Plan/AQL) | `03-defect/c09-vog.md` |
| D-Ch.10 신규 공정 도입 결함 관리 | C-10 신규 공정 결함 예측·체계 | `03-defect/c10-new-process.md` |
| **Part D. 신뢰성 백서 (TND6396)** | | |
| D-Ch.11 신뢰성 방법론 & Qualification | D-11 5축 방법론·JEDEC/AEC/AQG324 | `03-defect/d11-reliability.md` |
| D-Ch.12 SiC/SiO₂ 계면 & Gate Oxide | D-12 Gate Oxide·TDDB·21V/20년 | `03-defect/d12-gate-oxide.md` |
| D-Ch.13 BTI & Dynamic Stressing | D-13 PBTI/NBTI·UF-BTI·Comphy | `03-defect/d13-bti.md` |
| D-Ch.14 Body Diode & BPD | D-14 BPD→SF·Pulsed Body Diode | `03-defect/d14-body-diode.md` |

> **결함 관리 키워드 → 챕터 맵**:
> - 표면/Trench/Sub-CD/Killer → A-1~A-4
> - AOI / ADC / Klarity → B-5~B-7
> - SPC / VOG / 신규 공정 → C-8~C-10
> - 신뢰성·BPD·Gate Oxide → D-11~D-14

---

### 🔧 Part IV. 공정 제어 & AI 확장  →  `docs/04-control-ai/`

> 기존 wiki 의 `02-photolithography/` + `03-fdc-spc/` + `04-ai-applications/` 를 한 섹션으로 통합·재배치.
> Si Fab 에서 축적한 공정 제어·AI 자산이 SiC 도메인으로 어떻게 확장되는지 보여주는 트랙.

| 소섹션 | 페이지 | 파일 경로 | 출처 |
|---|---|---|---|
| (개요) | Part IV 개요 — Si Fab 자산 → SiC 확장 | `04-control-ai/index.md` | 신규 |
| **Photo 공정** | FEOL/BEOL 포토리소그래피 | `04-control-ai/photo-feol-beol.md` | 기존 `02-photolithography/feol-beol.md` |
| | OPC 마스크 설계 | `04-control-ai/photo-opc.md` | 기존 `02-photolithography/opc-mask.md` |
| | ASML/Nikon Tool Matching | `04-control-ai/photo-tool-matching.md` | 기존 `02-photolithography/tool-matching.md` |
| **FDC / SPC** | Weco Rule 설계 | `04-control-ai/fdc-weco-rules.md` | 기존 `03-fdc-spc/weco-rules.md` |
| | FDC AI 이상 감지 사례 | `04-control-ai/fdc-ai-anomaly.md` | 기존 `03-fdc-spc/ai-anomaly-detection.md` |
| | GNN 기반 FDC (KCS2023) | `04-control-ai/fdc-gnn.md` | 신규 (저자 논문) |
| **Machine Vision & AI** | 머신비전 적용 사례 (WCMP) | `04-control-ai/ai-machine-vision.md` | 기존 `04-ai-applications/machine-vision.md` |
| | 불량 분류 모델 | `04-control-ai/ai-defect-classification.md` | 기존 `04-ai-applications/defect-classification.md` |
| | RCA Ontology (PCB→SiC 확장) | `04-control-ai/ai-rca-ontology.md` | 신규 |

---

### 📎 Part V. References  →  `docs/05-references/`

| 자료 | wiki 페이지 | 파일 경로 |
|---|---|---|
| (자료 색인) | 색인 | `05-references/index.md` |
| onsemi TND6396-D Robust Reliability (공개 백서) | 📄 TND6396 요약 + 원본 링크 | `05-references/tnd6396.md` |
| onsemi BRD8094-D Vertical Integration (공개 자료) | 📄 BRD8094 요약 + 원본 링크 | `05-references/brd8094.md` |
| (신규) | 용어집 (Glossary) | `05-references/glossary.md` (기존 `references/glossary.md` 이관) |

---

## 3. 기존 파일 → 신규 위치 매핑 (마이그레이션 표)

| 기존 경로 | 신규 경로 | 처리 |
|---|---|---|
| `docs/01-devices-process/index.md` | `docs/01-foundations/index.md` | 내용 재작성 (Part I 개요) |
| `docs/01-devices-process/sic-mosfet-structure.md` | `docs/01-foundations/ch03-device.md` | 이관 + 확장 (SJ/JBS/SBD 추가) |
| `docs/01-devices-process/epitaxy.md` | `docs/01-foundations/ch02-wafer-epi.md` | 이관 + PVT/HTCVD 보강 |
| `docs/01-devices-process/defects.md` | `docs/01-foundations/ch02-wafer-epi.md` (BPD/TED/TSD 절) | Ch.2 안에 흡수 |
| `docs/02-photolithography/*` | `docs/04-control-ai/photo-*.md` | 3개 파일 이관 |
| `docs/03-fdc-spc/*` | `docs/04-control-ai/fdc-*.md` | 2개 파일 이관 + GNN 신규 |
| `docs/04-ai-applications/*` | `docs/04-control-ai/ai-*.md` | 2개 파일 이관 + Ontology 신규 |
| `docs/references/glossary.md` | `docs/05-references/glossary.md` | 이관 |

> ⚠️ **URL 변경 영향**: 외부에서 `01-devices-process/...` 등으로 직접 링크된 곳이 있으면 깨짐. mkdocs-redirects 플러그인으로 301 매핑 권장.

---

## 4. 페이지 템플릿 (모든 챕터 공통)

```markdown
# Ch.X 제목

> **핵심 키워드**: (이 챕터에서 다루는 SiC 관련 키워드)
> **참조 자료**: TND6396 §X / BRD8094 §X (해당 시)

## 1. 핵심 개념

## 2. Si vs SiC 차이 (해당 시)

## 3. 산업 적용 관점 (onsemi/BK Factory 등 공개 케이스)

## 4. 결함 / RCA 연결 (Part III 와의 cross-link)

## 5. 참고자료

---

## 추가 노트 (YYYY-MM-DD)
- ...
```

> "## 추가 노트 (YYYY-MM-DD)" 업데이트 규약을 wiki 에도 동일 적용 → 학회/논문/공개 자료를 챕터 하단에 누적.

---

## 5. 작업 순서 권장

1. **Phase 1 (구조 전환)**: 새 폴더 5개(`01-foundations` ~ `05-references`) 생성 + `index.md` 만 채워서 mkdocs build 가능 상태로
2. **Phase 2 (SiC 핵심)**: Part I → II → III 순으로 본문 이식 (SiC 본질을 먼저 다지는 사용자 요구 그대로)
3. **Phase 3 (기존 자산 이관)**: Part IV 로 Photo/FDC/AI 기존 파일 옮기고 SiC 도메인 적용 절 추가
4. **Phase 4 (References)**: TND6396 / BRD8094 요약 페이지 + Glossary 정리
5. **Phase 5 (정리)**: 기존 `01-devices-process` 등 빈 폴더 삭제, `mkdocs-redirects` 로 옛 URL 301

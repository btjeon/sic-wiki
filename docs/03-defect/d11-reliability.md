---
title: D-11 신뢰성 방법론 & Two Qualification Routes
---

# D-11 신뢰성 방법론 & Two Qualification Routes

> **핵심 키워드**: 5축 방법론 · Intrinsic vs Extrinsic Qualification · JEDEC · AEC · AQG324 · JC-70.2 · Mission Profile · In-situ Degradation Monitoring
> **참조 자료**: [TND6396](../05-references/tnd6396.md) Ch.1–3
> **목적**: SiC 양산 제품의 신뢰성을 보장하는 onsemi 의 **방법론 프레임워크** 이해.

## 1. Quality & Reliability 5축 방법론

onsemi 는 자동차 시장에서 수십 년간 입증된 **Si 기반 품질 방법론** 을 SiC 에 맞춰 재단. 다음 5축의 상호작용으로 신뢰성을 보장:

| # | 축 | 도구·활동 |
|---|---|---|
| 1 | **Design Methodology** | 설계 단계 PFMEA, Margin / Redundancy |
| 2 | **Production Monitoring** | 공정 파라미터 실시간 모니터링 |
| 3 | **Manufacturing Control** | [SPC](c08-spc.md) + EQC + FDC |
| 4 | **Screening** | Wafer / Burn-in / Final 다층 전기 스크리닝 |
| 5 | **Qualification Plans** | JEDEC + AEC + onsemi Robustness Extension |

!!! tip "핵심 원칙"
    모든 reliability hazard 는 failure mode · 메커니즘을 추적하여 **공정 약점에 영구적 시정조치 (Permanent Corrective Action)** 로 환류.

## 2. Two Qualification Routes

| 구분 | **Wafer Fab Route (Intrinsic)** | **Product & Assembly Route (Extrinsic)** |
|---|---|---|
| 목적 | 물리 기반 열화 모델 (Physics-based Degradation Model) 추출 | 외재성 결함·의존성 부하 검증 |
| 출력 | SOA / Lifetime Equation / Design Rule | AEC-Q101 적합성 판정, Mission-fit 증명 |
| 대표 항목 | [D-12 Gate Oxide](d12-gate-oxide.md) · [D-13 BTI](d13-bti.md) · [D-14 BPD](d14-body-diode.md) | HTRB · HTGB · TC · AEC-Q101 stress suite |

## 3. SiC 만의 도전 과제 — 표준 + Robustness + Open Dialogue

### 3.1 국제 표준 엄격 준수

- **JEDEC** — 반도체 일반 신뢰성
- **AEC** — Automotive Electronics Council (Q101, Q102 등)
- **AQG324** — 자동차용 파워 모듈 Qualification
- **JC-70.2 subcommittee** — Wide Bandgap 표준화:
    - **TG702_1** Reliability & Qualification Methods
    - **TG702_2** Datasheet Elements & Parameters
    - **TG702_3** Test & Characterization

### 3.2 국제 표준을 넘어선 강건성 확장 (Robustness Extensions)

- 더 긴 시험 시간
- 더 높거나 추가된 온도 포인트
- **In-situ Degradation Monitoring** — Stress 중에도 열화 진행 관찰
- 응력 후 물리 분석 (FA 포렌식 단계)

### 3.3 고객과의 개방형 대화

- Mission Profile 정의를 고객·공급사 공동으로 수립.
- 예 — EV 주행 확률 · 충전 패턴 · 온도 프로파일.

### 3.4 Failure Mechanism 의 깊은 이해

- BPD-SF · TDDB · BTI · Body Diode Degradation 각각의 물리적 근본을 파악 → 외삽에 필요한 parameter 결정.

## 4. Defect Management 관점

- **Wafer Fab Route** 는 **결함 관리 체계의 핵심 영역** — SPC, ADC, AOI, Klarity 가 이 루트를 지키는 도구.
- **Product Route** 는 Reliability Engineering 중심이지만, Infant Mortality 와 BPD / TDDB 소스 추적은 결함 관리와 공동 연결.
- 두 Qualification Route 를 연결하면 **공정 약점 → 스크리닝 → 신뢰성 결과 → corrective action 의 Loop Closure** 가능.

## 5. 운영 포인트

- 모든 Reliability Hazard 는 **Failure Mode · Failure Mechanism · Process Origin** 으로 분해해 관리.
- Corrective Action 은 **SPC Limit · Inspection Recipe · ADC Class · Screening Criterion** 중 어디에 반영할지 명확히 정의.

## 6. 참고자료

- onsemi TND6396/D Rev.2 (Mar 2024) Ch.1–3 → [요약](../05-references/tnd6396.md)
- JEDEC JESD22 / JESD47
- AEC-Q101 (Discrete Semiconductor)
- AQG324 (Automotive Power Module Qualification)
- JC-70.2 — Wide Bandgap (WBG) Power Devices Standardization Committee

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.11 신뢰성 방법론 & Two Qualification Routes` 본문 1차 이관.
- TND6396 PDF 첨부는 `docs/assets/pdf/` 로 이관 시 5축 그림·Figure 1·2 직접 임베드 예정.

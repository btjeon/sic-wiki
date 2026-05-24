---
title: D-12 SiC/SiO₂ 계면 & Gate Oxide 신뢰성
---

# D-12 SiC/SiO₂ 계면 & Gate Oxide 신뢰성

> **핵심 키워드**: D_it · Comphy · Charge Pumping · DLTS · Q_BD · TDDB · TAT · FN · Arrhenius + E-Model · 21 V · 20 년 · 5 ppm
> **참조 자료**: [TND6396](../05-references/tnd6396.md) Ch.4 (SiC/SiO₂ Interface), Ch.5 (Front-End Defect Screening), Ch.6 (전기적 스크리닝), Ch.7 (Q_BD), Ch.8 (TDDB)
> **목적**: SiC MOSFET 의 가장 약한 링크인 **Gate Oxide / SiC-SiO₂ 계면** 의 분석·스크리닝·수명 모델.

## 1. 왜 SiC/SiO₂ 계면이 중요한가

- SiC MOSFET 의 약점 — **~1.3 nm 두께의 계면**.
- 넓은 밴드갭으로 **계면 trap density ($D_{it}$)** 가 Si 대비 높음 → $V_{th}$ shift, channel mobility 저하, BTI, TDDB 수명 단축의 원인.

## 2. onsemi University Research Network (Figure 4)

| 기관 | 역할 |
|---|---|
| **University of Gent** (Belgium) | Trap 분포 분석 |
| **TU Wien** (Austria) | Comphy Model, NBTI / PBTI fitting |
| **Universität Antwerpen** (Belgium) | EPR / EDMR |
| **Universität Bremen** (Germany) | Charge Pumping |

### 2.1 종합 분석 기법

| 기법 | 목적 |
|---|---|
| **SIMS, XPS** | 조성 / 깊이 프로파일 |
| **EPR / EDMR / ESR** | 전자스핀 결함 (Pb 결함, Carbon dimer) |
| **Charge Pumping** | 계면 trap 밀도 $D_{it}$ 정량화 |
| **Low-Level Transient Spectroscopy / DLTS / TDRC** | Trap 에너지 · 캡처 단면적 |
| **Optical CV / Hall / Fast Transients** | Donor / Acceptor 구분 |
| **TDDB** | 수명 평가 |
| **Reliability Conduction Modeling** | FN / TAT / Trap-assisted |

## 3. SiC Front-End Defect Screening Flow (Figure 5)

```mermaid
flowchart LR
    A[Substrate Scan] --> B[Epitaxy]
    B --> C[Post-Epi Scan]
    C --> D[Wafer Process]
    D --> E[In-Process Defect Scan]
    E --> F[Wafer Acceptance Test]
    F --> G[Burn-In]
    G --> H[Thinning]
    H --> I[Electrical Wafer Test]
    I --> J[Outgoing Inspection]
```

- 모든 결함은 **좌표 추적 + 자동 분류 (Coordinate Tracking & Auto-classification)** 으로 관리.
- 다중 inspection 으로 critical step 의 잠재 공정 결함 식별 → flag 된 die 는 모집단에서 제외.

!!! note "핵심 원칙"
    **Killer Defects** 또는 **Electrical Outliers** 는 제거 → AEC-Q101 Compliance + Infant Mortality 회피의 토대.

## 4. 전기적 스크리닝 다층화 (Multi-level)

| Level | 항목 |
|---|---|
| **Wafer Level** | Parametric Test, **GOI (Gate Oxide Integrity)** 평가 |
| **Burn-in** | 가속 응력으로 Potential Infants 제거 |
| **Final / Outgoing** | 패키지 후 최종 검사로 Outliers 제거 |

## 5. Gate Oxide Q_BD 모니터링 (Figure 6)

- 양산 단계에서 **Lot 마다** 게이트 산화막 품질 평가.
- 조건 — **5 mA/cm² 강제 + Forward Gate Bias, 상온**.
- 비교 대상 — SiC MOSFET die ↔ **2.7 mm × 2.7 mm 대면적 NMOS Capacitor** 의 $Q_{BD}$ (charge-to-breakdown) 분포.
- Wafer 레벨 Acceptance Criterion 으로 합·불합격 판정.

!!! tip "결과"
    **Weibull plot** 에서 SiC MOSFET · SiC NMOS Cap · Si MOSFET 비교 → SiC 가 Si 와 **동등 또는 우수한 $Q_{BD}$** 도달을 공식 확인. 동일 nominal 두께에서 **onsemi planar SiC 의 intrinsic $Q_{BD}$ ≈ Si × 50** (5 mA/cm², Forward Bias Gate, RT).

## 6. Gate Oxide TDDB 수명 모델 (Figure 7–9)

### 6.1 전도 메커니즘 식별 (결정적)

| 영역 | 우세 메커니즘 |
|---|---|
| **낮은 전계 · 고온** | Thermally Assisted Tunneling (TAT) |
| **고전계** | Fowler-Nordheim (FN) |

!!! warning "주의"
    잘못 식별하면 실제 사용 조건과 다른 모드에서 stress → 상용 조건에서 **수명 과대 / 과소 평가** 의 직접 원인.

### 6.2 가속 모델

- **Arrhenius** (온도) + **E-model** (게이트 전압).
- E-model 은 보수적일 수 있어 **더 낮은 전계 · 장시간** ($t_{63\%}$ 수개월~년 단위) stress 로 모델 보정 진행 중.

### 6.3 시험 조건 / 결과

- 시험 예 — **175 °C, < 9 MV/cm** (Electron Trapping 영역).
- **결과** — $V_{gs}$ = 21 V 에서 **5 ppm 기준 20년 수명** 달성. 데이터시트 정격 운용 전압 대비 충분한 마진.
- **$I_G(t)$ envelope 분석** — 게이트 전류는 일정하다가 trapped electron 으로 감소. 그 envelope 가 트랜지스터 파라미터 영향 직전의 trapped charge 를 반영. 이 charge 는 $Q_{BD}$ 보다 약 **1 decade 낮으며 Si/SiO₂ 트랜지스터의 $Q_{BD}$ 와 동등 수준**.

## 7. Defect Management 운영 포인트

- **Lot-by-lot $Q_{BD}$ 샘플링** 을 대면적 NMOS Cap 과 MOSFET die 에서 병행 → [C-8 SPC](c08-spc.md) 관리.
- **Weibull Weak Tail** 감시 → [B-6 ADC](b06-adc.md) 재학습 시 공정 컨디션 KPI 와 연결.
- **Conduction Mechanism 식별** — TDDB 테스트 보고서에서 온도 · 전계 조건 명시하도록 포맷 표준화.
- **수명 외삽** — Arrhenius + E-model 계수를 내부 DB 화, 제품군별 Trend 관리.

## 8. 참고자료

- onsemi TND6396/D Rev.2 Ch.4–8 → [요약](../05-references/tnd6396.md)
- E. Cartier, "Reliability of Gate Dielectrics", IEDM
- T. Grasser et al., "The Comphy Reliability Tool" (TU Wien)

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.12 SiC/SiO₂ 계면 & Gate Oxide 신뢰성` 본문 1차 이관 + Front-End Screening mermaid 추가.

---
title: D-14 Body Diode Degradation & BPD Management
---

# D-14 Body Diode Degradation & BPD Management

> **핵심 키워드**: Bipolar Degradation · BPD → Stacking Fault · Pulsed Body Diode Test · ECSCRM 2021 · Triple Defense · J_max · SOA
> **참조 자료**: [TND6396](../05-references/tnd6396.md) Ch.10 + ECSCRM 2021 Publication
> **목적**: SiC MOSFET 고유 Bipolar 열화 메커니즘 — **BPD → Stacking Fault 확장** — 의 관리 체계 정립.

## 1. 메커니즘 (Figure 14–16)

- SiC substrate 내부의 **BPD (Basal Plane Dislocation)** 가 Body Diode 도통 시 minority carrier recombination 에너지에 의해 **Stacking Fault 로 확장**.
- Stacking Fault 는 channel 을 차단 → **$R_{DS(on)}$ ↑ 및 $V_F$ ↑ (drift)**.
- 특징 — **Bipolar 도통 (Body Diode 상태) 에서만 진행**. Unipolar MOSFET 동작은 영향 없음.

→ 결정 결함 기초: [Ch.1 SiC 재료·결정 기초](../01-foundations/ch01-material.md) · [Ch.2 웨이퍼 & 에피](../01-foundations/ch02-wafer-epi.md).

## 2. 시험 방법

### 2.1 Pulsed Body Diode Test

| 조건 | 값 |
|---|---|
| $V_{GS}$ | −5 V (channel off) |
| $I_D$ pulse | **250 / 300 / 350 A** |
| 측정 | Stress 전후 Transient $V_F$ 와 $R_{DS(on)}$ drift |
| 적용 | $I_D$ pulse 를 EV inverter freewheeling 조건에 매칭하여 Mission Profile 평가 |

### 2.2 ECSCRM 2021 Publication (Figure 16)

- onsemi 가 1700 V 25 mΩ SiC MOSFET die 별 **BPD 개별 매핑** (PL + X-ray Topography 결합).
- Body Diode Stress 후 $R_{DS(on)}$ drift 와 **BPD 개수 상관관계** 수립.

!!! tip "핵심 결과"
    $R_{DS(on)}$ / $V_F$ drift 는 **BPD 개수에 비례하여 증가**. **BPD 가 0 개인 die** 에서는 $J > 1600 \text{ A/cm}^2$ 같은 극단 전류 밀도에서만 유의한 열화 관찰.

## 3. onsemi 3중 보호 전략 (Triple Defense)

| # | 보호 계층 | 구현 방법 | 소관 / Owner |
|---|---|---|---|
| 1 | **원재료 BPD 밀도 Control** | Substrate Vendor Qual + Epi 조건 최적화 (BPD → TED 전환) | Substrate / Epi Engineering |
| 2 | **양산 전수 BPD 스크리닝** | PL Imaging · X-ray Topography · Wafer-level Inline Mapping | **Defect Management Engineering** |
| 3 | **Datasheet Design Rule** | SOA 내 최대 전류 밀도 명시 — $J_{max}$ · $V_{GS}$ · $T_J$ 제한 | Reliability / Application Engineering |

추가 — **고도핑 Epitaxial Buffer Layer** 가 BPD 로부터의 Stacking Fault 발달을 억제 (TND6396 본문 명시).

## 4. 1200 V 급에서의 의미

- 3중 보호 조합으로 **1200 V SiC MOSFET 의 Body Diode Degradation 영향을 실용적으로 0** 으로 관리.
- 해당 결과는 **EV traction inverter 의 freewheeling 소자** 용도에서 결정적.

## 5. Defect Management 운영 체계

| 단계 | 활동 |
|---|---|
| **Substrate Scan / Post-Epi Scan** | BPD count · 좌표를 [Klarity](b07-klarity.md) / Defect DB 등록 |
| **ADC 클래스** | BPD 전용 클래스 설정 → 시나리오 기반 [B-6 ADC](b06-adc.md) 재학습 |
| **Wafer Map Pattern** | BPD 밀집 영역 → die 단위 inking, Body-Diode application 에서 제외 |
| **SPC** | BPD count 대비 $R_{DS(on)}$ drift Cpk Trend 관리 ([C-8 참조](c08-spc.md)) |
| **VOG Cross-check** | Lot 단위 BPD 밀도 vs 출하 Datasheet Rating ([C-9 참조](c09-vog.md)) |

## 6. 운영 포인트

- BPD Spatial Distribution 은 **Substrate / Epi Origin 과 Die-level Electrical Drift 를 연결하는 핵심 데이터**.
- 3중 보호 구조는 각 보호 계층의 **검출 한계와 Escape Risk** 를 명확히 정의해야 안정적으로 작동.

## 7. 참고자료

- onsemi TND6396/D Rev.2 Ch.10 → [요약](../05-references/tnd6396.md)
- ECSCRM 2021 — Kochoska et al., *Pulsed Forward Bias Body Diode Stress of 1700 V SiC MOSFETs with Individual Mapping of Basal Plane Dislocations*
- A. Skuratov et al., "BPD / SF Mechanism in 4H-SiC", *J. Cryst. Growth*

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.14 Body Diode Degradation & BPD Management` 본문 1차 이관.
- TND6396 Figure 14~16 직접 임베드는 PDF 의 `docs/assets/pdf/` 이관 후 보강.

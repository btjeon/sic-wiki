---
title: D-13 BTI & Dynamic Stressing
---

# D-13 BTI & Dynamic Stressing

> **핵심 키워드**: PBTI / NBTI · Static vs Dynamic BTI · UF-BTI · Capture & Emission Time (CET) Map · Comphy Model · Cryogenic BTI · Dynamic Gate Stress
> **참조 자료**: [TND6396](../05-references/tnd6396.md) Ch.9 (BTI) + Ch.11 (Dynamic Stressing)
> **목적**: 백서가 가장 강조한 신뢰성 항목 — SiC MOSFET 의 **$V_{th}$ 안정성** 과 **동적 조건 열화** 평가.

## 1. BTI 란 (Bias Temperature Instability)

- 고온·고전압 게이트 응력이 장시간 인가될 때 **계면 trap 의 charge 포획** 으로 **$V_{th}$ shift** 발생.
- 결국 **On-resistance 증가** 로 이어짐.
- **PBTI** ($V_g$ = +10 V) / **NBTI** ($V_g$ = −10 V) 두 모드.
- SiC MOSFET 은 와이드 밴드갭 때문에 trap 밀도가 높아 BTI 가 심각 → **Si 방법론 그대로 쓰면 위험**.

## 2. Static BTI vs Dynamic BTI

| 구분 | **Static BTI** | **Dynamic BTI** |
|---|---|---|
| 측정 | 응력 후 파라미터 drift | Capture / Emission Time 추적 |
| 한계 | Recovery 놓침 | **UF-BTI** 장비 필요 |

## 3. Ultra-Fast BTI (UF-BTI) (Figure 10–12)

- onsemi 는 **UF-BTI 자원** 을 투입해 PBTI / NBTI 후 $V_{th}$ shift 와 **회복 (Recovery)** 을 측정 · 모델링.
- 측정 지연이 커지면 fast recovery 를 놓쳐 **$V_{th}$ drift 과소 평가**.

!!! warning "측정 정밀도"
    제대로 된 BTI 평가는 **ms ~ µs 단위 계측** 필수. 일반 $I_d$–$V_g$ 캐릭터라이제이션은 fast 성분 포착 불가. **100 kHz (5~10 µs) switching 응용** 에서는 fast BTI 성분이 지배적 → 응용 단계에서 잠재 문제.

### 3.1 PBTI vs NBTI 거동 (Figure 11–12)

| 모드 | 거동 | 성분 |
|---|---|---|
| **PBTI** ($V_g$ = +10 V) | "Apparent" $V_{th}$ 가 고전압측 shift (전자 capture) | **영구 + 회복 가능** 모두 |
| **NBTI** ($V_g$ = −10 V) | "Apparent" $V_{th}$ 가 저전압측 shift (전자 emission · hole capture) | **회복 가능** 만 |

## 4. Capture & Emission Time (CET) Map

- $V_{th}$ shift 를 **Trapped Charge 의 에너지 · 공간 분포** 로 분해.
- CET Map = (Capture Time, Emission Time) 의 결합 분포 — **Fast / Slow Trap 구분**.
- 도구 — **Comphy Model (TU Wien)** 과 접목.

### 4.1 AC / DC Modeling

- 응용용 **Fast BTI 성분** 과 장기 신뢰성용 **Slow BTI 성분** 분리.
- AC 조건에서는 Capture ↔ Emission 동적 평형 상태 → Effective 수명 계산.

### 4.2 Comphy Model 의 역할

- NBTI / PBTI $V_{th}$ shift fitting → **Trap Distribution** (Donor / Acceptor, 에너지 $E_t$, 공간 깊이) 추출.
- 물리 모델 기반으로 **상용 Mission Profile 수명 외삽**.

## 5. Cryogenic UF-BTI (ISPSD 2022)

- 저온 영역까지 UF-BTI 측정 범위 확장 — Trap 분포의 온도 의존성 분석.
- 참고: ISPSD 2022 발표 — Geenen et al. (onsemi Belgium + Università di Padova + TU Wien).

## 6. Dynamic Gate Stress (Figure 17, Ch.11)

와이드 밴드갭 재료의 동적 조건 열화 우려사항 평가.

| 항목 | 설명 |
|---|---|
| **벤치 조건** | $V_{DS}$ = 0 V, Gate driver −8 V ↔ +20 V, 50 % duty, overshoot-free transient |
| **비교 대상** | **1200 V 80 mΩ onsemi SiC MOSFET** vs 타사 3사 1200 V SiC MOSFET |
| **측정** | 일정 cycle 간격마다 $V_{th}$ 및 normalized $R_{DS(on)}$ shift 추적 |
| **주목** | 일부 경쟁 제품은 $V_{GS}$ = −8 V 가 데이터시트 정격 외 → onsemi 제품 우위 |

**대규모 자동 Dynamic Stress** — 3 lots × 80 unit 등 투입, 사내·장비사 협업 솔루션 개발 중.

## 7. Defect Management 운영 포인트

- BTI 는 **Wafer-level GOI 관리 → Lot-level $Q_{BD}$ → Stress-level UF-BTI** 3단계 파이프라인으로 관리.
- Dynamic Gate Stress 결과는 **Datasheet 정격** 설정의 1차 입력 데이터.
- **소비자 송부 이전** Outlier 는 이 단계에서 **좌표·로트 추적** 으로 제거.
- BTI Weak Tail 은 Static / Dynamic Stress 결과와 [D-12 GOI 지표](d12-gate-oxide.md) 를 함께 연결해 조기 감지.
- 다대 장비 Stress Data 는 장비 간 편차와 Sample Handling 편차를 별도 관리.

## 8. 참고자료

- onsemi TND6396/D Rev.2 Ch.9, Ch.11 → [요약](../05-references/tnd6396.md)
- T. Grasser, "Comphy v3.0", *Microelectron. Reliab.*
- JEDEC JEP184 (NBTI / PBTI Best Practice)
- Geenen et al., "Cryogenic Ultra-Fast Bias Temperature Instability Trap Profiling of SiC MOSFETs", ISPSD 2022

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.13 BTI & Dynamic Stressing` 본문 1차 이관.

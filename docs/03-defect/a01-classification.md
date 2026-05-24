---
title: A-1 결함 분류 체계
---

# A-1 결함 분류 체계

> **핵심 키워드**: Killer · Slow-Killer · Nuisance · Defect Density (D0) · Pareto · PFMEA · 8D
> **목적**: SiC 결함을 **영향 · 원인 · 관리 파라미터** 세 축에서 체계적으로 분류.

## 1. 영향 기준 분류

| 등급 | 정의 | 조치 |
|---|---|---|
| **Killer** | 100 % 디바이스 불량 유발 (즉시 Fail) | Bin-out, RCA 우선순위 P0 |
| **Slow-Killer** | 초기 Pass 하나 수명 / 신뢰성 저하 | Reliability Test (HTGB · HTRB · TC) 단계에서 검출. ADC 학습 추적 필수 |
| **Nuisance** | 디바이스 기능에 영향 없음 | Underkill · Overkill KPI 관리, ADC 필터링 |

## 2. 원인 계층 분류

| 계층 | 대표 결함 / 원인 |
|---|---|
| **Substrate / Epi origin** | BPD · TSD · TED · Carrot · Triangular — 웨이퍼·에피 공급자, 에피 장비 원인 |
| **Process origin** | 이온주입 프로파일, Trench sidewall 왜곡, Gate Oxide pin-hole, ILD void |
| **Particle / Contamination** | Photo · Etch · CMP 장비 기원 입자, 금속 오염 |
| **Mechanical** | Backside 그라인딩, Wafer Edge Chip / Crack |

→ Substrate / Epi origin 상세: [Ch.2 웨이퍼 & 에피](../01-foundations/ch02-wafer-epi.md). Process origin 단위 공정: [Ch.4 SiC 공정 흐름](../02-process/ch04-process-flow.md).

## 3. 관리 파라미터

| 파라미터 | 정의 |
|---|---|
| **Defect Density (D0)** | cm⁻² 단위. **수율 예측 공식 (Murphy / Poisson)** 의 핵심 입력 변수 |
| **Defect Pareto** | TOP-N 결함·레시피별 누적 분포 |
| **Killer Probability** | ADC 추론 신뢰도 · Bin Map Cross-check |

## 4. 운영 포인트

- Killer · Slow-Killer · Nuisance 분류 기준은 **AOI / ADC 레이블 정책** 과 **전기적 Bin Map** 의 상관성으로 지속 검증.
- 원인 계층 분류는 **PFMEA · 8D · Klarity Pareto** 와 연결하여 corrective action 우선순위로 활용.

→ ADC 학습·운영: [B-6 ADC](b06-adc.md) · Klarity: [B-7 Klarity](b07-klarity.md) · SPC: [C-8 SPC](c08-spc.md) · Killer RCA: [A-4 Killer RCA](a04-killer-rca.md).

## 5. 참고자료

- SEMI E10 / E14 Defect Standards
- Klarity Defect / Yield Engineering Manual

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.1 결함 분류 체계` 본문 1차 이관.

---
title: A-3 Trench 내부·Sub-CD 마이크로 결함
---

# A-3 Trench 내부·Sub-CD 마이크로 결함

> **핵심 키워드**: Sidewall Roughness · Bottom Corner Rounding · Sub-CD Micro Defect · CD-SEM · KLA 2935 · Si-Face vs C-Face Etch
> **목적**: Trench MOSFET 의 신뢰성을 좌우하는 **In-trench 결함** 과 **Sub-CD micro-defect** 관리.

## 1. In-trench 결함 종류

| 결함 | 메커니즘·영향 |
|---|---|
| **Sidewall Roughness** | Sidewall RMS 증가 → 채널 이동도 저하, Gate Oxide 신뢰성 저하 |
| **Bottom Corner Sharpening** | Trench 밑면 코너에 전계 집중 → BD 조기 발생. **Bottom Corner Rounding** 공정 필수 |
| **Sub-CD Micro Defect** | CD 보다 작은 함입 · 소공 · Poly 잔류 · Polymer 등 |
| **Trench Bowing / Tilting** | Anisotropic etch 비대칭 |
| **Si-Face vs C-Face Etch 차이** | 결정 방향성으로 인한 비대칭 식각 |

→ Trench MOSFET 구조: [Ch.3 SiC 디바이스 구조](../01-foundations/ch03-device.md). Trench Etch 단위 공정: [Ch.4 SiC 공정 흐름](../02-process/ch04-process-flow.md).

## 2. 검출 방법

| 방법 | 용도·한계 |
|---|---|
| **SEM Cross-section** | 구조 확인 — 샘플링 기반, 양산 상시 적용 불가 |
| **In-line CD-SEM** | 양산 시점 CD 관리 |
| **AOI Sub-CD 채널** | KLA 2935 클래스 대구경 Brightfield / Darkfield 결합 |
| **Klarity Defect Map 군집 분석** | 패턴 RCA |

→ AOI: [B-5](b05-aoi.md) · ADC: [B-6](b06-adc.md) · Klarity: [B-7](b07-klarity.md).

## 3. 결함 원인 구분 프레임워크

1. **시점 군집** → 장비 / 레시피 변경 시점과 교차 조회.
2. **웨이퍼 내 위치 패턴** → Edge ring · Bowl pattern · Center spot · Stripe 등 구분.
3. **Lot 계열 군집** → 웨이퍼 · 에피 · 케미컬 Lot 추적.
4. **AI 분류 결과 ↔ 전기 테스트 Bin Cross-check** → Killer 여부 판정.

## 4. 운영 포인트

- Sub-CD 결함은 **AOI 이미지 + CD-SEM + 전기적 Bin Map** 을 함께 보아야 Killer 여부를 판정 가능.
- In-trench micro-defect 는 **샘플링 기반 물리 분석 + 양산 inline 모니터링** 을 연결하는 관리 체계가 핵심.

## 5. 참고자료

- "In-Trench Defect Inspection of SiC Power MOSFET" — IEEE T-ED 관련 논문
- Lam Research / TEL SiC Etch Process Note

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.3 Trench 내부·Sub-CD 마이크로 결함` 본문 1차 이관.

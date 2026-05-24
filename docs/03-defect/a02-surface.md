---
title: A-2 SiC 표면 결함
---

# A-2 SiC 표면 결함

> **핵심 키워드**: Triangular · Carrot · Step Bunching · Particle · KLA Candela · Lasertec SICA · PL Imaging
> **목적**: AOI 검출의 1차 단계 — 표면 결함의 **형상·원인·대응** 이해.

## 1. 주요 표면 결함 형태

| 결함 | 형상 | 주 원인 | 영향 |
|---|---|---|---|
| **Carrot** | 당근 형태 길쭉한 결함 | BPD + TSD 조합 | Killer (Diode Leakage) |
| **Triangular** | 삼각형 영역 | 3C-SiC 도메인 삽입 | Killer / Slow-Killer |
| **Comet** | 혜성 꼬리 형태 | 표면 입자가 성장 중 매립 | Particle / Process 의존 |
| **Step Bunching** | 표면 step 응집 | 낮은 off-cut, 성장 조건 | Gate Oxide 신뢰성 |
| **Particle** | 이물 부착 | FFU · 툴 PM, 프로세스 장비 | 후속 공정 결함 trigger |
| **Pit / Pinhole** | 표면 함몰 | 에피 성장 불안정 | Killer 가능 |

## 2. 검출 장비

| 분류 | 장비·기법 | 용도 |
|---|---|---|
| **Surface Inspection** | KLA Candela CS920 / CS950, Lasertec SICA, Bruker AFM, Nomarski Microscope | 표면 형상·반사율 기반 자동 검출 |
| **PL (Photo-Luminescence) Imaging** | KLA·Lasertec PL 시스템 | **BPD → Stacking Fault 확장** 추적 |
| **AOI / Microscope** | KLA / Camtek pattern AOI | 패턴 후 레이어에서의 자동 광학 검사 |

→ AOI 운영 상세: [B-5 AOI 검사 장비 운영](b05-aoi.md).

## 3. 관리 포인트

- 웨이퍼 입고 검사·에피 후 검사의 **결함 수 추이 (Trend Chart)** 모니터링.
- 결함별 분류 결과 → **ADC 클래스 파라미터** 로 주기적 재학습.
- 동일 결함 군집 발생 시 **장비 / 레시피 시점 RCA** 트리거.

## 4. 결함 → RCA 연결

- 표면 결함 발견 시 첫 단계: [B-6 ADC](b06-adc.md) 의 분류 결과 + [B-7 Klarity](b07-klarity.md) 의 Pareto · Map 군집 확인.
- Killer 판정은 [A-4 Killer / Slow-Killer RCA](a04-killer-rca.md) 의 표준 5-step 프레임워크로.

## 5. 참고자료

- KLA Candela Application Note — *SiC Epi Wafer Inspection*
- Lasertec SICA Series Brochure
- T. Kimoto, *Fundamentals of Silicon Carbide Technology* — Ch. Epi defects

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.2 SiC 표면 결함` 본문 1차 이관 + Carrot · Pit / Pinhole 행 보강.

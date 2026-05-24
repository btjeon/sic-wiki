---
title: B-5 AOI 검사 장비 운영
---

# B-5 AOI 검사 장비 운영

> **핵심 키워드**: KLA 2935 · AMAT SEMVision · PM · EVT · Capture Rate · FAP · Recipe Drift · Daily Health Check
> **목적**: AOI 유지보수 · EVT · 레시피 최적화를 SiC 양산 흐름에 맞게 운영.

## 1. SiC Fab 주요 AOI 장비

| 레이어 | 장비 예시 | 용도 |
|---|---|---|
| **Wafer Incoming / Epi** | KLA Candela CS920 / CS950, Lasertec SICA | Substrate · Epi 표면 결함 ([A-2 참조](a02-surface.md)) |
| **After Photo / Etch** | KLA 2935 / 29xx 시리즈, AMAT SEMVision G7 | Pattern 결함, Sub-CD micro ([A-3 참조](a03-trench-subcd.md)) |
| **Final / VOG** | Macro AOI, Operator visual | 출하 전 외관 / Bondability ([C-9 참조](c09-vog.md)) |

## 2. 운영 사이클

| 단계 | 활동 |
|---|---|
| 1. **PM (Preventive Maintenance)** | 주 · 월 · 분기 PM 계획. Lamp / Detector / Stage 교체, Mechanical Calibration |
| 2. **EVT (Equipment Verification Test)** | PM 후 / Recipe 변경 후 / 이상 발생 시 수행 — Standard Wafer · 의도적 결함 소스 사용 |
| 3. **레시피 최적화** | 계층 · 패턴별 이미지 대비 · 결함 임계값 튜닝 — 테스트 Lot DOE |
| 4. **Daily Health Check** | Capture Rate, FAP, Run-time, Image Quality |

## 3. 레시피 최적화 KPI

| KPI | 정의 | 목표 |
|---|---|---|
| **Capture Rate** | Killer 검출률 | ↑ (Killer 놓치지 않기) |
| **FAP** (False Alarm Per area) | 단위 면적당 오경보 | ↓ (노이즈 최소화) |
| **UPH** (Units Per Hour) | 처리 속도 | TPT 저하 없이 Capture 유지 |
| **Recipe Drift** | PM 후 동일 샘플 대비 | 주기 모니터링 |

## 4. 운영 포인트

- **Recipe Set-up** — Capture Rate · False Alarm · UPH 의 trade-off 를 DOE 로 검증한 뒤 lock.
- **EVT** — PM 직후 / Recipe 변경 직후에 동일 기준으로 반복 가능해야 하며, **Standard Wafer 기준** 명확히 유지.
- **다대 장비 운영** — 장비별 Recipe Drift 와 Image Quality 편차를 별도 KPI 로 관리 (Tool-to-Tool Matching).

→ AOI 출력은 [B-6 ADC](b06-adc.md) 로 분류 → [B-7 Klarity](b07-klarity.md) DB 로 적재 → [C-8 SPC](c08-spc.md) 모니터링.

## 5. 참고자료

- KLA Application Note — *SiC Epi & Pattern Inspection*
- SEMI E10 (Equipment Reliability) / E58 (Auto Reliability) Standard

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.5 AOI 검사 장비 운영` 본문 1차 이관 + Wafer Incoming 레이어 추가.

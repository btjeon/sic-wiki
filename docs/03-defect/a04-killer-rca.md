---
title: A-4 Killer / Slow-Killer 결함 RCA
---

# A-4 Killer / Slow-Killer 결함 RCA

> **핵심 키워드**: 5-Why · Fishbone · FMEA · FTA · 8D · A3 · Pareto · Trend Chart · Cross-Tab
> **목적**: 만성 결함 (Chronic Defect) 을 종결시키는 **RCA 표준 프레임워크** 정립.

## 1. RCA 표준 5-Step

| Step | 활동 |
|---|---|
| 1. **Define** | 어떤 디바이스 · 레시피 · 장비에서 언제 얼마나 발생했는가 |
| 2. **Measure** | Wafer Map / Defect Map / FDC / Bin Map / VOG 데이터 수집 |
| 3. **Analyze** | 5-Why · Fishbone · FMEA · FTA |
| 4. **Improve** | 레시피 수정 / EVT / 장비 파트 교체 / Vendor Engagement |
| 5. **Control** | [C-8 SPC](c08-spc.md) · [B-6 ADC](b06-adc.md) 재학습 · SOP 갱신 |

## 2. SiC 결함 RCA 실전 사례

| 결함 | RCA 핵심 조치 | 연결 |
|---|---|---|
| **Bipolar Degradation** (Slow-Killer) | BPD 웨이퍼 입고 관리 → BPD 수렴 에피 조건 + ADC 클래스 추가 | [D-14 Body Diode & BPD](d14-body-diode.md) |
| **Trench Corner BV Failure** | Bottom rounding etch step + Pre-clean 공정 검증 | [A-3 Trench·Sub-CD](a03-trench-subcd.md) |
| **Gate Oxide TDDB** | NO / N₂O 어닐, 채널 계면 관리 | [D-12 Gate Oxide](d12-gate-oxide.md) |
| **Particle Burst** | FFU 교체 주기, 장비 내 PM 차트 | [B-5 AOI](b05-aoi.md) |

## 3. 아웃풋 표준 양식

| 양식 | 특징 |
|---|---|
| **8D 리포트** (D1→D8) | 조직 협업 디시플린, 자동차 OEM 표준 |
| **A3 보고서** | Toyota Way 기반, 1페이지 시각화 |
| **Pareto + Trend Chart + Cross-Tab** | 1페이지 요약 (경영진 보고용) |

## 4. 운영 포인트

- RCA 결과는 **8D / A3 형식으로 표준화**하고, 개선 효과는 **결함 밀도 · 수율 · 신뢰성 지표** 로 닫아야 함.
- 만성 결함은 단일 장비·단일 레시피 관점이 아니라 **소재·공정·검사·전기 테스트 데이터를 함께 연결** 해 판단.

## 5. 참고자료

- ASQ Six Sigma Black Belt Handbook
- "Reliability of SiC Power Devices" — IEEE Trans. Power Electron.
- AIAG 8D Manual / Toyota A3 Reporting Guide

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.4 Killer / Slow-Killer 결함 RCA` 본문 1차 이관.

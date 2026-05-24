---
title: C-9 VOG (Visual Outgoing Inspection)
---

# C-9 VOG (Visual Outgoing Inspection)

> **핵심 키워드**: AQL · ZDPM · Sample Plan · ANSI/ASQ Z1.4 · MES Hold/Release · AI Vision Automation
> **목적**: 출하 전 최종 관문 — 고객 반품 제로화와 외관 품질 안정화.

## 1. VOG 정의

- **Visual Outgoing Inspection** — 패키지 이전 / 이후 외관 최종 검사.
- 의의 — 디바이스 자체의 **전기적 Bin Pass 와 별개로**, 외형 · 마킹 · 면적 결함 제거.

## 2. SiC VOG 주요 항목

| 결함 | 원인 | 관리 |
|---|---|---|
| **Front-side Scratch** | Handling, Cassette | 운반구 관리 |
| **Backside Crack / Chip** | Backside 그라인딩, Wafer warp | Backside AOI · Edge 처리 |
| **Pkg Marking Error** | 레이저 마킹 | OCR 검증 |
| **Pkg 외관 결함** | Mold / Wire bond / Sinter | Macro AOI |

## 3. 운영 체계

| 항목 | 표준 |
|---|---|
| **AQL** (Acceptance Quality Limit) | AEC Automotive — **ZDPM (Zero Defect ppm)** 목표 |
| **Sample Plan** | ANSI / ASQ Z1.4. Lot size × Inspection Level |
| **MES 연동** | 결함 구간 발생 → 시점 추적 + Hold / Release |

## 4. ADC ↔ VOG 연결

- VOG 도 AI 비전으로 자동화 가능 ([B-6 ADC](b06-adc.md) · [Machine Vision 적용](../04-control-ai/ai-machine-vision.md) 참조).
- 단, **고객 Audit · Compliance 요구사항** 으로 수동 검증 포인트 유지.

## 5. 운영 포인트

- VOG 는 전기적 Bin Pass 이후에도 **고객 관점의 외관·마킹·취급 결함을 차단하는 마지막 gate**.
- AI 비전 자동화 시에도 **Audit · Compliance 관점의 수동 검증 포인트와 Traceability** 유지.

## 6. 참고자료

- AEC Q101 / Q102 (Automotive Reliability)
- ANSI / ASQ Z1.4 (Sampling)

---

## 추가 노트 (2026-05-24)

- Notion `D-Ch.9 VOG (Visual Outgoing Inspection)` 본문 1차 이관 + Backside / Pkg 외관 결함 행 보강.

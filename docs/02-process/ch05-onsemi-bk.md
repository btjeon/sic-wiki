---
title: Ch.5 onsemi SiC 사업·제품·BK Factory
---

# Ch.5 onsemi SiC 사업·제품·BK Factory

> **핵심 키워드**: EliteSiC · D1/D2/D3 · M1/M2/M3/M3S/M3T · Cascode JFET · Vertical Supply Chain · BK Factory
> **참조 자료**: BRD8094 (수직통합) · TND6396 (신뢰성)
> **목적**: onsemi 의 SiC 사업 포트폴리오, 주요 제품군 네비게이션, BK Factory 의 위치·담당 제품군을 공개 자료 기반으로 정리.

!!! info "출처"
    [onsemi.com — Silicon Carbide (SiC)](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic) + IR / Brochure 공개 자료. 모든 정보는 공개 마케팅·기술 자료 인용.

## 1. 회사 개요

- 본사 — 미국 Arizona Phoenix. NASDAQ: **ON**.
- 주력 제품 — Power Discrete (SiC · IGBT · Si MOSFET) · Image Sensor · Analog / Mixed-Signal.
- 전략 — *Intelligent Power & Sensing* — EV · ADAS · Industrial Power 가 성장축.

## 2. onsemi SiC 제품 네비게이션

```
Home › Products › Discrete, Power & Modules › Silicon Carbide (SiC)
  ├─ SiC Diodes              (D1 / D2 / D3 패밀리)
  ├─ SiC MOSFETs             (M1 / M2 / M3 / M3S / M3T)
  ├─ SiC MOSFETs Bare Die    (EV traction, OBC, DC-DC)
  ├─ SiC JFETs               (650–1700 V, R_DS(on) 4 mΩ↑)
  ├─ SiC Cascode JFETs       (JFET + Si-MOSFET, 표준 0–12 V 게이트)
  ├─ SiC Combo JFETs         (Normally-off, 25% size 절감)
  └─ Power Modules
      ├─ Full SiC (Direct, B2, Half/Full-bridge, Vienna)
      └─ Si/SiC Hybrid (IGBT + Si diode + SiC diode)
```

보조 섹션: **EliteSiC Family** · Resources (Eval Kits, Tech Docs) · SPICE / PLECS Models · Quality & Reliability · Vertical Supply Chain.

## 3. 제품 패밀리 (EliteSiC 브랜드)

### 3.1 SiC Diodes — D1 / D2 / D3

| 세대 | 특징 | 대표 용도 |
|---|---|---|
| **D1** | 1세대 SBD / JBS | 범용 PFC, Booster |
| **D2** | 수율·Surge 향상, 대전류 대응 | 서버 PSU, ESS |
| **D3** | 최신 세대, EV-grade qualified | OBC, Solar string inverter |

### 3.2 SiC MOSFETs — M1 / M2 / M3 / M3S / M3T

| 세대 | 구조 / 특징 | 대표 용도 |
|---|---|---|
| M1 | 1세대 Planar | 산업용 |
| M2 | Planar 고도화 | EV PFC급 |
| M3 | 3세대 Planar, R_DS(on) 개선 | EV traction inverter |
| **M3S** | **Trench MOSFET — onsemi 주력** | EV main inverter, OBC |
| **M3T** | 고온·고속 switching 최적화 | 800 V 아키텍처, DC-DC |

### 3.3 SiC MOSFETs Bare Die

- EV traction · OBC · DC-DC 용 다이 출하 — 자사 / 고객 모듈 조립용.

### 3.4 SiC JFETs (650–1,700 V)

- Normally-on 구조에서 R_DS(on) 4 mΩ 급 초저저항 구현.
- Cascode · Combo 구조로 게이트 드라이브 편의성 제공.

### 3.5 SiC Cascode JFETs

- JFET + Si-MOSFET 조합 → **표준 0–12 V 게이트 호환** (기존 Si IGBT 게이트 설계 재사용).
- 장점 — SiC 고속 switching + Si 게이트 신뢰성.

### 3.6 SiC Combo JFETs

- **Normally-off** 동작으로 안전성 확보.
- 패키지·소자 면적 25 % 이상 절감.

### 3.7 Power Modules

| 분류 | 폼팩터 | 대표 용도 |
|---|---|---|
| **Full SiC** | Direct, B2, Half / Full-bridge, Vienna | EV traction, ESS, Solar string |
| **Si / SiC Hybrid** | IGBT + Si diode + SiC diode | 고전압 PSU, 의료 RF |

## 4. 보조 자원 (Resources)

- **EliteSiC Family** 소개 하위 페이지.
- **Resources** — Eval Kits, Tech Documents, Application Notes (예 [TND6396](../05-references/tnd6396.md), [BRD8094](../05-references/brd8094.md)).
- **SPICE / PLECS Models** — 설계·시뮬레이션용.
- **Quality & Reliability** — AEC-Q101, JC-70.2, AQG324 준수 자료.
- **Vertical Supply Chain** — BRD8094 기반 9단계 공급망 → [Ch.6 수직계열 통합](ch06-vertical-integration.md).

## 5. 글로벌 제조 Footprint

| 사이트 | 역할 |
|---|---|
| Czech Republic — Roznov | SiC Substrate / Boule 소싱 확대 |
| USA — New Hampshire / Maine | 웨이퍼 · 에피 |
| **Korea — Bucheon (BK Factory)** | **SiC 디바이스 Front-end (국내 핵심)** |
| Vietnam / China (Tier-2) | 패키징 / Test |

## 6. BK Factory 포지셔닝

- 위치 — 경기 부천 원미구. 국내 소수의 전력반도체 양산 Fab.
- 계보 — SANYO Semiconductor 설립 계보를 이은 사이트 (onsemi 의 SANYO 인수 이후 주력 SiC 사이트로 재편).
- 양산 라인 관점의 핵심 관리 영역 — **Trench MOSFET (M3S / M3T) · SBD (D2 / D3) · Hybrid Module** 제품군의 결함·수율·신뢰성 관리.
- 단위 공정 흐름 → [Ch.4 SiC 공정 흐름](ch04-process-flow.md).

## 7. 경쟁 구도 (참고)

| 업체 | 포지션 |
|---|---|
| **Wolfspeed** | 웨이퍼 + 디바이스 수직 통합 1위 |
| **Infineon (CoolSiC)** | 8″ 전환 선도 |
| **STMicro** | 체코·이탈리아 SiC Mega-Fab 구축 |
| **Rohm** | Trench Gen4 구조 선도 |
| **국내** | SK실트론 · 예스파워테크닉스 · KEC 등 |

## 8. 다음 챕터 안내

- → [Ch.6 수직계열 통합 공급망 & EV 전략](ch06-vertical-integration.md) (BRD8094 해설)
- → [Part III §D 신뢰성](../03-defect/d11-reliability.md) (TND6396 기반)

## 9. 참고자료

- [onsemi.com — SiC](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic) · IR Deck (Quarterly)
- onsemi EliteSiC Brochure
- onsemi BRD8094/D — *Future-Proofing Your SiC Design* (Sep 2023)
- onsemi TND6396/D — *From Challenging Material to Robust Reliability* (Mar 2024 Rev.2)
- 2024 Investor Day — SiC Strategy

---

## 추가 노트 (2026-05-24)

- Notion `Chapter 5. onsemi SiC 사업·제품·BK Factory` 본문 1차 이관.
- 모든 정보는 공개 마케팅·IR 자료 인용. 내부 비공개 정보 없음.

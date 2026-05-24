---
title: Ch.1 SiC 재료·결정 기초
---

# Ch.1 SiC 재료·결정 기초

> **핵심 키워드**: 4H-SiC · Bandgap · Polytype · BPD/TSD/TED · 웨이퍼 사이즈 로드맵
> **목적**: SiC가 왜 Si를 대체하는지 — 재료 물성·Polytype·결정 결함의 근본을 이해한다.

## 1. 핵심 개념 — Polytype 와 4H 가 주류인 이유

- SiC 는 Si–C 의 적층 순서 차이로 **200개 이상의 polytype** 이 존재.
- **4H-SiC** — 전자 이동도 이방성이 가장 작아 MOSFET 제조에 가장 적합.
  → onsemi · Infineon · Wolfspeed 등 파워 디바이스 업계 주류.
- **6H-SiC** — 광소자 (LED) 용도.
- **3C-SiC** — Si 웨이퍼 위 이종 에피택셜 성장. 아직 연구 단계.

## 2. Si vs SiC 차이

| 항목 | Si | 4H-SiC | 의미 |
|------|----|--------|------|
| Bandgap (eV) | 1.12 | 3.26 | 고온 동작 · 누설 전류 억제 |
| Critical E-field (MV/cm) | 0.3 | 3.0 (≈10×) | 고전압 · 저손실 Drift Layer |
| Thermal Conductivity (W/cm·K) | 1.5 | 4.9 | 우수한 발열 특성 |
| Saturation Velocity (10⁷ cm/s) | 1.0 | 2.0 | 고주파 운용 |
| Max Operating Temp (℃) | ~150 | >200 | EV · 산업용 Power 적합 |

→ EV 인버터·신재생 에너지·산업용 전원에서 Si IGBT 를 빠르게 대체.

## 3. 산업 적용 관점 — 웨이퍼 사이즈 로드맵

- **6 인치 (150 mm)** 가 현재 주류, **8 인치 (200 mm)** 전환이 진행 중.
- onsemi 는 체코 (Roznov) · 한국 부천 (BK Factory) 등 주요 사이트에서 SiC 8 인치 전환에 대규모 투자.
- 8 인치 전환의 성공 조건 — **결함 밀도 (/cm²) 관리** 와 수율 안정화.
  → Part III 결함 관리 (Klarity · ADC · VOG) 와 직접 연결.

## 4. 결함 / RCA 연결 — 주요 결정 결함

| 결함 유형 | 영향 | 연결 챕터 |
|---|---|---|
| **BPD** (Basal Plane Dislocation) | 양극성 동작 시 Stacking Fault 로 전환 → **Bipolar Degradation** 의 주범 | [D-14 Body Diode & BPD](../03-defect/d14-body-diode.md) |
| **TSD** (Threading Screw Dislocation) | Gate Oxide 신뢰성 저하 · Killer 결함 원인 | [D-12 Gate Oxide](../03-defect/d12-gate-oxide.md) |
| **TED** (Threading Edge Dislocation) | Leakage 증가 | [A-4 Killer RCA](../03-defect/a04-killer-rca.md) |
| **Carrot / Triangular / Comet** | 에피택셜 성장 단계 표면·형상 결함 | [B-5 AOI](../03-defect/b05-aoi.md) · [B-6 ADC](../03-defect/b06-adc.md) |
| **Micropipe** | 관통형 hollow defect — 현대 고품질 웨이퍼에서는 거의 제거됨 | [A-2 표면 결함](../03-defect/a02-surface.md) |

상세 표면·서브-CD 결함 메커니즘은 [Ch.2 웨이퍼 & 에피](ch02-wafer-epi.md) 와 [Part III. A 결함의 이해](../03-defect/index.md) 참고.

## 5. 참고자료

- [onsemi — Silicon Carbide (SiC)](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic)
- *SiC Power Devices and ICs*, B. J. Baliga (Wiley) — Polytype / 결함 종합.
- "Threading Dislocations in 4H-SiC and Their Impact on Device Reliability" — IEEE T-ED 등 학회 자료 참고.

---

## 추가 노트 (2026-05-24)

- Notion 원본 (`SiC Study Hub > Chapter 1`) 1차 이관 완료.
- 8 인치 전환 관련 onsemi 외 사이트 (Wolfspeed Mohawk Valley 등) 비교는 [Ch.6 수직계열 통합](../02-process/ch06-vertical-integration.md) 으로.

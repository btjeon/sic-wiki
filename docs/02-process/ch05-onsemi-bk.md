---
title: Ch.5 onsemi SiC Business · Products · BK Factory
---

# Ch.5 onsemi SiC Business · Products · BK Factory

> **Keywords**: EliteSiC · D1/D2/D3 · M1/M2/M3/M3S/M3T · Cascode JFET · Vertical Supply Chain · BK Factory
> **References**: BRD8094 (vertical integration) · TND6396 (reliability)
> **Purpose**: Organize onsemi's SiC business portfolio, main product navigation, and BK Factory's role from public sources.

!!! info "Sources"
    [onsemi.com — Silicon Carbide (SiC)](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic) + IR / brochure public material. All information is cited from public marketing and technical material.

## 1. Company Overview

- HQ — Phoenix, Arizona, USA. NASDAQ: **ON**.
- Main products — Power Discrete (SiC · IGBT · Si MOSFET) · Image Sensor · Analog / Mixed-Signal.
- Strategy — *Intelligent Power & Sensing* — EV · ADAS · Industrial Power as growth axes.

## 2. onsemi SiC Product Navigation

```
Home › Products › Discrete, Power & Modules › Silicon Carbide (SiC)
  ├─ SiC Diodes              (D1 / D2 / D3 families)
  ├─ SiC MOSFETs             (M1 / M2 / M3 / M3S / M3T)
  ├─ SiC MOSFETs Bare Die    (EV traction, OBC, DC-DC)
  ├─ SiC JFETs               (650–1700 V, R_DS(on) ≥ 4 mΩ)
  ├─ SiC Cascode JFETs       (JFET + Si-MOSFET, standard 0–12 V gate)
  ├─ SiC Combo JFETs         (Normally-off, 25% size reduction)
  └─ Power Modules
      ├─ Full SiC (Direct, B2, Half/Full-bridge, Vienna)
      └─ Si/SiC Hybrid (IGBT + Si diode + SiC diode)
```

Auxiliary sections: **EliteSiC Family** · Resources (Eval Kits, Tech Docs) · SPICE / PLECS Models · Quality & Reliability · Vertical Supply Chain.

## 3. Product Families (EliteSiC brand)

### 3.1 SiC Diodes — D1 / D2 / D3

| Generation | Features | Typical Use |
|---|---|---|
| **D1** | 1st-gen SBD / JBS | General-purpose PFC, booster |
| **D2** | Higher yield and surge, large-current capable | Server PSU, ESS |
| **D3** | Latest generation, EV-grade qualified | OBC, solar string inverter |

### 3.2 SiC MOSFETs — M1 / M2 / M3 / M3S / M3T

| Generation | Structure / Features | Typical Use |
|---|---|---|
| M1 | 1st-gen Planar | Industrial |
| M2 | Improved Planar | EV PFC class |
| M3 | 3rd-gen Planar, improved R_DS(on) | EV traction inverter |
| **M3S** | **Trench MOSFET — onsemi's mainline** | EV main inverter, OBC |
| **M3T** | Optimized for high-temperature, high-speed switching | 800 V architecture, DC-DC |

### 3.3 SiC MOSFETs Bare Die

- Die shipment for EV traction · OBC · DC-DC — for in-house or customer module assembly.

### 3.4 SiC JFETs (650–1,700 V)

- Achieves R_DS(on) at the 4 mΩ class in normally-on construction.
- Cascode · Combo variants provide gate-drive convenience.

### 3.5 SiC Cascode JFETs

- JFET + Si-MOSFET combination → **compatible with standard 0–12 V gate drive** (reuses existing Si IGBT gate-driver designs).
- Benefits — SiC fast switching + Si gate reliability.

### 3.6 SiC Combo JFETs

- **Normally-off** operation for safety.
- Package / die area reduced by 25 % or more.

### 3.7 Power Modules

| Class | Form factor | Typical Use |
|---|---|---|
| **Full SiC** | Direct, B2, Half / Full-bridge, Vienna | EV traction, ESS, solar string |
| **Si / SiC Hybrid** | IGBT + Si diode + SiC diode | High-voltage PSU, medical RF |

## 4. Auxiliary Resources

- **EliteSiC Family** overview sub-pages.
- **Resources** — Eval Kits, Tech Documents, Application Notes (e.g. [TND6396](../05-references/tnd6396.md), [BRD8094](../05-references/brd8094.md)).
- **SPICE / PLECS Models** — design and simulation.
- **Quality & Reliability** — AEC-Q101, JC-70.2, AQG324 conformance materials.
- **Vertical Supply Chain** — 9-step supply chain based on BRD8094 → [Ch.6 Vertical Supply Chain](ch06-vertical-integration.md).

## 5. Global Manufacturing Footprint

| Site | Role |
|---|---|
| Czech Republic — Roznov | SiC substrate / boule sourcing expansion |
| USA — New Hampshire / Maine | Wafer · epi |
| **Korea — Bucheon (BK Factory)** | **SiC device front-end (domestic core)** |
| Vietnam / China (Tier-2) | Packaging / test |

## 6. BK Factory Positioning

- Location — Wonmi-gu, Bucheon, Gyeonggi, Korea. One of the few domestic power-semiconductor mass-production fabs.
- Lineage — site descended from SANYO Semiconductor (after onsemi's acquisition of SANYO, repositioned as a core SiC site).
- Core management areas from the mass-production-line perspective — defect / yield / reliability management for **Trench MOSFET (M3S / M3T) · SBD (D2 / D3) · Hybrid Module** product families.
- Unit-process flow → [Ch.4 SiC Process Flow](ch04-process-flow.md).

## 7. Competitive Landscape (for reference)

| Company | Position |
|---|---|
| **Wolfspeed** | #1 in vertically integrated wafer + device |
| **Infineon (CoolSiC)** | Leading the 8″ transition |
| **STMicro** | Building SiC mega-fabs in Czech Republic and Italy |
| **Rohm** | Leading Trench Gen4 architecture |
| **Domestic Korea** | SK siltron · Yes PowerTechnix · KEC, etc. |

## 8. Next Chapter

- → [Ch.6 Vertical Supply Chain & EV Strategy](ch06-vertical-integration.md) (BRD8094 walkthrough)
- → [Part III §D Reliability](../03-defect/d11-reliability.md) (based on TND6396)

## 9. References

- [onsemi.com — SiC](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic) · IR Deck (quarterly)
- onsemi EliteSiC Brochure
- onsemi BRD8094/D — *Future-Proofing Your SiC Design* (Sep 2023)
- onsemi TND6396/D — *From Challenging Material to Robust Reliability* (Mar 2024 Rev.2)
- 2024 Investor Day — SiC Strategy

---

## Notes (2026-05-24)

- First migration of Notion `Chapter 5. onsemi SiC Business · Products · BK Factory`.
- All material cited from public marketing / IR sources. No internal confidential information.

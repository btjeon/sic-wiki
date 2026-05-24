---
title: A-1 Defect Classification
---

# A-1 Defect Classification

> **Keywords**: Killer · Slow-Killer · Nuisance · Defect Density (D0) · Pareto · PFMEA · 8D
> **Purpose**: Classify SiC defects systematically along three axes — **impact · cause · control parameter**.

## 1. Classification by Impact

| Class | Definition | Action |
|---|---|---|
| **Killer** | Causes 100 % device failure (immediate Fail) | Bin-out, RCA priority P0 |
| **Slow-Killer** | Initial Pass, but degrades lifetime / reliability | Detected at Reliability Test (HTGB · HTRB · TC). Must be tracked in ADC re-learning |
| **Nuisance** | No effect on device function | Manage via Underkill / Overkill KPI, filter in ADC |

## 2. Classification by Origin

| Layer | Representative defects / sources |
|---|---|
| **Substrate / Epi origin** | BPD · TSD · TED · Carrot · Triangular — caused by wafer / epi supplier, epi equipment |
| **Process origin** | Ion-implant profile, trench sidewall roughness, Gate Oxide pin-hole, ILD void |
| **Particle / Contamination** | Particles from Photo · Etch · CMP equipment, metallic contamination |
| **Mechanical** | Backside grinding, wafer edge chip / crack |

→ Substrate / Epi origin details: [Ch.2 Wafer & Epi](../01-foundations/ch02-wafer-epi.md). Process-origin unit processes: [Ch.4 SiC Process Flow](../02-process/ch04-process-flow.md).

## 3. Control Parameters

| Parameter | Definition |
|---|---|
| **Defect Density (D0)** | cm⁻² unit. Key input to **yield prediction formulas (Murphy / Poisson)** |
| **Defect Pareto** | TOP-N cumulative distribution by defect and recipe |
| **Killer Probability** | ADC inference confidence · Bin Map cross-check |

## 4. Operational Notes

- Killer · Slow-Killer · Nuisance criteria are continuously validated against the correlation between **AOI / ADC labeling policy** and **electrical Bin Map**.
- Origin classification feeds corrective-action prioritization through **PFMEA · 8D · Klarity Pareto**.

→ ADC learning & operation: [B-6 ADC](b06-adc.md) · Klarity: [B-7 Klarity](b07-klarity.md) · SPC: [C-8 SPC](c08-spc.md) · Killer RCA: [A-4 Killer RCA](a04-killer-rca.md).

## 5. References

- SEMI E10 / E14 Defect Standards
- Klarity Defect / Yield Engineering Manual

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.1 Defect Classification`.

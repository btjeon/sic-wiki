---
title: A-3 Trench & Sub-CD Micro Defects
---

# A-3 Trench & Sub-CD Micro Defects

> **Keywords**: Sidewall Roughness · Bottom Corner Rounding · Sub-CD Micro Defect · CD-SEM · KLA 2935 · Si-face vs C-face Etch
> **Purpose**: Manage **in-trench defects** and **sub-CD micro-defects** — the two that drive Trench MOSFET reliability.

## 1. In-trench Defect Types

| Defect | Mechanism / impact |
|---|---|
| **Sidewall Roughness** | Higher sidewall RMS → reduced channel mobility, degraded Gate Oxide reliability |
| **Bottom Corner Sharpening** | Field crowding at trench-bottom corner → early breakdown. **Bottom Corner Rounding** required |
| **Sub-CD Micro Defect** | Pits, voids, poly residue, polymer — smaller than CD |
| **Trench Bowing / Tilting** | Anisotropic etch asymmetry |
| **Si-face vs C-face Etch difference** | Crystallographic anisotropy in etch rate |

→ Trench MOSFET structure: [Ch.3 SiC Device Structures](../01-foundations/ch03-device.md). Trench Etch unit process: [Ch.4 SiC Process Flow](../02-process/ch04-process-flow.md).

## 2. Detection Methods

| Method | Use / Limitation |
|---|---|
| **SEM cross-section** | Structural verification — sampling basis, not feasible in-line in mass production |
| **In-line CD-SEM** | CD control at production cadence |
| **AOI Sub-CD channel** | KLA 2935-class large-aperture brightfield / darkfield combination |
| **Klarity defect-map cluster analysis** | Pattern RCA |

→ AOI: [B-5](b05-aoi.md) · ADC: [B-6](b06-adc.md) · Klarity: [B-7](b07-klarity.md).

## 3. Origin-Identification Framework

1. **Time-of-occurrence cluster** → cross-check against equipment / recipe changes.
2. **Within-wafer spatial pattern** → distinguish Edge ring · Bowl pattern · Center spot · Stripe, etc.
3. **Lot-family cluster** → trace wafer · epi · chemical lots.
4. **AI classification ↔ electrical Bin cross-check** → final killer determination.

## 4. Operational Notes

- For sub-CD defects, killer determination requires **AOI image + CD-SEM + electrical Bin Map** together.
- For in-trench micro-defects, link **sampling-based physical analysis** with **in-line production monitoring** to make a complete management system.

## 5. References

- IEEE T-ED papers — "In-Trench Defect Inspection of SiC Power MOSFET" line of work
- Lam Research / TEL SiC Etch Process Notes

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.3 Trench & Sub-CD Micro Defects`.

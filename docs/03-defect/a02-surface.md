---
title: A-2 SiC Surface Defects
---

# A-2 SiC Surface Defects

> **Keywords**: Triangular · Carrot · Step Bunching · Particle · KLA Candela · Lasertec SICA · PL Imaging
> **Purpose**: The first stage of AOI detection — understand the **shape · cause · response** for surface defects.

## 1. Main Surface-Defect Modes

| Defect | Shape | Main cause | Impact |
|---|---|---|---|
| **Carrot** | Elongated, carrot-shaped | BPD + TSD combination | Killer (diode leakage) |
| **Triangular** | Triangular area | 3C-SiC domain insertion | Killer / Slow-Killer |
| **Comet** | Comet-tail | Particle embedded during growth | Particle / process dependent |
| **Step Bunching** | Surface step aggregation | Low off-cut, growth conditions | Gate Oxide reliability |
| **Particle** | Foreign material on surface | FFU · tool PM, process equipment | Triggers downstream defects |
| **Pit / Pinhole** | Surface depression | Epi-growth instability | Potential killer |

## 2. Inspection Equipment

| Category | Equipment / Technique | Use |
|---|---|---|
| **Surface Inspection** | KLA Candela CS920 / CS950, Lasertec SICA, Bruker AFM, Nomarski microscope | Automated detection based on surface shape / reflectance |
| **PL (Photo-Luminescence) Imaging** | KLA · Lasertec PL systems | Track **BPD → Stacking Fault expansion** |
| **AOI / Microscope** | KLA / Camtek pattern AOI | Automated optical inspection on post-pattern layers |

→ AOI operations: [B-5 AOI Equipment Operations](b05-aoi.md).

## 3. Operational Notes

- Monitor the **defect-count trend chart** at wafer-incoming and post-epi inspection.
- Use per-defect classification results to **periodically re-learn ADC class parameters**.
- When a defect cluster repeats, trigger **equipment / recipe-timing RCA**.

## 4. Defect → RCA Linkage

- When surface defects appear, start with the classification results in [B-6 ADC](b06-adc.md) plus the Pareto · map cluster in [B-7 Klarity](b07-klarity.md).
- Killer determination uses the standard 5-step framework in [A-4 Killer / Slow-Killer RCA](a04-killer-rca.md).

## 5. References

- KLA Candela Application Note — *SiC Epi Wafer Inspection*
- Lasertec SICA Series Brochure
- T. Kimoto, *Fundamentals of Silicon Carbide Technology* — Epi-defects chapter

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.2 SiC Surface Defects` + added Carrot · Pit / Pinhole rows.

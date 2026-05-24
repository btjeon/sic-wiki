---
title: A-4 Killer / Slow-Killer RCA
---

# A-4 Killer / Slow-Killer RCA

> **Keywords**: 5-Why · Fishbone · FMEA · FTA · 8D · A3 · Pareto · Trend Chart · Cross-Tab
> **Purpose**: A standard **RCA framework** to close chronic defects.

## 1. RCA Standard — 5 Steps

| Step | Activity |
|---|---|
| 1. **Define** | Which device · recipe · equipment, when, how much |
| 2. **Measure** | Collect Wafer Map / Defect Map / FDC / Bin Map / VOG |
| 3. **Analyze** | 5-Why · Fishbone · FMEA · FTA |
| 4. **Improve** | Recipe edit / EVT / equipment part replacement / vendor engagement |
| 5. **Control** | [C-8 SPC](c08-spc.md) · [B-6 ADC](b06-adc.md) re-learning · SOP update |

## 2. SiC Defect RCA — Real Cases

| Defect | Key RCA action | Linked chapter |
|---|---|---|
| **Bipolar Degradation** (Slow-Killer) | BPD wafer-incoming control → BPD-convergent epi conditions + add ADC class | [D-14 Body Diode & BPD](d14-body-diode.md) |
| **Trench Corner BV Failure** | Bottom-rounding etch step + pre-clean process verification | [A-3 Trench·Sub-CD](a03-trench-subcd.md) |
| **Gate Oxide TDDB** | NO / N₂O anneal, channel-interface management | [D-12 Gate Oxide](d12-gate-oxide.md) |
| **Particle Burst** | FFU replacement cycle, equipment-internal PM chart | [B-5 AOI](b05-aoi.md) |

## 3. Standard Output Formats

| Format | Characteristic |
|---|---|
| **8D Report** (D1 → D8) | Organizational-collaboration discipline, automotive OEM standard |
| **A3 Report** | Toyota-Way based, one-page visualization |
| **Pareto + Trend Chart + Cross-Tab** | One-page summary (for executive reporting) |

## 4. Operational Notes

- RCA results must be **standardized in 8D / A3 form** and closed using **defect density · yield · reliability indicators**.
- Chronic defects are judged not at the single equipment / single recipe level but by **linking material · process · inspection · electrical-test data together**.

## 5. References

- ASQ Six Sigma Black Belt Handbook
- "Reliability of SiC Power Devices" — IEEE Trans. Power Electron.
- AIAG 8D Manual / Toyota A3 Reporting Guide

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.4 Killer / Slow-Killer RCA`.

---
title: B-5 AOI Equipment Operations
---

# B-5 AOI Equipment Operations

> **Keywords**: KLA 2935 · AMAT SEMVision · PM · EVT · Capture Rate · FAP · Recipe Drift · Daily Health Check
> **Purpose**: Operate AOI maintenance · EVT · recipe optimization in line with SiC mass-production flow.

## 1. Main AOI Equipment in a SiC Fab

| Layer | Example equipment | Use |
|---|---|---|
| **Wafer Incoming / Epi** | KLA Candela CS920 / CS950, Lasertec SICA | Substrate · Epi surface defects ([see A-2](a02-surface.md)) |
| **After Photo / Etch** | KLA 2935 / 29xx series, AMAT SEMVision G7 | Pattern defects, Sub-CD micro ([see A-3](a03-trench-subcd.md)) |
| **Final / VOG** | Macro AOI, Operator visual | Pre-ship appearance / bondability ([see C-9](c09-vog.md)) |

## 2. Operating Cycle

| Stage | Activity |
|---|---|
| 1. **PM (Preventive Maintenance)** | Weekly · monthly · quarterly PM plan. Replace lamp / detector / stage, mechanical calibration |
| 2. **EVT (Equipment Verification Test)** | After PM / after recipe change / on incident — uses standard wafers · intentional defect sources |
| 3. **Recipe optimization** | Per-layer · per-pattern image contrast and defect-threshold tuning — test-lot DOE |
| 4. **Daily Health Check** | Capture Rate, FAP, Run-time, Image Quality |

## 3. Recipe-Optimization KPIs

| KPI | Definition | Target |
|---|---|---|
| **Capture Rate** | Killer-detection rate | ↑ (do not miss killers) |
| **FAP** (False Alarm Per area) | False alarms per unit area | ↓ (minimize noise) |
| **UPH** (Units Per Hour) | Throughput | maintain capture without TPT loss |
| **Recipe Drift** | Same-sample comparison after PM | monitor on a cycle |

## 4. Operational Notes

- **Recipe Set-up** — validate the Capture Rate · False Alarm · UPH trade-off via DOE, then lock.
- **EVT** — must be repeatable to the same criteria immediately after PM or after recipe changes; keep the **standard-wafer baseline** explicit.
- **Multi-tool operations** — manage per-tool Recipe Drift and Image Quality variance as separate KPIs (Tool-to-Tool Matching).

→ AOI output flows into [B-6 ADC](b06-adc.md) for classification → loaded into [B-7 Klarity](b07-klarity.md) DB → monitored by [C-8 SPC](c08-spc.md).

## 5. References

- KLA Application Note — *SiC Epi & Pattern Inspection*
- SEMI E10 (Equipment Reliability) / E58 (Auto Reliability) Standards

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.5 AOI Equipment Operations` + added Wafer Incoming layer.

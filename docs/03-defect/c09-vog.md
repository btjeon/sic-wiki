---
title: C-9 VOG (Visual Outgoing Inspection)
---

# C-9 VOG (Visual Outgoing Inspection)

> **Keywords**: AQL · ZDPM · Sample Plan · ANSI/ASQ Z1.4 · MES Hold/Release · AI Vision Automation
> **Purpose**: The final pre-ship gate — eliminate customer returns and stabilize appearance quality.

## 1. VOG Definition

- **Visual Outgoing Inspection** — final pre-/post-package appearance inspection.
- Significance — removes shape · marking · appearance defects **independent of the electrical Bin Pass** of the device itself.

## 2. Main SiC VOG Items

| Defect | Cause | Control |
|---|---|---|
| **Front-side Scratch** | Handling, cassette | Carrier management |
| **Backside Crack / Chip** | Backside grinding, wafer warp | Backside AOI · edge processing |
| **Package Marking Error** | Laser marking | OCR verification |
| **Package Appearance Defects** | Mold / wire bond / sinter | Macro AOI |

## 3. Operating Framework

| Item | Standard |
|---|---|
| **AQL** (Acceptance Quality Limit) | AEC Automotive — **ZDPM (Zero Defect ppm)** target |
| **Sample Plan** | ANSI / ASQ Z1.4. Lot size × Inspection Level |
| **MES integration** | Defect-zone occurrence → time-tracking + Hold / Release |

## 4. ADC ↔ VOG Linkage

- VOG can also be automated with AI vision (see [B-6 ADC](b06-adc.md) · [Machine Vision application](../04-control-ai/ai-machine-vision.md)).
- However, customer audit / compliance requirements keep **manual verification points**.

## 5. Operational Notes

- VOG is the **last gate that blocks customer-facing appearance · marking · handling defects** even after electrical Bin Pass.
- When automating with AI vision, retain **audit · compliance manual checkpoints and traceability**.

## 6. References

- AEC Q101 / Q102 (Automotive Reliability)
- ANSI / ASQ Z1.4 (Sampling)

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.9 VOG (Visual Outgoing Inspection)` + added Backside / Package-appearance rows.

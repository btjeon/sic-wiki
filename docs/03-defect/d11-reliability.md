---
title: D-11 Reliability Methodology & Two Qualification Routes
---

# D-11 Reliability Methodology & Two Qualification Routes

> **Keywords**: 5-axis methodology · Intrinsic vs Extrinsic Qualification · JEDEC · AEC · AQG324 · JC-70.2 · Mission Profile · In-situ Degradation Monitoring
> **Reference**: [TND6396](../05-references/tnd6396.md) Ch.1–3
> **Purpose**: Understand onsemi's **methodology framework** that secures the reliability of SiC production parts.

## 1. Five-Axis Quality & Reliability Methodology

onsemi adapts the **Si-based quality methodology** proven over decades in automotive to SiC. The five interacting axes secure reliability:

| # | Axis | Tools / activities |
|---|---|---|
| 1 | **Design Methodology** | PFMEA at design stage, margin / redundancy |
| 2 | **Production Monitoring** | Real-time process-parameter monitoring |
| 3 | **Manufacturing Control** | [SPC](c08-spc.md) + EQC + FDC |
| 4 | **Screening** | Multi-layer electrical screening at Wafer / Burn-in / Final |
| 5 | **Qualification Plans** | JEDEC + AEC + onsemi robustness extensions |

!!! tip "Core principle"
    Every reliability hazard is tracked back to its failure mode and mechanism, and fed back as a **Permanent Corrective Action** against the process weakness.

## 2. Two Qualification Routes

| Item | **Wafer Fab Route (Intrinsic)** | **Product & Assembly Route (Extrinsic)** |
|---|---|---|
| Purpose | Extract physics-based degradation models | Verify extrinsic defects and dependency loads |
| Output | SOA / lifetime equation / design rule | AEC-Q101 conformance, mission-fit proof |
| Representative items | [D-12 Gate Oxide](d12-gate-oxide.md) · [D-13 BTI](d13-bti.md) · [D-14 BPD](d14-body-diode.md) | HTRB · HTGB · TC · AEC-Q101 stress suite |

## 3. SiC-specific Challenges — Standards + Robustness + Open Dialogue

### 3.1 Strict adherence to international standards

- **JEDEC** — general semiconductor reliability
- **AEC** — Automotive Electronics Council (Q101, Q102, etc.)
- **AQG324** — automotive power-module qualification
- **JC-70.2 subcommittee** — Wide Bandgap standardization:
    - **TG702_1** Reliability & Qualification Methods
    - **TG702_2** Datasheet Elements & Parameters
    - **TG702_3** Test & Characterization

### 3.2 Robustness extensions beyond standards

- Longer test durations
- Higher or additional temperature points
- **In-situ Degradation Monitoring** — observe degradation during stress
- Post-stress physical analysis (FA forensics stage)

### 3.3 Open dialogue with customers

- Define Mission Profile jointly with customers and suppliers.
- Examples — EV driving probability · charging pattern · temperature profile.

### 3.4 Deep understanding of failure mechanisms

- Pin down the physical roots of BPD-SF · TDDB · BTI · Body Diode Degradation → decide the parameters required for extrapolation.

## 4. Defect-Management Perspective

- The **Wafer Fab Route** is the **core area of defect management** — SPC, ADC, AOI, Klarity are the tools that guard this route.
- The **Product Route** is reliability-engineering-centric, but infant-mortality and BPD / TDDB source tracking remain joint concerns with defect management.
- Linking the two qualification routes closes the loop: **process weakness → screening → reliability result → corrective action**.

## 5. Operational Notes

- Decompose every reliability hazard into **Failure Mode · Failure Mechanism · Process Origin** for management.
- Define explicitly where each Corrective Action lands — **SPC limit · Inspection Recipe · ADC Class · Screening Criterion**.

## 6. References

- onsemi TND6396/D Rev.2 (Mar 2024) Ch.1–3 → [summary](../05-references/tnd6396.md)
- JEDEC JESD22 / JESD47
- AEC-Q101 (Discrete Semiconductor)
- AQG324 (Automotive Power Module Qualification)
- JC-70.2 — Wide Bandgap (WBG) Power Devices Standardization Committee

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.11 Reliability Methodology & Two Qualification Routes`.
- Once the TND6396 PDF is moved under `docs/assets/pdf/`, Figures 1 and 2 will be embedded directly.

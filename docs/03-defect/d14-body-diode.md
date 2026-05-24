---
title: D-14 Body Diode Degradation & BPD Management
---

# D-14 Body Diode Degradation & BPD Management

> **Keywords**: Bipolar Degradation · BPD → Stacking Fault · Pulsed Body Diode Test · ECSCRM 2021 · Triple Defense · J_max · SOA
> **Reference**: [TND6396](../05-references/tnd6396.md) Ch.10 + ECSCRM 2021 publication
> **Purpose**: Establish a management system for the SiC MOSFET's unique bipolar degradation mechanism — **BPD → Stacking Fault expansion**.

## 1. Mechanism (Figures 14–16)

- BPDs (**Basal Plane Dislocations**) inside the SiC substrate **expand into Stacking Faults** under body-diode conduction, driven by minority-carrier recombination energy.
- The Stacking Fault blocks the channel → **$R_{DS(on)}$ ↑ and $V_F$ ↑ (drift)**.
- Characteristic — **progresses only under bipolar conduction (body-diode state)**. Unipolar MOSFET operation is unaffected.

→ Crystal-defect basics: [Ch.1 SiC Material Fundamentals](../01-foundations/ch01-material.md) · [Ch.2 Wafer & Epi](../01-foundations/ch02-wafer-epi.md).

## 2. Test Methods

### 2.1 Pulsed Body Diode Test

| Condition | Value |
|---|---|
| $V_{GS}$ | −5 V (channel off) |
| $I_D$ pulse | **250 / 300 / 350 A** |
| Measurement | Transient $V_F$ and $R_{DS(on)}$ drift before/after stress |
| Application | Match $I_D$ pulse to EV-inverter freewheeling conditions for mission-profile evaluation |

### 2.2 ECSCRM 2021 publication (Figure 16)

- onsemi performed **individual BPD mapping** of each 1700 V 25 mΩ SiC MOSFET die (combining PL + X-ray topography).
- Established the correlation between $R_{DS(on)}$ drift after body-diode stress and **BPD count**.

!!! tip "Key result"
    $R_{DS(on)}$ / $V_F$ drift **scales with BPD count**. For **BPD-free dies**, meaningful degradation appears only at extreme current densities such as $J > 1600 \text{ A/cm}^2$.

## 3. onsemi Triple Defense Strategy

| # | Defense layer | Implementation | Owner |
|---|---|---|---|
| 1 | **Raw-material BPD-density control** | Substrate vendor qualification + epi-condition optimization (BPD → TED conversion) | Substrate / Epi Engineering |
| 2 | **100 % BPD screening in production** | PL Imaging · X-ray topography · wafer-level in-line mapping | **Defect Management Engineering** |
| 3 | **Datasheet design rule** | Specify max current density within SOA — $J_{max}$ · $V_{GS}$ · $T_J$ limits | Reliability / Application Engineering |

Additional — a **highly doped Epitaxial Buffer Layer** suppresses Stacking Fault propagation from BPDs (explicit in TND6396).

## 4. Implication at the 1200 V Class

- Combined Triple Defense **practically reduces Body-Diode Degradation to zero for 1200 V SiC MOSFET**.
- This result is decisive for the **EV traction-inverter freewheeling-device** use case.

## 5. Defect-Management Operating System

| Stage | Activity |
|---|---|
| **Substrate Scan / Post-Epi Scan** | Register BPD count · coordinates in [Klarity](b07-klarity.md) / Defect DB |
| **ADC class** | Define a BPD-dedicated class → scenario-based [B-6 ADC](b06-adc.md) re-learning |
| **Wafer-map pattern** | Ink-out dies in BPD-dense areas; exclude from body-diode applications |
| **SPC** | Manage Cpk trend for BPD count vs $R_{DS(on)}$ drift ([see C-8](c08-spc.md)) |
| **VOG cross-check** | Lot-level BPD density vs shipped datasheet rating ([see C-9](c09-vog.md)) |

## 6. Operational Notes

- BPD spatial distribution is the **central data linking substrate / epi origin with die-level electrical drift**.
- The Triple-Defense structure works robustly only if each layer's **detection limits and escape risks are explicit**.

## 7. References

- onsemi TND6396/D Rev.2 Ch.10 → [summary](../05-references/tnd6396.md)
- ECSCRM 2021 — Kochoska et al., *Pulsed Forward Bias Body Diode Stress of 1700 V SiC MOSFETs with Individual Mapping of Basal Plane Dislocations*
- A. Skuratov et al., "BPD / SF Mechanism in 4H-SiC", *J. Cryst. Growth*

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.14 Body Diode Degradation & BPD Management`.
- Embedding of TND6396 Figures 14–16 will follow once the PDF is added under `docs/assets/pdf/`.

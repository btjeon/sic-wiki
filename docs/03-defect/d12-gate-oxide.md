---
title: D-12 SiC/SiO₂ Interface & Gate Oxide Reliability
---

# D-12 SiC/SiO₂ Interface & Gate Oxide Reliability

> **Keywords**: D_it · Comphy · Charge Pumping · DLTS · Q_BD · TDDB · TAT · FN · Arrhenius + E-model · 21 V · 20 yr · 5 ppm
> **Reference**: [TND6396](../05-references/tnd6396.md) Ch.4 (SiC/SiO₂ Interface), Ch.5 (Front-End Defect Screening), Ch.6 (electrical screening), Ch.7 (Q_BD), Ch.8 (TDDB)
> **Purpose**: Analyze, screen, and model lifetime for the **Gate Oxide / SiC-SiO₂ interface** — the weakest link of the SiC MOSFET.

## 1. Why the SiC/SiO₂ Interface Matters

- The SiC MOSFET weak spot is the **~1.3 nm interface**.
- The wide bandgap leaves a **higher interface trap density ($D_{it}$)** than Si → drives $V_{th}$ shift, channel-mobility degradation, BTI, and shortened TDDB lifetime.

## 2. onsemi University Research Network (Figure 4)

| Institution | Role |
|---|---|
| **University of Gent** (Belgium) | Trap distribution analysis |
| **TU Wien** (Austria) | Comphy Model, NBTI / PBTI fitting |
| **Universität Antwerpen** (Belgium) | EPR / EDMR |
| **Universität Bremen** (Germany) | Charge Pumping |

### 2.1 Integrated analysis techniques

| Technique | Purpose |
|---|---|
| **SIMS, XPS** | Composition / depth profile |
| **EPR / EDMR / ESR** | Electron-spin defects (Pb defects, carbon dimers) |
| **Charge Pumping** | Quantify interface trap density $D_{it}$ |
| **Low-Level Transient Spectroscopy / DLTS / TDRC** | Trap energy and capture cross-section |
| **Optical CV / Hall / Fast Transients** | Donor / Acceptor distinction |
| **TDDB** | Lifetime evaluation |
| **Reliability Conduction Modeling** | FN / TAT / trap-assisted |

## 3. SiC Front-End Defect Screening Flow (Figure 5)

```mermaid
flowchart LR
    A[Substrate Scan] --> B[Epitaxy]
    B --> C[Post-Epi Scan]
    C --> D[Wafer Process]
    D --> E[In-Process Defect Scan]
    E --> F[Wafer Acceptance Test]
    F --> G[Burn-In]
    G --> H[Thinning]
    H --> I[Electrical Wafer Test]
    I --> J[Outgoing Inspection]
```

- All defects are managed with **coordinate tracking and auto-classification**.
- Multiple inspections at critical steps identify latent process defects → flagged dies are excluded from the population.

!!! note "Core principle"
    Removing **killer defects** or **electrical outliers** is the foundation of AEC-Q101 compliance and infant-mortality avoidance.

## 4. Multi-Level Electrical Screening

| Level | Item |
|---|---|
| **Wafer Level** | Parametric test, **GOI (Gate Oxide Integrity)** evaluation |
| **Burn-in** | Accelerated stress removes potential infants |
| **Final / Outgoing** | Post-package final test removes outliers |

## 5. Gate Oxide Q_BD Monitoring (Figure 6)

- In production, gate-oxide quality is sampled **per lot**.
- Conditions — **5 mA/cm² forced + forward gate bias, room temperature**.
- Reference — compare the SiC MOSFET die ↔ **2.7 mm × 2.7 mm large-area NMOS capacitor** $Q_{BD}$ (charge-to-breakdown) distributions.
- Pass / fail at the wafer level by the acceptance criterion.

!!! tip "Result"
    On a **Weibull plot**, SiC MOSFET · SiC NMOS Cap · Si MOSFET comparison → SiC officially reaches **$Q_{BD}$ equivalent or superior to Si**. At the same nominal oxide thickness, **onsemi planar SiC intrinsic $Q_{BD}$ ≈ 50 × Si** (5 mA/cm², Forward Bias Gate, RT).

## 6. Gate Oxide TDDB Lifetime Model (Figures 7–9)

### 6.1 Conduction-mechanism identification (decisive)

| Regime | Dominant mechanism |
|---|---|
| **Low field · high temperature** | Thermally Assisted Tunneling (TAT) |
| **High field** | Fowler-Nordheim (FN) |

!!! warning "Caution"
    Misidentification leads to stress in a mode different from real use → directly causes **overestimating / underestimating lifetime** in operation.

### 6.2 Acceleration models

- **Arrhenius** (temperature) + **E-model** (gate voltage).
- The E-model can be conservative, so model refinement uses **lower-field longer-time** stress ($t_{63\%}$ on the scale of months to years).

### 6.3 Test conditions / results

- Example — **175 °C, < 9 MV/cm** (electron-trapping regime).
- **Result** — **20-year lifetime at $V_{gs}$ = 21 V to a 5-ppm criterion**. Plenty of margin above the datasheet rating.
- **$I_G(t)$ envelope analysis** — gate current is flat, then drops due to trapped electrons. The envelope reflects the trapped charge just before transistor parameters are affected. This charge is about **one decade below $Q_{BD}$ and comparable to the $Q_{BD}$ of Si/SiO₂ transistors**.

## 7. Defect-Management Operational Notes

- Run **lot-by-lot $Q_{BD}$ sampling** in parallel on large-area NMOS Cap and MOSFET die → manage in [C-8 SPC](c08-spc.md).
- Watch the **Weibull weak tail** → link to process-condition KPIs when re-learning [B-6 ADC](b06-adc.md).
- **Conduction-mechanism identification** — standardize a TDDB report format that records temperature and field explicitly.
- **Lifetime extrapolation** — keep Arrhenius + E-model coefficients in an internal DB and track per-product-family trends.

## 8. References

- onsemi TND6396/D Rev.2 Ch.4–8 → [summary](../05-references/tnd6396.md)
- E. Cartier, "Reliability of Gate Dielectrics", IEDM
- T. Grasser et al., "The Comphy Reliability Tool" (TU Wien)

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.12 SiC/SiO₂ Interface & Gate Oxide Reliability` + added a Front-End Screening mermaid.

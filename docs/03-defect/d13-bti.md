---
title: D-13 BTI & Dynamic Stressing
---

# D-13 BTI & Dynamic Stressing

> **Keywords**: PBTI / NBTI · Static vs Dynamic BTI · UF-BTI · Capture & Emission Time (CET) Map · Comphy Model · Cryogenic BTI · Dynamic Gate Stress
> **Reference**: [TND6396](../05-references/tnd6396.md) Ch.9 (BTI) + Ch.11 (Dynamic Stressing)
> **Purpose**: The reliability area the white paper emphasizes most — SiC MOSFET **$V_{th}$ stability** and **dynamic-condition degradation**.

## 1. What is BTI (Bias Temperature Instability)

- Under long-duration high-temperature, high-voltage gate stress, **interface traps capture charge** → **$V_{th}$ shift**.
- This eventually drives **On-resistance increase**.
- Two modes — **PBTI** ($V_g$ = +10 V) / **NBTI** ($V_g$ = −10 V).
- SiC MOSFET has higher trap density due to the wide bandgap, so BTI is severe → **applying Si methodology unchanged is dangerous**.

## 2. Static BTI vs Dynamic BTI

| Item | **Static BTI** | **Dynamic BTI** |
|---|---|---|
| Measurement | Post-stress parameter drift | Capture / Emission time tracking |
| Limitation | Misses recovery | Requires **UF-BTI** equipment |

## 3. Ultra-Fast BTI (UF-BTI) (Figures 10–12)

- onsemi invested **UF-BTI resources** to measure and model $V_{th}$ shift and **recovery** after PBTI / NBTI.
- Higher measurement delay misses fast recovery → **underestimates $V_{th}$ drift**.

!!! warning "Measurement precision"
    Correct BTI evaluation requires **ms ~ µs scale instrumentation**. Conventional $I_d$–$V_g$ characterization cannot catch fast components. In **100 kHz (5–10 µs) switching applications**, the fast BTI component dominates → latent issue at the application stage.

### 3.1 PBTI vs NBTI Behavior (Figures 11–12)

| Mode | Behavior | Components |
|---|---|---|
| **PBTI** ($V_g$ = +10 V) | "Apparent" $V_{th}$ shifts high-side (electron capture) | **permanent + recoverable** |
| **NBTI** ($V_g$ = −10 V) | "Apparent" $V_{th}$ shifts low-side (electron emission / hole capture) | **recoverable only** |

## 4. Capture & Emission Time (CET) Map

- Decomposes $V_{th}$ shift into the **energy / spatial distribution of trapped charge**.
- The CET map = joint distribution of (Capture Time, Emission Time) — distinguishes **fast / slow traps**.
- Tool — interfaced with the **Comphy Model (TU Wien)**.

### 4.1 AC / DC Modeling

- Separate the **fast BTI component** for applications and the **slow BTI component** for long-term reliability.
- Under AC the capture ↔ emission dynamic equilibrium → compute effective lifetime.

### 4.2 Role of the Comphy Model

- Fit NBTI / PBTI $V_{th}$ shift → extract **trap distribution** (donor / acceptor, energy $E_t$, spatial depth).
- Use the physical model to extrapolate **lifetime under operational mission profiles**.

## 5. Cryogenic UF-BTI (ISPSD 2022)

- Extend UF-BTI measurement coverage into the cryogenic regime — analyze trap-distribution temperature dependence.
- See: ISPSD 2022 — Geenen et al. (onsemi Belgium + Università di Padova + TU Wien).

## 6. Dynamic Gate Stress (Figure 17, Ch.11)

Evaluation of dynamic-condition degradation concerns in wide-bandgap materials.

| Item | Description |
|---|---|
| **Bench conditions** | $V_{DS}$ = 0 V, gate driver −8 V ↔ +20 V, 50 % duty, overshoot-free transient |
| **Comparison** | **1200 V 80 mΩ onsemi SiC MOSFET** vs 1200 V SiC MOSFETs from 3 other vendors |
| **Measurement** | Track $V_{th}$ and normalized $R_{DS(on)}$ shift at cycle intervals |
| **Notable** | For some competitors $V_{GS}$ = −8 V is outside the datasheet rating → onsemi product is more robust |

**Large-scale automated dynamic stress** — 3 lots × 80 units etc. is in development jointly with equipment vendors.

## 7. Defect-Management Operational Notes

- Manage BTI as a three-stage pipeline: **wafer-level GOI control → lot-level $Q_{BD}$ → stress-level UF-BTI**.
- Dynamic-Gate-Stress results are a primary input to **datasheet ratings**.
- **Before customer shipment**, outliers are removed at this stage with **coordinate · lot tracking**.
- Catch BTI weak tails early by jointly reviewing static / dynamic stress results with the [D-12 GOI indicators](d12-gate-oxide.md).
- For multi-tool stress data, separately manage tool-to-tool and sample-handling variance.

## 8. References

- onsemi TND6396/D Rev.2 Ch.9, Ch.11 → [summary](../05-references/tnd6396.md)
- T. Grasser, "Comphy v3.0", *Microelectron. Reliab.*
- JEDEC JEP184 (NBTI / PBTI Best Practice)
- Geenen et al., "Cryogenic Ultra-Fast Bias Temperature Instability Trap Profiling of SiC MOSFETs", ISPSD 2022

---

## Notes (2026-05-24)

- First migration of Notion `D-Ch.13 BTI & Dynamic Stressing`.

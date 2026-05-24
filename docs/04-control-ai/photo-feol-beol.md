---
title: FEOL / BEOL Photolithography
---

# FEOL / BEOL Photolithography

## 1. Layer-Stack Overview

Representative SiC Power MOSFET photo-layer composition (Planar):

| Layer | Type | Scanner | Resolution target | Notes |
|-------|------|---------|-------------------|-------|
| Align Mark | FEOL | i-line | 1.0 μm | Survives 1700 ℃ anneal |
| P-well | FEOL | i-line / KrF | 0.5~1.0 μm | Al implant mask |
| N+ Source | FEOL | KrF | 0.4 μm | P/N₂ implant |
| Gate Poly | FEOL | KrF | 0.35 μm | Trench is even narrower |
| Contact | FEOL | KrF | 0.4 μm | Selective etch |
| M1 | BEOL | KrF / i-line | 0.5 μm | Thick Al or Cu |
| Via | BEOL | i-line | 1.0 μm | |
| Pad | BEOL | i-line | 5 μm | Bonding pad |

## 2. FEOL — Key Layers

### 2.1 Alignment Mark

- Must survive 1700 ℃ activation anneal
- Uses a **carbon cap (1~2 μm)** or a **deep trench refilled with SiO₂** structure
- Separate AML mark + Box-in-Box overlay mark

### 2.2 P-well Implant Mask

- Al implant (heavy, deep) → requires a thick mask
- Typically a stack of **SiO₂ 2~3 μm** hard mask + PR
- High dose (1e14~1e15 cm⁻²) — PR alone is insufficient

### 2.3 Gate Poly

- For Trench MOSFETs the **trench top corner** is the most demanding exposure
- KrF 248 nm with tight DOF management
- Gate-length uniformity directly drives the $V_{th}$ distribution

## 3. BEOL — Power-Device Specifics

### 3.1 Thick Metal

SiC power devices use thick Al (~5 μm) or Cu (~10 μm) to minimize **power-loop** loss.

- Thicker metal → thicker PR → larger DOF requirement
- **Multiple coating** or **dry-film resist** techniques

### 3.2 Pad / Polyimide

- Bonding pads at 5 × 5 μm or larger pads for wire / clip bonding
- Polyimide passivation requires stress management (accelerates warpage of thinned SiC wafers)

## 4. Exposure-Condition Derivation (example)

KrF (λ = 248 nm) gate poly 0.35 μm derivation:

$$CD = k_1 \cdot \frac{\lambda}{NA}, \quad DOF = k_2 \cdot \frac{\lambda}{NA^2}$$

| Item | Value |
|------|----|
| Wavelength λ | 248 nm |
| NA | 0.68 |
| Sigma (annular) | 0.85 / 0.55 |
| Target CD | 0.35 μm |
| k₁ | 0.96 |
| Theoretical DOF | ~0.54 μm |

→ Real DOF shrinks with PR thickness, BARC thickness, and wafer flatness.
Under SiC wafer warpage, securing a **focus margin of at least 30 %** is recommended.

## 5. CD / Overlay Control

### 5.1 CD Uniformity (CDU)

Target: 3σ < CD × 10 %.

Influencing factors:

- **Dose uniformity** — scanner illumination uniformity
- **Focus uniformity** — wafer flatness, leveling system
- **PR-thickness uniformity** — track coating
- **Etch-bias variation** — downstream impact

### 5.2 Overlay

| Layer-to-Layer | Target Overlay (3σ) |
|----------------|---------------------|
| Source ↔ P-well | < 30 nm |
| Gate ↔ P-well | < 25 nm |
| Contact ↔ Gate | < 40 nm |
| M1 ↔ Contact | < 60 nm |

→ Tool-to-tool matching is critical. Details: [Tool Matching](photo-tool-matching.md).

## 6. Photoresist Selection

| Application | Type | Thickness | Notes |
|-------------|------|-----------|-------|
| FEOL high resolution | KrF chemically amplified | 0.5~0.8 μm | Use with TARC / BARC |
| Implant mask | i-line novolac | 2~5 μm | Stack with hard mask |
| Thick metal | i-line thick film | 5~15 μm | Multi-coat |
| Polyimide | Photo-definable PI itself | 5~20 μm | UV i-line cure |

## 7. References

- C. Mack, *Fundamental Principles of Optical Lithography*, Wiley
- SPIE Advanced Lithography Conference Proceedings
- Tokyo Electron, ASML, Nikon Application Notes

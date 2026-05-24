---
title: Ch.1 SiC Material & Crystal Fundamentals
---

# Ch.1 SiC Material & Crystal Fundamentals

> **Keywords**: 4H-SiC · Bandgap · Polytype · BPD/TSD/TED · Wafer-size roadmap
> **Purpose**: Understand why SiC is replacing Si — at the level of material properties, polytypes, and crystal defects.

## 1. Core Concept — Polytypes and Why 4H Dominates

- SiC has **more than 200 polytypes** owing to variations in the Si–C stacking sequence.
- **4H-SiC** — Smallest electron-mobility anisotropy, making it the best fit for MOSFET fabrication.
  → Mainstream in the power-device industry (onsemi, Infineon, Wolfspeed, etc.).
- **6H-SiC** — Used for optoelectronic devices (LEDs).
- **3C-SiC** — Hetero-epitaxial growth on Si wafers. Still in the research stage.

## 2. Si vs SiC

| Item | Si | 4H-SiC | Implication |
|------|----|--------|------|
| Bandgap (eV) | 1.12 | 3.26 | High-temperature operation · suppressed leakage |
| Critical E-field (MV/cm) | 0.3 | 3.0 (≈ 10×) | High voltage · low-loss drift layer |
| Thermal Conductivity (W/cm·K) | 1.5 | 4.9 | Excellent heat dissipation |
| Saturation Velocity (10⁷ cm/s) | 1.0 | 2.0 | High-frequency operation |
| Max Operating Temp (℃) | ~150 | > 200 | Suited to EV and industrial power |

→ Rapidly displacing Si IGBT in EV inverters, renewable-energy inverters, and industrial power supplies.

## 3. Industry View — Wafer-size Roadmap

- **6 inch (150 mm)** is currently mainstream; **8 inch (200 mm)** transition is in progress.
- onsemi is making large investments to convert to SiC 8-inch at major sites such as Roznov (Czech Republic) and Bucheon (Korea — BK Factory).
- The success condition for 8-inch conversion is **defect-density (/cm²) management** and yield stabilization.
  → Directly connected to Part III defect management (Klarity · ADC · VOG).

## 4. Defects / RCA — Major Crystal Defects

| Defect Type | Impact | Linked Chapter |
|---|---|---|
| **BPD** (Basal Plane Dislocation) | Converts to Stacking Fault under bipolar operation → primary cause of **Bipolar Degradation** | [D-14 Body Diode & BPD](../03-defect/d14-body-diode.md) |
| **TSD** (Threading Screw Dislocation) | Gate Oxide reliability degradation · source of killer defects | [D-12 Gate Oxide](../03-defect/d12-gate-oxide.md) |
| **TED** (Threading Edge Dislocation) | Increased leakage | [A-4 Killer RCA](../03-defect/a04-killer-rca.md) |
| **Carrot / Triangular / Comet** | Surface / shape defects from the epitaxial-growth stage | [B-5 AOI](../03-defect/b05-aoi.md) · [B-6 ADC](../03-defect/b06-adc.md) |
| **Micropipe** | Through-hole hollow defect — virtually eliminated in modern high-quality wafers | [A-2 Surface Defects](../03-defect/a02-surface.md) |

For detailed surface and sub-CD defect mechanisms, see [Ch.2 Wafer & Epi](ch02-wafer-epi.md) and [Part III. A Understanding Defects](../03-defect/index.md).

## 5. References

- [onsemi — Silicon Carbide (SiC)](https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic)
- *SiC Power Devices and ICs*, B. J. Baliga (Wiley) — comprehensive on polytypes and defects
- "Threading Dislocations in 4H-SiC and Their Impact on Device Reliability" — IEEE T-ED and related conference proceedings

---

## Notes (2026-05-24)

- First migration from Notion source (`SiC Study Hub > Chapter 1`).
- Cross-comparisons of 8-inch transition across non-onsemi sites (e.g. Wolfspeed Mohawk Valley) live in [Ch.6 Vertical Supply Chain](../02-process/ch06-vertical-integration.md).

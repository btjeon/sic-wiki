---
title: SiC Semiconductor Wiki
hide:
  - navigation
---

# SiC Semiconductor Wiki

> A personal wiki on **Silicon Carbide (SiC) semiconductors** — devices, processes, FDC, and AI applications.
> Notes accumulated while extending Fab, manufacturing, QMS, FDC, and Machine Vision experience into the SiC domain.

---

## Wiki Structure

<div class="grid cards" markdown>

-   :material-book-open-variant: **Part I. SiC Foundations**

    ---

    Material & Crystal (4H Polytype) · Wafer & Epi (BPD/TSD/TED) · Device Structures (MOSFET/SJ/JBS)

    [:octicons-arrow-right-24: Go to section](01-foundations/index.md)

-   :material-cog-outline: **Part II. Process & Manufacturing**

    ---

    SiC Process Flow (FEOL → BEOL) · onsemi BK Factory case study · Vertical supply chain

    [:octicons-arrow-right-24: Go to section](02-process/index.md)

-   :material-magnify-scan: **Part III. SiC Defect Management**

    ---

    Defect classification · AOI / ADC / Klarity · SPC · VOG · Reliability (Gate Oxide · BTI · BPD) — 14 chapters

    [:octicons-arrow-right-24: Go to section](03-defect/index.md)

-   :material-robot-outline: **Part IV. Process Control & AI Extension**

    ---

    Photo (FEOL/BEOL · OPC · Tool Matching) · FDC (WECO · AI anomaly detection · GNN) · Machine Vision · RCA Ontology

    [:octicons-arrow-right-24: Go to section](04-control-ai/index.md)

-   :material-bookshelf: **Part V. References**

    ---

    onsemi white paper index (TND6396 Reliability, BRD8094 Vertical Integration) · Glossary

    [:octicons-arrow-right-24: Go to section](05-references/index.md)

</div>

---

## Why SiC Matters

SiC offers the following **material advantages over Si**:

| Property | Si | SiC (4H) | Implication |
|------|----|---------|------|
| Bandgap ($E_g$) | 1.12 eV | 3.26 eV | High-temperature, high-voltage operation |
| Critical breakdown field | 0.3 MV/cm | 2.5 MV/cm | Thin drift layer for high blocking voltage |
| Thermal conductivity | 1.5 W/cm·K | 4.9 W/cm·K | Superior heat dissipation |
| Electron saturation velocity | 1.0 × 10⁷ cm/s | 2.0 × 10⁷ cm/s | High-frequency operation |

→ Rapidly displacing Si IGBT in EV inverters, renewable-energy inverters, and industrial power supplies.

## Learning Roadmap

```mermaid
flowchart LR
    A[Start] --> B[Understand SiC properties]
    B --> C[SiC MOSFET structure]
    C --> D[SiC Epi/Implant processes]
    D --> E[FDC/SPC for SiC]
    E --> F["Machine Vision<br/>SiC defect classification"]
    F --> G["AI-based RCA<br/>Ontology"]
```

## Recent Updates

Use the GitHub icon at the top-right to visit the repository; each page footer shows the last modification date.

## External Links

- **Author LinkedIn**: [Byoungtak Jeon (전병탁)](https://www.linkedin.com/in/%EB%B3%91%ED%83%81-%EC%A0%84-8871b8153/)
- **onsemi SiC product line**: <https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic>
- **Velog (blog)**: integration planned

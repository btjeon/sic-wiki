---
title: Ch.6 Vertical Supply Chain & EV Strategy (BRD8094)
---

# Ch.6 Vertical Supply Chain & EV Strategy

> **Keywords**: Vertical Integration · 9-step Supply Chain · Boule-to-Field Traceability · Defect Ownership · Loop Closure Time
> **Reference**: [BRD8094](../05-references/brd8094.md) — *Future-Proofing Your Silicon Carbide Design — A Guide for Automotive Manufacturers* (Sep 2023, 8 p.)
> **Purpose**: The vertical-integration value proposition that onsemi presents to automotive OEMs / Tier-1s, and its interpretation from a defect-engineering standpoint.

## 1. Market Background and Challenges

- The rapidly growing EV market means **SiC demand exceeds supply**.
- Securing a **stable SiC supply** is essential for automotive OEMs · Tier-1s.
- Three representative challenges:
    1. **Non-vertical supplier structure** — boule / wafer outsourcing → sub-optimal solutions, high heat, high resistance, parasitics.
    2. **Greenfield expansion capacity limits** — hard to respond quickly to industry demand.
    3. **External risks** — geopolitics, pandemics, supply-chain disruption.

## 2. What SiC Brings to EVs

- Higher operating temperature and higher voltage handling vs. Si.
- Higher power density · easier thermal management · lower power loss (especially switching loss).
- Result — **lighter vehicles, smaller cooling systems → faster charging, longer range, more efficient EV design**.

## 3. Capabilities a SiC Supplier Must Have (5)

1. **High-voltage / high-power circuit design** + power-conversion optimization
2. **Thermal-management design** — cooling for high current and high density
3. Understanding of **EV safety · durability · compatibility standards**
4. Core technical competence across **materials / die / packaging**
5. **Test and quality assurance** — vertically integrated suppliers **identify and trace defects starting at crystal growth** → reducing infant mortality

## 4. SiC Vertical Supply Chain — 9 Steps (key infographic)

| # | Process step | Key activity | Defect-engineering focus |
|---|---|---|---|
| 1 | **Crystal Growth (Grow Ingot)** | Si · C powder loaded into high-temperature furnace, SiC crystal boule grown | Early BPD / TSD formation, micropipes |
| 2 | **Wafer Fab (Slice / Polish)** | Remove boule top / bottom → machine primary flat → slice → polish | Sub-surface damage, edge chip |
| 3 | **Device Design (fabless integration)** | PFMEA · Test · Reliability · Margin · Redundancy design | Design-stage fault tolerance |
| 4 | **Epi-Layer Growth** | Active layer formed by epi growth | Carrot · Triangle · Comet · Step Bunching |
| 5 | **Device Fabrication** | MOSFET / Diode cell fabrication, gate oxide, gate / source / drain formation | In-trench · Sub-CD · GOI |
| 6 | **Wafer Dicing** | Wafer cutting | Edge chip · micro-crack |
| 7 | **Device Packaging** | Packaging · module assembly | Wire bond · sinter · DBC defects |
| 8 | **Application Integration** | Adoption in OBC · EV traction · charging stations · solar | System-level mission profile |
| 9 | **Field Use** | EV · solar · charging-infrastructure operation | Long-term reliability data feedback |

→ Defect management at each step maps to the A / B / C / D tracks of [Part III](../03-defect/index.md).

## 5. Five Core Values of Vertical Integration

1. **Streamlined Supply Chain** — minimize multi-vendor dependency and disruption risk.
2. **Cost Efficiency** — value-chain control and removal of intermediate steps for price competitiveness.
3. **Customization & Innovation** — requirements reach manufacturing fast, accelerating R&D.
4. **Quality Control** — rigorous quality management at every step meets EV requirements.
5. **Technical Expertise & Support** — technical support spanning materials to packaging.

## 6. Capacity and Speed — Two Metrics

- Supply capability is judged not by sheer volume but by **Volume + Speed**.
- Vertically integrated suppliers can re-allocate capacity and adjust product mix flexibly, responding faster to market demand.

## 7. Defect-Management Interpretation

Vertical integration means **the starting point of defect traceability extends all the way back to the boule**.

```
boule defect → wafer slicing damage → epi defect →
device fab process defect → packaging defect → application defect
```

- A unified quality database means **FA (Failure Analysis) results feed back to prior process steps as corrective actions immediately**.
- Key operational metrics:

| Metric | Definition |
|---|---|
| **Defect Ownership** | Clear assignment of cause stage and responsibility |
| **Loop Closure Time** | Time from issue discovery → corrective action → verified effectiveness |
| **Traceability Coverage** | Scope of links across boule · wafer · epi · device fab · package · field data |

Vertical integration is particularly effective at compressing RCA time for **infant mortality · BPD · crystal-origin defects** from weeks to days.

## 8. References

- onsemi BRD8094/D — *Future-Proofing Your Silicon Carbide Design* (Sep 2023) → [summary](../05-references/brd8094.md)
- onsemi — acquisition announcement of (the former) II-VI and Roznov SiC boule expansion disclosure
- onsemi 2024 Investor Day — *EliteSiC Vertical Integration*

---

## Notes (2026-05-24)

- First migration of Notion `Chapter 6. Vertical Supply Chain & EV Strategy (BRD8094)`.
- Once the BRD8094 PDF is added under `docs/assets/pdf/`, §8 will be augmented with direct links.

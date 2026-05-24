---
title: GNN-based FDC
---

# GNN-based FDC

> Graph Deep Neural Network–based Fault Detection & Classification (KCS 2023). A graph-modeling approach to FDC data.

## 1. Core Idea

- The detailed case study lives in [FDC AI Anomaly Detection](fdc-ai-anomaly.md).
- This page collects the **research-positioning, architecture, and external-reference context**.

## 2. Si vs SiC

- **Si fab** — abundant normal and labeled fault data → supervised GNN can be applied immediately.
- **SiC fab** — relatively little normal data and known-fault labels → use Si fab pre-training + domain adaptation, or transfer-learning combined with one-class anomaly detection.

## 3. Industry View

- Vendors with strong vertically integrated SiC presence (Wolfspeed, Infineon, STMicro, onsemi) can leverage in-house FDC infrastructure for cross-tool / cross-chamber graph modeling.
- For domestic Korean fabs, joining external GNN-FDC research collaborations to build labels is a realistic path.

## 4. Defect / RCA Links

- Output classes can be **directly mapped to A / D-section defects of [Part III](../03-defect/index.md)** (e.g. epi MFC anomaly → Carrot, RF anomaly → Trench sidewall roughness).
- The RCA Ontology link extends naturally to [RCA Ontology](ai-rca-ontology.md).

## 5. References

- *Graph Deep Neural Network-based Fault Detection and Classification in Semiconductor Manufacturing*, KCS 2023
- Velickovic et al., *Graph Attention Networks*, ICLR 2018
- W. Hamilton, *Graph Representation Learning*, Morgan & Claypool

---

## Notes (2026-05-24)

- Page split from the case-study writeup; the operational case content lives in [FDC AI Anomaly Detection](fdc-ai-anomaly.md).

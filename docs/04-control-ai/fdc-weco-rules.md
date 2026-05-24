---
title: WECO Rule Design
---

# WECO Rule Design

The **Western Electric Rules (WECO rules)** are 8 standard rules for detecting anomalous patterns in SPC charts.
In-house operations typically combine the standard rules with domain-specific extensions.

## 1. Standard Western Electric Rules

| Rule | Pattern | Meaning |
|------|---------|---------|
| 1 | One point outside ±3σ | Out of control |
| 2 | 9 consecutive points on one side of the mean | Mean shift |
| 3 | 6 consecutive points monotonically increasing/decreasing | Trend |
| 4 | 14 points alternating up/down | Mixture |
| 5 | 2 of 3 points outside ±2σ (same side) | Mean shift |
| 6 | 4 of 5 points outside ±1σ (same side) | Mean shift |
| 7 | 15 points within ±1σ | Stratification (under-dispersion) |
| 8 | 8 points outside ±1σ (both sides) | Mixture |

## 2. Detection Priority

| Rule | Detection speed | False-alarm rate | Recommendation |
|------|-----------------|------------------|----------------|
| 1 | Fast | 0.27 % | Always ON |
| 2 | Medium | ~0.39 % | Always ON |
| 3 | Medium | ~0.27 % | Always ON |
| 5 | Fast | ~0.5 % | Always ON |
| 6 | Fast | ~0.5 % | Always ON |
| 4, 7, 8 | Slow | Low | Selective |

## 3. False Alarms when Combined

When several rules run together, the **cumulative false-alarm rate** rises fast:

$$\text{False alarm}_{total} \approx 1 - \prod_i (1 - \alpha_i)$$

→ Running rules 1+2+5+6 together gives ~1.5 % false alarms.
→ To avoid alarm fatigue, **rule selection + grouping** is key.

## 4. In-house Extension Rules (examples)

Useful rules in the field that are not part of the standard WECO set:

### 4.1 Tool-stratified rule

- Even on the same SPC chart, **evaluate separately per tool**.
- "Tool A: 3 consecutive points above the mean" → tool-specific drift.

### 4.2 Recipe-stratified rule

- Compute sub-mean and sub-σ per layer / recipe.
- Segmentation within the same SPC card.

### 4.3 Multi-variate WECO

- Based on the joint distance of multiple metrics (e.g. Hotelling T²), not a single metric.
- Photo: CD + Overlay + Defect combined.
- FDC: chamber multivariate signature.

## 5. Implementation Example (Python)

```python
import pandas as pd
import numpy as np

def weco_rule_1(x, mean, sigma):
    """One point outside ±3σ"""
    return (x > mean + 3*sigma) | (x < mean - 3*sigma)

def weco_rule_2(x, mean):
    """9 consecutive points on one side of the mean"""
    above = (x > mean).astype(int)
    return above.rolling(9).sum().isin([0, 9])

def weco_rule_5(x, mean, sigma):
    """2 of 3 points outside ±2σ, same side"""
    above_2s = (x > mean + 2*sigma).astype(int)
    below_2s = (x < mean - 2*sigma).astype(int)
    above_hit = above_2s.rolling(3).sum() >= 2
    below_hit = below_2s.rolling(3).sum() >= 2
    return above_hit | below_hit


# Usage
df = pd.DataFrame({"cd": [...]})
mean = df["cd"].mean()
sigma = df["cd"].std()

df["r1"] = weco_rule_1(df["cd"], mean, sigma)
df["r2"] = weco_rule_2(df["cd"], mean)
df["r5"] = weco_rule_5(df["cd"], mean, sigma)
df["alert"] = df[["r1", "r2", "r5"]].any(axis=1)
```

## 6. WECO vs AI Anomaly Detection

| Item | WECO | AI |
|------|------|----|
| Data requirement | Univariate, normality assumption | Multivariate, time-series |
| Training data | Not required | Normal data required |
| Interpretability | Very high | Low (XAI needed) |
| Deployment cost | Low | Medium ~ high |
| Best fit | SPC card | FDC trace, multivariate |

→ WECO is the **interpretable first line of defense**; AI is the **high-dimensional trace second line**. Operating both together is standard.

## 7. References

- AIAG SPC Manual
- D. C. Montgomery, *Introduction to Statistical Quality Control*, Wiley
- Author's in-house automation: WECO rules + R-based statistical analysis

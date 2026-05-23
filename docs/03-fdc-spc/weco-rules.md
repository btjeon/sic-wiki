# Weco Rule 설계

**Western Electric Rule (Weco rule)** 은 SPC 차트에서 이상 패턴을 검출하는 8가지 표준 룰.
사내 운영 시에는 표준 룰 + 도메인 특화 확장 룰을 함께 운영합니다.

## 1. 표준 Western Electric Rules

| Rule | 패턴 | 의미 |
|------|------|------|
| 1 | 1점이 ±3σ 밖 | Out of control |
| 2 | 연속 9점이 평균 한쪽 | Mean shift |
| 3 | 연속 6점이 증가 또는 감소 | Trend |
| 4 | 14점이 교대로 상승/하강 | Mixture |
| 5 | 3점 중 2점이 ±2σ 밖 (동일 방향) | Mean shift |
| 6 | 5점 중 4점이 ±1σ 밖 (동일 방향) | Mean shift |
| 7 | 15점이 ±1σ 안 | Stratification (under-dispersion) |
| 8 | 8점이 ±1σ 밖 (양쪽 모두) | Mixture |

## 2. 검출 우선순위

| Rule | 검출 속도 | False alarm rate | 적용 권장 |
|------|----------|------------------|-----------|
| 1 | 빠름 | 0.27% | 항상 ON |
| 2 | 중간 | ~0.39% | 항상 ON |
| 3 | 중간 | ~0.27% | 항상 ON |
| 5 | 빠름 | ~0.5% | 항상 ON |
| 6 | 빠름 | ~0.5% | 항상 ON |
| 4, 7, 8 | 느림 | 낮음 | 선택 적용 |

## 3. 동시 적용 시 False Alarm

여러 룰 동시 적용 시 **누적 false alarm rate** 가 빠르게 상승:

\[
\text{False alarm}_{total} \approx 1 - \prod_i (1 - \alpha_i)
\]

→ Rule 1+2+5+6 동시 적용 시 ~1.5% false alarm
→ 알람 피로 (alarm fatigue) 방지 위해 **rule 선택 + 그룹화** 가 중요

## 4. 사내 확장 룰 (예시)

표준 Weco에 없지만 현장에서 유용한 룰:

### 4.1 Tool-stratified rule
- 동일 SPC 차트라도 **tool별로 분리하여 평가**
- "Tool A에서 연속 3점 평균보다 큼" → tool 특이 drift

### 4.2 Recipe-stratified rule
- Layer / recipe 별로 sub-mean & sub-σ 계산
- 동일 SPC 카드 안에서 segmentation

### 4.3 Multi-variate Weco
- 단일 metric이 아닌 **여러 metric의 결합 거리 (Hotelling T²)** 기반
- Photo: CD + Overlay + Defect 결합
- FDC: 챔버 multivariate signature

## 5. 구현 예시 (Python)

```python
import pandas as pd
import numpy as np

def weco_rule_1(x, mean, sigma):
    """1점이 ±3σ 밖"""
    return (x > mean + 3*sigma) | (x < mean - 3*sigma)

def weco_rule_2(x, mean):
    """연속 9점이 평균 한쪽"""
    above = (x > mean).astype(int)
    return above.rolling(9).sum().isin([0, 9])

def weco_rule_5(x, mean, sigma):
    """3점 중 2점이 ±2σ 밖, 동일 방향"""
    above_2s = (x > mean + 2*sigma).astype(int)
    below_2s = (x < mean - 2*sigma).astype(int)
    above_hit = above_2s.rolling(3).sum() >= 2
    below_hit = below_2s.rolling(3).sum() >= 2
    return above_hit | below_hit


# 사용 예시
df = pd.DataFrame({"cd": [...]})
mean = df["cd"].mean()
sigma = df["cd"].std()

df["r1"] = weco_rule_1(df["cd"], mean, sigma)
df["r2"] = weco_rule_2(df["cd"], mean)
df["r5"] = weco_rule_5(df["cd"], mean, sigma)
df["alert"] = df[["r1", "r2", "r5"]].any(axis=1)
```

## 6. Weco vs AI 이상감지

| 항목 | Weco | AI |
|------|------|----|
| 데이터 요구 | 단변량, 정규성 가정 | 다변량, 시계열 |
| 학습 데이터 | 불필요 | 정상 데이터 필요 |
| 해석성 | 매우 높음 | 낮음 (XAI 필요) |
| 도입 비용 | 낮음 | 보통~높음 |
| 적합 영역 | SPC 카드 | FDC trace, multivariate |

→ Weco는 **interpretable 1차 방어선**, AI는 **고차원 trace 2차 방어선**.
함께 운영하는 것이 표준.

## 7. 참고 자료

- AIAG SPC Manual
- Montgomery, *Introduction to Statistical Quality Control*, Wiley
- 저자 사내 자동화 시스템: Weco rule + R 통계 분석 기반

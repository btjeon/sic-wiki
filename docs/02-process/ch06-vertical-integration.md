---
title: Ch.6 수직계열 통합 공급망 & EV 전략 (BRD8094)
---

# Ch.6 수직계열 통합 공급망 & EV 전략

> **핵심 키워드**: Vertical Integration · 9-step Supply Chain · Boule-to-Field Traceability · Defect Ownership · Loop Closure Time
> **참조 자료**: [BRD8094](../05-references/brd8094.md) — *Future-Proofing Your Silicon Carbide Design — A Guide for Automotive Manufacturers* (Sep 2023, 8p)
> **목적**: onsemi 가 자동차 OEM·Tier-1 에 제시하는 수직계열 통합 (Vertical Integration) 가치 제안과, 결함 엔지니어링 관점의 해석.

## 1. 시장 배경과 도전 과제

- EV 시장 급성장 → **SiC 수요가 공급을 초과** 하는 추세.
- 자동차 OEM · Tier-1 의 **안정적 SiC 공급선 확보** 가 필수.
- 대표 도전 과제 3가지:
    1. **비수직계열 공급사 구조** — 부울·웨이퍼 외주 → 미최적 솔루션, 발열·고저항·기생 성분.
    2. **Greenfield 확장의 캐파 한계** — 산업 수요에 빠르게 대응하기 어려움.
    3. **외부 리스크** — 지정학, 팬데믹, 공급망 중단.

## 2. SiC 가 EV 에 가져오는 가치

- Si 대비 **더 높은 동작 온도** + **더 높은 전압 처리**.
- 전력 밀도 ↑ · 열관리 용이 · 전력 손실 (특히 switching loss) 감소.
- 결과 — **가벼운 차량, 작은 냉각 시스템 → 빠른 충전 · 긴 주행거리 · 고효율 EV 설계**.

## 3. SiC 공급사가 갖춰야 할 역량 (5)

1. **고전압 / 고전력 회로 설계** + 전력 변환 최적화 역량
2. **열관리 설계** — 고전류·고밀도 대응 cooling
3. **EV 안전·내구·호환성 표준** 이해
4. **재료 / Die / 패키지** 전반의 핵심 기술 역량
5. **테스트·품질 보증** — 수직계열 통합 공급사는 **Crystal Growth 단계부터 결함을 식별·추적** → Infant Mortality (초기 수명 고장) 감소

## 4. SiC 수직계열 공급망 9단계 (핵심 인포그래픽)

| # | 공정 단계 | 핵심 활동 | Defect 관점 포인트 |
|---|---|---|---|
| 1 | **Crystal Growth (Grow Ingot)** | Si · C 분말을 고온 furnace 에 투입, SiC 결정 boule 성장 | BPD / TSD 초기 형성, Micropipe |
| 2 | **Wafer Fab (Slice / Polish)** | Boule 상하단 제거 → primary flat 가공 → 슬라이싱 → 폴리싱 | Sub-surface damage, Edge chip |
| 3 | **Device Design (Fabless 통합)** | PFMEA · Test · Reliability · Margin · Redundancy 설계 | 설계 단계 Fault tolerance |
| 4 | **Epi-Layer Growth** | 에피 성장으로 활성층 형성 | Carrot · Triangle · Comet · Step Bunching |
| 5 | **Device Fabrication** | MOSFET / Diode 셀 제조, Gate Oxide, 게이트·소스·드레인 형성 | In-trench · Sub-CD · GOI |
| 6 | **Wafer Dicing** | 웨이퍼 절단 | Edge chip · Micro-crack |
| 7 | **Device Packaging** | 패키징 · 모듈 어셈블리 | Wire bond · Sinter · DBC 결함 |
| 8 | **Application Integration** | OBC · EV traction · Charging Station · Solar 적용 | System-level mission profile |
| 9 | **Field Use** | EV · 태양광 · 충전 인프라 운용 | Long-term reliability data feedback |

→ 단계별 결함 관리는 [Part III](../03-defect/index.md) 의 A · B · C · D 트랙으로 매핑.

## 5. 수직계열 통합의 5가지 핵심 가치

1. **Streamlined Supply Chain** — 멀티 벤더 의존·중단 리스크 최소화.
2. **Cost Efficiency** — 밸류체인 통제·중간 단계 제거로 가격 경쟁력.
3. **Customization & Innovation** — 요구사항이 빠르게 제조 단계로 전달되어 R&D 가속.
4. **Quality Control** — 모든 단계의 엄격한 품질 관리로 EV 요구 충족.
5. **Technical Expertise & Support** — 재료~패키지 전 도메인 기술 지원.

## 6. Capacity 와 Speed — 두 메트릭

- 공급 능력은 단순 볼륨이 아닌 **Volume + Speed** 두 메트릭으로 평가.
- 수직계열 공급사는 캐파 재배분·제품 믹스 조정 유연성으로 시장 요구에 빠르게 대응.

## 7. Defect Management 관점 해석

수직계열 = **결함 traceability 의 출발점이 잉고트까지 거슬러 올라간다** 는 의미.

```
boule defect → wafer slicing damage → epi defect →
device fab process defect → packaging defect → application defect
```

- 단일 품질 데이터베이스로 묶을 수 있어 **FA (Failure Analysis) 결과가 즉시 prior process step 의 corrective action 으로 회귀**.
- 운영 관점의 핵심 지표:

| 지표 | 정의 |
|---|---|
| **Defect Ownership** | 원인 단계와 책임 영역의 명확화 |
| **Loop Closure Time** | 이슈 발견 → corrective 적용 → 효과 증명까지 걸리는 시간 |
| **Traceability Coverage** | Boule · Wafer · Epi · Device fab · Package · Field data 의 연결 범위 |

수직계열은 특히 **Infant Mortality · BPD · Crystal-origin Defect** 의 RCA 시간을 주~월 단위로 단축.

## 8. 참고자료

- onsemi BRD8094/D — *Future-Proofing Your Silicon Carbide Design* (Sep 2023) → [요약](../05-references/brd8094.md)
- onsemi — 구 II-VI 인수 발표 및 Roznov SiC Boule 확장 공시
- onsemi 2024 Investor Day — *EliteSiC Vertical Integration*

---

## 추가 노트 (2026-05-24)

- Notion `Chapter 6. 수직계열 통합 공급망 & EV 전략 (BRD8094)` 본문 1차 이관.
- BRD8094 원문 PDF 가 `docs/assets/pdf/` 에 추가되면 §8 참고자료에 직접 링크 보강 예정.

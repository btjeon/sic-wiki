---
title: SiC 반도체 위키
hide:
  - navigation
---

# SiC 반도체 위키

> **Silicon Carbide(SiC) 반도체**의 소자·공정·FDC·AI 응용을 정리한 개인 위키입니다.
> Fab,생산, QMS, FDC·Machine Vision 경험을 SiC 도메인으로 확장하면서 학습한 내용을 기록합니다.

---

## 위키 구성

<div class="grid cards" markdown>

-   :material-book-open-variant: **Part I. SiC Foundations**

    ---

    재료·결정(4H Polytype) · 웨이퍼 & 에피(BPD/TSD/TED) · 디바이스 구조(MOSFET/SJ/JBS)

    [:octicons-arrow-right-24: 바로가기](01-foundations/index.md)

-   :material-cog-outline: **Part II. Process & Manufacturing**

    ---

    SiC 공정 흐름(FEOL→BEOL) · onsemi BK Factory 케이스 · 수직계열 통합 공급망

    [:octicons-arrow-right-24: 바로가기](02-process/index.md)

-   :material-magnify-scan: **Part III. SiC Defect Management**

    ---

    결함 분류 · AOI/ADC/Klarity · SPC·VOG · 신뢰성(Gate Oxide·BTI·BPD) 14 챕터

    [:octicons-arrow-right-24: 바로가기](03-defect/index.md)

-   :material-robot-outline: **Part IV. 공정 제어 & AI 확장**

    ---

    Photo (FEOL/BEOL·OPC·Tool Matching) · FDC (Weco·AI 이상감지·GNN) · Machine Vision · RCA Ontology

    [:octicons-arrow-right-24: 바로가기](04-control-ai/index.md)

-   :material-bookshelf: **Part V. References**

    ---

    onsemi 공개 백서 색인 (TND6396 신뢰성, BRD8094 수직통합) · 용어집(Glossary)

    [:octicons-arrow-right-24: 바로가기](05-references/index.md)

</div>

---

## SiC가 중요한 이유

SiC는 **Si 대비 다음과 같은 물성 우위**를 가집니다:

| 물성 | Si | SiC (4H) | 의미 |
|------|----|---------|------|
| 밴드갭 ($E_g$) | 1.12 eV | 3.26 eV | 고온·고전압 동작 |
| 절연파괴 전계 | 0.3 MV/cm | 2.5 MV/cm | 박형 drift layer로 고내압 |
| 열전도도 | 1.5 W/cm·K | 4.9 W/cm·K | 방열 우수 |
| 전자 포화속도 | 1.0 × 10⁷ cm/s | 2.0 × 10⁷ cm/s | 고주파 동작 |

→ EV 인버터, 신재생 에너지 인버터, 산업용 전원에서 Si IGBT를 빠르게 대체 중입니다.

## 학습 로드맵

```mermaid
flowchart LR
    A[Start] --> B[SiC 물성 이해]
    B --> C[SiC MOSFET 구조]
    C --> D[SiC Epi/Implant 공정]
    D --> E[FDC/SPC for SiC]
    E --> F["Machine Vision<br/>SiC 결함 분류"]
    F --> G["AI 기반 RCA<br/>Ontology"]
```

## 최근 업데이트

문서 우측 상단 GitHub 아이콘으로 저장소 이동, 각 페이지 하단에서 마지막 수정일을 확인할 수 있습니다.

## 외부 링크

- **저자 LinkedIn**: [전병탁 (Byoungtak Jeon)](https://www.linkedin.com/in/%EB%B3%91%ED%83%81-%EC%A0%84-8871b8153/)
- **onsemi SiC 제품군**: <https://www.onsemi.com/products/discrete-power-modules/silicon-carbide-sic>
- **Velog (블로그)**: 추후 연동 예정

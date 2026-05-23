# FEOL / BEOL 포토리소그래피

## 1. Layer Stack 개요

SiC Power MOSFET Photo Layer 구성 예시 (Planar 기준):

| Layer | 종류 | 노광기 | 해상도 목표 | 비고 |
|-------|------|-------|------------|------|
| Align Mark | FEOL | i-line | 1.0 μm | 1700℃ anneal 견딤 |
| P-well | FEOL | i-line / KrF | 0.5~1.0 μm | Al implant mask |
| N+ Source | FEOL | KrF | 0.4 μm | P/N₂ implant |
| Gate Poly | FEOL | KrF | 0.35 μm | Trench는 더 좁음 |
| Contact | FEOL | KrF | 0.4 μm | Selective etch |
| M1 | BEOL | KrF / i-line | 0.5 μm | 두꺼운 Al 또는 Cu |
| Via | BEOL | i-line | 1.0 μm | |
| Pad | BEOL | i-line | 5 μm | Bonding pad |

## 2. FEOL — 핵심 Layer

### 2.1 Alignment Mark

- 1700℃ activation anneal을 견뎌야 함
- **Carbon cap (1~2 μm)** 또는 **deep trench + refilled SiO₂** 구조 사용
- AML mark + Box-in-Box overlay mark 분리

### 2.2 P-well Implant Mask

- Al implant (heavy, deep) → 두꺼운 mask 필요
- 일반적으로 **SiO₂ 2~3 μm** Hard mask + PR
- High dose (1e14~1e15 cm⁻²) → resist alone은 부족

### 2.3 Gate Poly

- Trench MOSFET의 경우 **trench top corner** 노광이 가장 까다로움
- KrF 248nm + 좁은 DOF 관리
- Gate length 균일도가 Vth 분포에 직결

## 3. BEOL — Power 디바이스 특이사항

### 3.1 두꺼운 Metal

SiC 전력 소자는 **Power loop** 손실 최소화를 위해 두꺼운 Al(~5 μm) 또는 Cu(~10 μm) 사용.

- 두꺼운 metal → 두꺼운 PR → 더 큰 DOF 필요
- **Multiple coating** 또는 **dry film resist** 활용

### 3.2 Pad / Polyimide

- Bonding pad 5×5 μm 또는 wire/clip bond용 큰 pad
- Polyimide passivation은 stress 관리 (SiC 박편 wafer warpage 가속)

## 4. 노광 조건 도출 (예시)

KrF (λ=248nm) gate poly 0.35 μm 노광 조건 도출:

\[
CD = k_1 \cdot \frac{\lambda}{NA}, \quad DOF = k_2 \cdot \frac{\lambda}{NA^2}
\]

| 항목 | 값 |
|------|----|
| Wavelength λ | 248 nm |
| NA | 0.68 |
| Sigma (annular) | 0.85/0.55 |
| Target CD | 0.35 μm |
| k₁ | 0.96 |
| Theoretical DOF | ~0.54 μm |

→ 실제 DOF는 PR thickness, BARC 두께, wafer flatness에 따라 줄어듦.
SiC wafer warpage 환경에서는 **focus margin 30% 이상** 확보 권장.

## 5. CD / Overlay Control

### 5.1 CD 균일도 (CDU)

목표: 3σ < CD × 10%

영향 인자:
- **Dose uniformity**: scanner illumination 균일도
- **Focus uniformity**: wafer flatness, leveling system
- **PR thickness uniformity**: track coating
- **Etch bias variation**: 후공정 영향

### 5.2 Overlay

| Layer-to-Layer | Target Overlay (3σ) |
|----------------|---------------------|
| Source ↔ P-well | < 30 nm |
| Gate ↔ P-well | < 25 nm |
| Contact ↔ Gate | < 40 nm |
| M1 ↔ Contact | < 60 nm |

→ Tool 간 matching이 핵심. 상세: [Tool Matching](tool-matching.md)

## 6. Photoresist 선택

| 적용 | 종류 | 두께 | 비고 |
|------|------|------|------|
| FEOL 고해상도 | KrF chemically amplified | 0.5~0.8 μm | TARC/BARC 병용 |
| Implant mask | i-line novolac | 2~5 μm | Hard mask와 stack |
| Thick metal | i-line thick film | 5~15 μm | Multi-coat |
| Polyimide | PI 자체가 photo definable | 5~20 μm | UV i-line cure |

## 7. 참고 자료

- C. Mack, *Fundamental Principles of Optical Lithography*, Wiley
- SPIE Advanced Lithography Conference Proceedings
- Tokyo Electron, ASML, Nikon Application Notes

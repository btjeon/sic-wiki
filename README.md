# SiC 반도체 위키

SiC(Silicon Carbide) 반도체 소자·공정·FDC·AI 응용 정리 — MkDocs Material 기반 GitHub Pages 위키.

## 🌐 사이트

> 빌드 후 `https://gogotak.github.io/sic-wiki/` 에서 접근 (계정명에 맞춰 변경)

## 🧰 기술 스택

- [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- LaTeX 수식 (MathJax 3)
- Mermaid 다이어그램
- PlantUML (회로도/시퀀스)
- 한국어/영어 검색 (Lunr + jieba)
- GitHub Actions 자동 배포

## ⚡ 빠른 시작 (로컬 미리보기)

```bash
# 1) 가상환경
python -m venv .venv
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # macOS/Linux

# 2) 의존성 설치
pip install -r requirements.txt

# 3) 로컬 서버 (http://127.0.0.1:8000)
mkdocs serve
```

## 🚀 GitHub Pages 배포

상세 단계는 [`SETUP-GUIDE.md`](SETUP-GUIDE.md) 참조.

요약:
1. 본 폴더를 GitHub 저장소(예: `gogotak/sic-wiki`)에 push
2. **Settings → Pages → Source: `gh-pages` branch**로 설정
3. main 브랜치에 push할 때마다 GitHub Actions가 자동 빌드 + 배포

## 🗂 폴더 구조

```
sic-wiki/
├── mkdocs.yml                    # 사이트 설정
├── requirements.txt              # Python 의존성
├── SETUP-GUIDE.md                # 셋업 가이드 (한국어)
├── README.md
├── .github/workflows/deploy.yml  # GitHub Actions
└── docs/
    ├── index.md                  # 홈
    ├── about.md                  # 소개
    ├── stylesheets/extra.css     # 커스텀 CSS
    ├── javascripts/mathjax.js    # MathJax 설정
    ├── 01-devices-process/       # 1. 소자·공정
    ├── 02-photolithography/      # 2. Photo 공정
    ├── 03-fdc-spc/               # 3. FDC/SPC
    ├── 04-ai-applications/       # 4. AI 적용
    └── references/glossary.md    # 용어집
```

## ✍️ 문서 작성 규칙

- 한국어 본문 + 영어 전문용어 병기
- 출처가 있는 인용은 링크 + 날짜 명시
- 사내 비공개 데이터는 게재 금지 (NDA)
- 본인 경험은 `!!! experience "현장 노트"` admonition으로 표시

## 📜 라이선스

- 문서: **CC BY 4.0**
- 코드: **MIT License**

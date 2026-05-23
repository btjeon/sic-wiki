# SiC 위키 셋업 가이드 (한국어)

이 문서는 본 프로젝트를 **로컬에서 미리보고**, **GitHub Pages에 자동 배포**하기까지의 모든 단계를 안내합니다.

---

## 1. 준비물

| 항목 | 버전 | 비고 |
|------|------|------|
| Python | 3.10+ | 3.11 권장 |
| Git | 최신 | |
| GitHub 계정 | — | 무료 계정 OK |
| 텍스트 에디터 | VS Code 등 | |

---

## 2. 로컬 미리보기 (5분)

### 2.1 Python 가상환경 만들기

```powershell
# 본 폴더(sic-wiki/)로 이동
cd "C:\Users\gogot\OneDrive\문서\Claude\Projects\on semi\sic-wiki"

# 가상환경 생성
python -m venv .venv

# 활성화 (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# (만약 실행정책 오류가 나면)
# Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 2.2 의존성 설치

```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

### 2.3 로컬 서버 실행

```powershell
mkdocs serve
```

브라우저에서 <http://127.0.0.1:8000> 열기 → 위키가 보이면 성공.
Markdown 파일을 수정하면 **자동 reload** 됩니다.

---

## 3. GitHub 저장소 만들기

### 3.1 새 저장소 생성

1. 브라우저에서 <https://github.com/new> 접속
2. Repository name: **`sic-wiki`** (또는 원하는 이름)
3. Public 으로 설정 (GitHub Pages 무료 호스팅을 위해)
4. **Initialize this repository 옵션은 모두 OFF** (이미 로컬에 파일 있음)
5. **Create repository** 클릭

### 3.2 mkdocs.yml 수정

`mkdocs.yml` 상단의 다음 라인을 본인 저장소 주소로 교체:

```yaml
site_url: https://gogotak.github.io/sic-wiki/
repo_name: gogotak/sic-wiki
repo_url: https://github.com/gogotak/sic-wiki
```

GitHub 계정명이 `gogotak`이 아니라면 모두 변경.

### 3.3 로컬 → GitHub push

```powershell
cd "C:\Users\gogot\OneDrive\문서\Claude\Projects\on semi\sic-wiki"

git init
git add .
git commit -m "Initial commit: SiC wiki bootstrap"
git branch -M main

# 본인 저장소 주소로 변경
git remote add origin https://github.com/gogotak/sic-wiki.git

git push -u origin main
```

---

## 4. GitHub Pages 활성화

### 4.1 첫 배포

`main`에 push 하면 `.github/workflows/deploy.yml` 가 자동 실행되어 `gh-pages` 브랜치를 만들고 배포합니다.

진행 상황 확인:
- GitHub 저장소 → **Actions** 탭 → 최신 워크플로우 클릭
- 모든 step이 ✅ 녹색이면 성공 (보통 2~3분 소요)

### 4.2 Pages 소스 설정

1. GitHub 저장소 → **Settings** → 좌측 **Pages**
2. Source 섹션:
    - **Branch**: `gh-pages`
    - **Folder**: `/ (root)`
3. **Save** 클릭
4. 잠시 후 페이지 상단에 `Your site is live at https://gogotak.github.io/sic-wiki/` 노출

### 4.3 사이트 확인

위 URL로 접속 → 사이트가 보이면 끝.
이후 main에 push할 때마다 **자동 재배포**.

---

## 5. 일상 사용 흐름

### 새 문서 추가

1. `docs/` 하위 폴더에 `.md` 파일 작성
2. `mkdocs.yml`의 `nav:` 섹션에 추가
3. 로컬에서 `mkdocs serve`로 확인
4. git commit + push → 자동 배포

### 다이어그램 추가

- Mermaid: ` ```mermaid ... ``` ` 코드 블록
- PlantUML: ` ```plantuml ... ``` ` 코드 블록
- 수식: `\\( a^2 + b^2 \\)` (인라인) 또는 `\\[ ... \\]` (블록)

### 본인 경험 강조

```markdown
!!! experience "현장 노트"
    여기에 본인 경험 작성.
```

---

## 6. 다음 단계 (선택)

### 6.1 도메인 연결

`username.github.io/sic-wiki/` 대신 `sic.byoungtak.com` 같은 커스텀 도메인 사용:
1. `docs/CNAME` 파일 생성 → 도메인 작성
2. DNS A 레코드를 GitHub Pages IP로 설정

### 6.2 Velog/블로그 연동

- 위키 = **체계화된 정리** (영구 보존)
- 블로그 = **시점별 글** (학습 일기, 단상)
- 위키 페이지 끝에 관련 블로그 글 링크
- 블로그 글에서도 위키 페이지로 링크 → 상호 보완

### 6.3 더 많은 주제 추가

본 위키는 **SiC 단일 주제** 입니다.
다른 주제(예: PCB AI, Battery 공정 AI)는 **별도 저장소 + 별도 사이트**로 운영 권장:
- `sic-wiki` — 본 사이트
- `pcb-ai-wiki` — PCB AI Inspection 정리
- `battery-mfg-wiki` — 배터리 셀 조립공정 AI

각 사이트를 별도로 운영하고, 메인 포털(예: `byoungtak.com`)에서 모두 링크.

---

## 7. 문제 해결 (FAQ)

### Q1. `mkdocs serve` 했더니 PlantUML 다이어그램이 안 보임
- 인터넷 연결 확인 (PlantUML public server 사용)
- 사내망이라면 사내 PlantUML 서버 주소로 `mkdocs.yml` 의 `server:` 변경

### Q2. 한글 검색이 잘 안 됨
- `jieba` 설치 확인 (`pip install jieba`)
- Material 기본 검색은 단어 단위 → 한글은 형태소 분석 필요 시 추가 플러그인 설치

### Q3. GitHub Actions가 실패함
- Actions 탭 → 실패한 step의 로그 확인
- 대부분 `requirements.txt` 버전 충돌이나 권한 문제
- Settings → Actions → "Workflow permissions" → **Read and write permissions** 활성화

### Q4. 페이지 last-modified 날짜가 안 보임
- `git-revision-date-localized-plugin` 정상 동작을 위해 워크플로우에서 `fetch-depth: 0` 필요 (이미 설정됨)

---

## 8. 도움 받기

- MkDocs Material 공식 문서: <https://squidfunk.github.io/mkdocs-material/>
- 본 위키 저장소 Issues
- 저자 LinkedIn: <https://www.linkedin.com/in/%EB%B3%91%ED%83%81-%EC%A0%84-8871b8153/>

즐거운 위키 운영 되시길!

# 마이그레이션 git 적용 가이드 (선생님이 실행)

**작성일**: 2026-05-24
**상황**: Cowork sandbox 가 OneDrive 의 `.git/config` 를 읽지 못해 `git mv`/`git commit`을 sandbox 에서 실행 불가.
파일 시스템 작업(폴더 생성·파일 이동·`mkdocs.yml` 수정)은 Cowork 에서 끝났으며, 아래 명령을 **선생님이 PowerShell 또는 VSCode 통합 터미널**에서 실행하시면 됩니다.

---

## 1. 사전 점검 (변경 사항 확인)

```powershell
cd "C:\Users\gogot\OneDrive\문서\Claude\Projects\on semi\sic-wiki"

# 작업 브랜치 (main 외에 작업한다면)
git checkout -b feat/restructure-v2

# 어떤 변경이 있었는지 한눈에 확인
git status

# 변경 요약 (rename 자동 감지 활성화로 history 보존 확인)
git status -s
git diff --stat
```

예상 결과:
- **변경된 파일**: `mkdocs.yml` (nav 전면 개편)
- **삭제**: `docs/01-devices-process/*.md` (4개 중 index.md 만 남음), `docs/02-photolithography/*.md` 외 다수, `docs/references/glossary.md`
- **신규 추가**: `docs/01-foundations/` ~ `docs/05-references/` 폴더 전체 + 22개 stub
- **rename 자동 감지**: git이 mv를 rename으로 인식하면 `R  old/path -> new/path` 형태로 표시 (history 보존)

---

## 2. 4단계 commit (논리적 단위로 분리 추천)

### Commit 1 — 새 뼈대 + 신규 stub
```powershell
# 새 폴더와 신규 stub 추가
git add docs/01-foundations/ch01-material.md
git add docs/02-process/
git add docs/03-defect/
git add docs/04-control-ai/index.md
git add docs/04-control-ai/fdc-gnn.md
git add docs/04-control-ai/ai-rca-ontology.md
git add docs/05-references/index.md
git add docs/05-references/tnd6396.md
git add docs/05-references/brd8094.md

# 각 Part 의 index.md (Part I/II/III/IV/V 개요)
git add docs/01-foundations/index.md

git commit -m "feat(structure): introduce Part I-V skeleton with index pages

- Add 5 new top-level sections: Foundations / Process / Defect / Control-AI / References
- Add Part overview pages (index.md per part)
- Add 14 stub chapters for Part III. SiC Defect Management (A1-A4, B5-B7, C8-C10, D11-D14)
- Add stubs for Part II Ch.4-6, Part IV new pages (GNN, RCA Ontology), Part V (TND6396, BRD8094)
- Ch.1 SiC Material stub under Part I"
```

### Commit 2 — 기존 파일 이동 (rename 자동 감지)
```powershell
# git이 rename으로 자동 인식 → history 보존
git add docs/01-foundations/ch02-wafer-epi.md   # was 01-devices-process/epitaxy.md
git add docs/01-foundations/ch03-device.md      # was 01-devices-process/sic-mosfet-structure.md
git add docs/04-control-ai/photo-feol-beol.md   # was 02-photolithography/feol-beol.md
git add docs/04-control-ai/photo-opc.md         # was 02-photolithography/opc-mask.md
git add docs/04-control-ai/photo-tool-matching.md # was 02-photolithography/tool-matching.md
git add docs/04-control-ai/fdc-weco-rules.md    # was 03-fdc-spc/weco-rules.md
git add docs/04-control-ai/fdc-ai-anomaly.md    # was 03-fdc-spc/ai-anomaly-detection.md
git add docs/04-control-ai/ai-machine-vision.md # was 04-ai-applications/machine-vision.md
git add docs/04-control-ai/ai-defect-classification.md # was 04-ai-applications/defect-classification.md
git add docs/05-references/glossary.md          # was references/glossary.md

# 기존 위치 파일 삭제 (이미 mv 됐지만 git이 추적하도록)
git add -u docs/

# rename 감지 결과 확인
git status

git commit -m "refactor(docs): move existing pages to new Part I/IV/V locations

- 01-devices-process/sic-mosfet-structure.md -> 01-foundations/ch03-device.md
- 01-devices-process/epitaxy.md              -> 01-foundations/ch02-wafer-epi.md
- 02-photolithography/* -> 04-control-ai/photo-*.md
- 03-fdc-spc/*          -> 04-control-ai/fdc-*.md
- 04-ai-applications/*  -> 04-control-ai/ai-*.md
- references/glossary.md -> 05-references/glossary.md

Update internal cross-references to match new paths.
Defects.md 는 _legacy/ 폴더로 이동 (Ch.2 에 통합 예정)."
```

### Commit 3 — 기존 폴더 정리 (orphan index.md 삭제)
```powershell
# Cowork sandbox 에서 OneDrive 권한 문제로 못 지운 것들 — VSCode 에서 처리
git rm docs/01-devices-process/index.md
git rm docs/02-photolithography/index.md
git rm docs/03-fdc-spc/index.md
git rm docs/04-ai-applications/index.md

# 빈 폴더는 git이 추적하지 않으므로 자동 제거
# Windows 파일 시스템에서 빈 폴더 정리 (선택)
Remove-Item -Recurse -Force docs/01-devices-process, docs/02-photolithography, docs/03-fdc-spc, docs/04-ai-applications -ErrorAction SilentlyContinue

git commit -m "chore(cleanup): remove legacy section index files

Old section index.md files were temporarily kept as redirect stubs
during Cowork migration (OneDrive write permission limited).
Now safely removed in VSCode terminal."
```

### Commit 4 — mkdocs.yml 교체
```powershell
git add mkdocs.yml

git commit -m "feat(nav): restructure mkdocs nav to Part I-V (Notion book mirror)

- Top-level: 홈, 소개, Part I~V
- Part III 에 4 sub-groups (A. 결함의 이해 / B. 검사·AI·운영 / C. 관리·품질 / D. 신뢰성)
- Total 39 nav entries (was 11)"
```

### Commit 5 — _proposals 정리 (선택)
```powershell
# 설계 문서를 보존하려면 add, 마이그레이션 완료 후 지우려면 git rm
# 권장: _proposals/ 는 일단 보존 → 다음 v3 개편 때 레퍼런스
git add _proposals/
git add _legacy/        # 정리 안된 old-defects.md

git commit -m "docs: keep migration design notes in _proposals/ and _legacy/"
```

---

## 3. 빌드 검증 (push 전 필수)

```powershell
# 가상환경 활성화 (Windows)
.venv\Scripts\Activate.ps1

# (필요 시 의존성 설치)
pip install -r requirements.txt

# 로컬 빌드
mkdocs build --strict

# 또는 라이브 프리뷰
mkdocs serve
# http://127.0.0.1:8000 에서 확인
```

**예상 경고**:
- `git-revision-date-localized-plugin` 의 timestamp 경고 — **무시 OK** (실제 GitHub Actions 빌드에서는 안 뜸)
- 그 외 WARNING이 뜨면 nav 항목 누락 가능 — 알려주세요

---

## 4. Push (검증 통과 후)

```powershell
# 브랜치 push
git push origin feat/restructure-v2

# GitHub 에서 PR 생성 → main merge → GitHub Pages 자동 배포 (1~2분)

# 또는 main 에 바로 작업했으면
git push origin main
```

---

## 5. 배포 후 확인

- https://btjeon.github.io/sic-wiki/ 접속
- 좌측 메뉴에 Part I~V 5개 섹션 보이는지
- Part III. SiC Defect Management 클릭 → A/B/C/D 4개 하위 그룹 + 14 챕터 보이는지
- 옛 URL (예: `/01-devices-process/`) 접속 시 404가 떠도 OK (redirects 플러그인 미사용)
  → 외부에서 옛 URL 로 링크된 곳이 있다면 추후 `mkdocs-redirects` 추가 검토

---

## 6. 문제 발생 시

| 증상 | 해결 |
|---|---|
| `git status` 가 rename 으로 안 잡고 add/delete 로만 잡힘 | `git config diff.renames true` 후 재시도. mv 한 파일 내용이 크게 변경되지 않았다면 rename 인식됨 |
| 빈 폴더 (`01-devices-process` 등) 가 남아서 거슬림 | git은 빈 폴더 추적 안 함. Windows Explorer 에서 수동 삭제 |
| `mkdocs build --strict` 가 strict warning 으로 실패 | timestamp 경고면 무시. 다른 경고면 본 문서로 회신 부탁 |
| 한글 nav 항목이 깨짐 | `mkdocs.yml` 인코딩이 UTF-8 인지 확인 (BOM 없음) |

# Cowork → Claude Code 인수인계

**작성일**: 2026-05-24
**완료일**: 2026-05-24 (같은 세션)
**현재 상태**: ✅ Priority 1·2 모두 완료. Notion 본문 21개 변환 + mermaid 수정 + emoji 정리 모두 push.
**최근 commit**:
- `10c1528` docs(part-iii+v): import Notion content for 14 Defect chapters + TND6396 summary
- `6be7d5f` docs(part-i+ii): import Notion content for Ch.2~6
- `435f548` docs(ch01): import Notion content for SiC 재료·결정 기초
- `abfa636` style(docs): drop casual emoji, keep Material SVG icons only
- `5441edc` fix(home): mermaid flowchart rendering

**남은 작업**: TND6396 PDF 를 `docs/assets/pdf/` 로 추가 후 Figure 1~17 임베드 보강 + Part IV의 일부 photo/FDC stub.

---

## 1. 현재 상태 스냅샷

### Git
- branch: `main`
- last commit: `7ea84a0 fix(home): update landing cards to new Part I-V structure`
- 누적 6개 commit: structure → rename → cleanup → nav → docs → home fix
- origin/main 동기화 완료, GitHub Actions 빌드 ✓, GitHub Pages 배포 ✓

### docs/ 트리 (43 페이지)
```
docs/
├── index.md                          # ← mermaid 깨짐
├── about.md
├── 01-foundations/  (Part I)         # 4 (index + Ch.1~3)  Ch.1만 stub
├── 02-process/      (Part II)        # 4 (index + Ch.4~6)  Ch.4~6 모두 stub
├── 03-defect/       (Part III)       # 15 (index + 14 D-Ch) 모두 stub ⚠️
├── 04-control-ai/   (Part IV)        # 10 (index + 9)  fdc-gnn, ai-rca-ontology 만 stub
└── 05-references/   (Part V)         # 4 (index + tnd6396 + brd8094 + glossary) tnd6396/brd8094 stub
```

기존 컨텐츠 살아있는 파일 (이관됨):
- `01-foundations/ch02-wafer-epi.md` (←epitaxy.md, 108 lines)
- `01-foundations/ch03-device.md` (←sic-mosfet-structure.md, 104 lines)
- `04-control-ai/` 7개 파일 (Photo/FDC/AI 기존 본문)
- `05-references/glossary.md`
- `_legacy/old-defects.md` (구 defects.md, BPD/TSD/TED 본문 → Ch.2 에 흡수 예정)

### orphan 빈 폴더 (사이트 동작 무관, 정리 선택)
```
docs/01-devices-process/  (empty)
docs/02-photolithography/ (empty)
docs/03-fdc-spc/          (empty)
docs/04-ai-applications/  (empty)
docs/references/          (empty)
```

---

## 2. 우선순위 작업

### Priority 1 — mermaid 다이어그램 수정 (5분)

**증상**: `docs/index.md` 의 학습 로드맵 mermaid 가 plain text 코드 블록으로 보임.
**원인 추정**: mkdocs-material 의 mermaid 자동 통합이 동작 안 함. mermaid.js 로드 누락 가능성.

**확인 순서**:
1. `docs/index.md` 의 fence 가 ` ```mermaid ` 로 시작하는지 (이미 그렇긴 함)
2. `mkdocs.yml` 의 `markdown_extensions` 에 `pymdownx.superfences` + custom_fences mermaid 설정 (이미 있음)
3. `mkdocs serve` 띄우고 브라우저 콘솔 — `mermaid is not defined` 등 에러 나오면 mermaid.js 로드 안 됨
4. 해결: `mkdocs.yml` 의 `extra_javascript` 에 mermaid CDN 추가

**해결 패치 후보 (mkdocs.yml)**:
```yaml
extra_javascript:
  - javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
  - https://unpkg.com/mermaid@10/dist/mermaid.min.js          # 추가
  - javascripts/mermaid-init.js                                # 추가
```

`docs/javascripts/mermaid-init.js` (신규):
```javascript
document$.subscribe(({ body }) => {
  mermaid.initialize({
    startOnLoad: false,
    theme: document.body.getAttribute("data-md-color-scheme") === "slate" ? "dark" : "default"
  });
  mermaid.run({ querySelector: "pre.mermaid, code.mermaid, .mermaid" });
});
```

`mkdocs serve` 로 라이브 확인 후 커밋.

### Priority 2 — Notion 본문 → stub 페이지 채우기 (큰 작업)

**Notion 페이지 ID 매핑** (모두 같은 워크스페이스):

| stub 파일 | Notion 페이지 ID/URL |
|---|---|
| `01-foundations/ch01-material.md` | https://www.notion.so/35743034f62481179b93ede2a95f3f12 |
| `01-foundations/ch02-wafer-epi.md` (보강) | https://www.notion.so/35743034f6248130b452fe326cff7a55 |
| `01-foundations/ch03-device.md` (보강) | https://www.notion.so/35743034f62481af80edc43548f58287 |
| `02-process/ch04-process-flow.md` | https://www.notion.so/35743034f6248178af5bd255a105a24b |
| `02-process/ch05-onsemi-bk.md` | https://www.notion.so/35743034f624817daa7ec2badae49f22 |
| `02-process/ch06-vertical-integration.md` | https://www.notion.so/35743034f62481bdb8faf520fca8b59a |
| `03-defect/a01-classification.md` | https://www.notion.so/35743034f624817297aaf1970d065a74 |
| `03-defect/a02-surface.md` | https://www.notion.so/35743034f62481889208d72f9befc8aa |
| `03-defect/a03-trench-subcd.md` | https://www.notion.so/35743034f62481eaadf8f21dc159ff09 |
| `03-defect/a04-killer-rca.md` | https://www.notion.so/35743034f624818393e6d1a9feab8ac5 |
| `03-defect/b05-aoi.md` | https://www.notion.so/35743034f62481c78121f9d0c9afa867 |
| `03-defect/b06-adc.md` | https://www.notion.so/35743034f624819993b1e4e4f5b816db |
| `03-defect/b07-klarity.md` | https://www.notion.so/35743034f624813683dfeff52bf9ce4e |
| `03-defect/c08-spc.md` | https://www.notion.so/35743034f62481b3817cf15651ac55d8 |
| `03-defect/c09-vog.md` | https://www.notion.so/35743034f62481278d41fb93ae89665b |
| `03-defect/c10-new-process.md` | https://www.notion.so/35743034f624818690b6d2d633605e78 |
| `03-defect/d11-reliability.md` | https://www.notion.so/35743034f624811691b6f1393e3b24a1 |
| `03-defect/d12-gate-oxide.md` | https://www.notion.so/35743034f62481f28e4bdb9889bf2c4d |
| `03-defect/d13-bti.md` | https://www.notion.so/35743034f62481d7aa56d108d955ce2f |
| `03-defect/d14-body-diode.md` | https://www.notion.so/35743034f6248129b654e7a5aaa76540 |
| `05-references/tnd6396.md` | https://www.notion.so/35743034f6248140939fe5c56653464b |

**Notion → mkdocs 변환 규칙**:
- `<table header-row="true">` → 표준 markdown table
- `<callout icon="📘" color="orange_bg">` → `!!! info "..."` admonition (Material)
- `<file src="...">` → 첨부 PDF는 `docs/assets/pdf/` 에 옮기고 상대 링크
- `[[페이지]]` 형식 링크 → mkdocs 상대 경로 (`../03-defect/d11-reliability.md`)
- 이미지 (S3 URL) → 다운로드해서 `docs/assets/img/` 에 저장
- LaTeX 수식 → `$...$` (inline) / `$$...$$` (block) — 이미 MathJax 로드됨

**Claude Code 에 Notion MCP 설치 안내**:
1. `~/.claude.json` 또는 VSCode 설정에서 MCP 서버 추가
2. 또는 Notion 공식 MCP 서버 (`@modelcontextprotocol/server-notion`) 설치
3. 인증 토큰: Notion Internal Integration Token (`Settings → Integrations → Develop your own integrations`)
4. 안 되면: 선생님이 Notion 페이지 본문을 직접 export (Markdown & CSV) 해서 `_drafts/` 폴더에 넣어주시면 Claude Code 가 그것을 읽어 변환 가능

---

## 3. 페이지 템플릿 (모든 stub 공통 — 본문 채울 때 참조)

```markdown
---
title: <Ch.X 제목>
---

# <Ch.X 제목>

> **핵심 키워드**: ...
> **참조 자료**: TND6396 §X / BRD8094 §X (해당 시)

## 1. 핵심 개념
<Notion 본문>

## 2. Si vs SiC 차이 (해당 시)
<Notion 본문>

## 3. 산업 적용 관점
(onsemi · BK Factory 등 공개 케이스 — 입사지원/JD 표현 금지)

## 4. 결함 / RCA 연결
(Part III 와의 cross-link)

## 5. 참고자료
- [Title](URL) — Author, Year

---

## 추가 노트 (YYYY-MM-DD)
- ...
```

**금지어**: "JD", "지원", "입사 준비", "대비" — 공개 wiki 톤 유지

---

## 4. Claude Code 추천 첫 프롬프트

```
이 워크스페이스는 SiC 위키 마이그레이션 직후 상태야.
먼저 `_proposals/handoff-to-claude-code.md` 를 읽고 컨텍스트 파악해 줘.
그 다음 Priority 1 (mermaid 수정) 부터 진행하자.
```

또는 한 번에:

```
_proposals/handoff-to-claude-code.md 를 읽고:
1. Priority 1 (mermaid 다이어그램 수정) 을 mkdocs serve 로 라이브 확인하면서 고쳐 줘
2. 수정되면 commit + push (메시지: "fix(home): mermaid flowchart rendering")
3. GitHub Actions 빌드 성공 확인 후 다음 단계 안내해 줘
```

---

## 5. 작업 후 push 사이클 (반복용)

```powershell
# 1. 빌드 검증
mkdocs build --strict

# 2. commit
git add <변경 파일>
git commit -m "<scope>: <메시지>"

# 3. push
git push origin main

# 4. (선택) 배포 확인
# - https://github.com/btjeon/sic-wiki/actions  → workflow 녹색
# - https://btjeon.github.io/sic-wiki/  → 시크릿 창에서 확인 (CDN 캐시 5~10분)
```

---

## 6. 환경 차이 메모

| 항목 | Cowork (지난 세션) | Claude Code (지금부터) |
|---|---|---|
| 파일 시스템 | OneDrive 마운트 (write 일부 제한) | 로컬 직접 (제약 없음) |
| `.git/` 쓰기 | ❌ Operation not permitted | ✓ 자유 |
| `git commit/push` | 선생님이 PowerShell로 | Claude Code 자동 |
| `mkdocs serve` 라이브 | 가능 (sandbox) | 더 빠름 (로컬) |
| Notion MCP | ✓ 즉시 사용 | 별도 설정 필요 |

`docs/01-devices-process/` 등 빈 폴더 4개 + `docs/references/` 정리는 Claude Code 가 처음 작업 시 함께 처리하면 좋음.

---

## 7. 참고 파일

- `_proposals/skeleton-v2.md` — 전체 뼈대 설계도
- `_proposals/mkdocs-v2.yml` — 초안 (적용 완료)
- `_proposals/git-commands.md` — git 명령 가이드 (이미 실행 완료)
- `_legacy/old-defects.md` — 구 defects.md (Ch.2 에 흡수 예정)
- `mkdocs.yml` — 현재 적용 nav
- 본 문서 (`_proposals/handoff-to-claude-code.md`) — 인수인계

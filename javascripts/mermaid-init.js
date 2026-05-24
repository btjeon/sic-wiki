// Mermaid 초기화 - Material for MkDocs (navigation.instant SPA + palette toggle 대응)
// pymdownx.superfences 가 만든 <pre class="mermaid"><code>...</code></pre> 구조를 처리.

(function () {
  function getTheme() {
    var scheme = document.body.getAttribute("data-md-color-scheme");
    return scheme === "slate" ? "dark" : "default";
  }

  function renderAll() {
    if (typeof mermaid === "undefined") return;

    mermaid.initialize({
      startOnLoad: false,
      theme: getTheme(),
      securityLevel: "loose",
      flowchart: { useMaxWidth: true, htmlLabels: true }
    });

    // 1차 렌더 대상: <pre class="mermaid"><code>...</code></pre>
    // mermaid v10 의 .run() 은 querySelector 가 가리키는 노드의 textContent 를 읽어 처리하지만,
    // <code> 가 끼면 안전을 위해 한 번 unwrap 해 준다 (이미 처리된 건 건드리지 않음).
    document.querySelectorAll("pre.mermaid > code").forEach(function (codeEl) {
      var pre = codeEl.parentNode;
      // 이미 변환된 경우 (data-processed) 스킵
      if (pre.getAttribute("data-processed") === "true") return;
      pre.textContent = codeEl.textContent;
    });

    // mermaid.run() 은 Promise 반환 - sync throw + async rejection 둘 다 잡아야 함
    // (Material 의 내장 mermaid 핸들러가 이미 처리된 element 를 다시 건드릴 때 rejection 으로 올 수 있음)
    try {
      var p = mermaid.run({ querySelector: ".mermaid:not([data-processed='true'])" });
      if (p && typeof p.catch === "function") {
        p.catch(function (e) {
          if (e && (e.str || e.message)) console.warn("mermaid render skipped:", e.str || e.message);
        });
      }
    } catch (e) {
      console.warn("mermaid render error:", e);
    }
  }

  // Material 의 document$ observable 이 있으면 SPA 페이지 전환마다 재렌더
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(renderAll);
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderAll);
    } else {
      renderAll();
    }
  }
})();

// LinkedIn Job Card Hider - Basit versiyon

(function () {
  let enabled = true;

  // Gizleme fonksiyonu
  function hideCards() {
    const cards = document.querySelectorAll(".job-card-container");
    cards.forEach((card) => {
      if (enabled) {
        card.style.display = "none";
      } else {
        card.style.display = "";
      }
    });
  }

  // Toggle butonu
  const btn = document.createElement("button");
  btn.textContent = enabled ? "Show Cards" : "Hide Cards";
  btn.style.cssText =
    "position:fixed;bottom:20px;right:20px;z-index:9999;padding:10px;background:#0a66c2;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:bold;";
  btn.onclick = () => {
    enabled = !enabled;
    btn.textContent = enabled ? "Show Cards" : "Hide Cards";
    hideCards();
  };
  document.body.appendChild(btn);

  // Observer - yeni kartlar geldiğinde gizle
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (
          node.nodeType === 1 &&
          node.classList &&
          node.classList.contains("job-card-container")
        ) {
          if (enabled) {
            node.style.display = "none";
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // İlk gizleme
  hideCards();
})();

// LinkedIn Easy Apply Remover - Basit versiyon

function removeEasyApplyJobs() {
  const jobCards = document.querySelectorAll("[data-occludable-job-id]");

  jobCards.forEach((card) => {
    if (card.innerText.includes("Easy Apply")) {
      card.remove(); // direkt sil gitsin
    }
  });
}

const observer = new MutationObserver(() => {
  removeEasyApplyJobs();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Sayfa ilk yüklendiğinde de bir temizle
removeEasyApplyJobs();

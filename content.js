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

// LinkedIn Easy Apply Hider - Toggle ile

let enabled = true;

function hideEasyApplyJobs() {
  const jobCards = document.querySelectorAll("[data-occludable-job-id]");

  jobCards.forEach((card) => {
    if (card.innerText.includes("Easy Apply")) {
      if (enabled) {
        card.style.display = "none"; // Gizle
      } else {
        card.style.display = ""; // Göster
      }
    }
  });
}

// Toggle butonu - header içine ekle
function createToggleButton() {
  const header = document.querySelector(".jobs-search-results-list__header");
  if (!header || document.querySelector("#easy-apply-toggle")) return;

  const btn = document.createElement("button");
  btn.id = "easy-apply-toggle";
  btn.textContent = enabled ? "Hide Easy Apply" : "Show Easy Apply";
  btn.style.cssText = `
    margin-left: 10px;
    padding: 6px 12px;
    background:rgb(0, 255, 13);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
  `;

  btn.onclick = () => {
    enabled = !enabled;
    btn.textContent = enabled ? "Hide Easy Apply" : "Show Easy Apply";
    hideEasyApplyJobs(); // Hemen uygula
  };

  // Header'ın sağ tarafına ekle
  header.appendChild(btn);
}

const observer = new MutationObserver(() => {
  if (enabled) {
    hideEasyApplyJobs();
  }
  // Header'ı da kontrol et
  createToggleButton();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Sayfa ilk yüklendiğinde de bir temizle
setTimeout(() => {
  hideEasyApplyJobs();
  createToggleButton();
}, 1000);

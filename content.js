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

// LinkedIn Job Filter - Easy Apply & Applied Jobs

let hideEasyApply = true;
let hideApplied = true;

function filterJobs() {
  const jobCards = document.querySelectorAll("[data-occludable-job-id]");

  jobCards.forEach((card) => {
    const cardText = card.innerText;
    const hasEasyApply = cardText.includes("Easy Apply");
    const hasApplied =
      cardText.includes("Applied") || cardText.includes("Başvuruldu");

    let shouldHide = false;

    if (hideEasyApply && hasEasyApply) {
      shouldHide = true;
    }

    if (hideApplied && hasApplied) {
      shouldHide = true;
    }

    if (shouldHide) {
      card.style.display = "none";
    } else {
      card.style.display = "";
    }
  });
}

// Checkbox container - header içine ekle
function createFilterContainer() {
  const header = document.querySelector(".jobs-search-results-list__header");
  if (!header || document.querySelector("#job-filter-container")) return;

  const container = document.createElement("div");
  container.id = "job-filter-container";
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-left: 10px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  `;

  // Container başlığı
  const title = document.createElement("div");
  title.textContent = "Job Filters";
  title.style.cssText = `
    font-weight: bold;
    font-size: 12px;
    color: #666;
    margin-bottom: 5px;
  `;

  // Easy Apply Checkbox
  const easyApplyContainer = document.createElement("div");
  easyApplyContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const easyApplyCheckbox = document.createElement("input");
  easyApplyCheckbox.type = "checkbox";
  easyApplyCheckbox.id = "easy-apply-checkbox";
  easyApplyCheckbox.checked = hideEasyApply;
  easyApplyCheckbox.style.cssText = `
    width: 16px;
    height: 16px;
    cursor: pointer;
  `;

  const easyApplyLabel = document.createElement("label");
  easyApplyLabel.htmlFor = "easy-apply-checkbox";
  easyApplyLabel.textContent = "Hide Easy Apply Jobs";
  easyApplyLabel.style.cssText = `
    font-size: 12px;
    color: #333;
    cursor: pointer;
  `;

  easyApplyCheckbox.onchange = () => {
    hideEasyApply = easyApplyCheckbox.checked;
    filterJobs();
  };

  easyApplyContainer.appendChild(easyApplyCheckbox);
  easyApplyContainer.appendChild(easyApplyLabel);

  // Applied Jobs Checkbox
  const appliedContainer = document.createElement("div");
  appliedContainer.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const appliedCheckbox = document.createElement("input");
  appliedCheckbox.type = "checkbox";
  appliedCheckbox.id = "applied-checkbox";
  appliedCheckbox.checked = hideApplied;
  appliedCheckbox.style.cssText = `
    width: 16px;
    height: 16px;
    cursor: pointer;
  `;

  const appliedLabel = document.createElement("label");
  appliedLabel.htmlFor = "applied-checkbox";
  appliedLabel.textContent = "Hide Applied Jobs";
  appliedLabel.style.cssText = `
    font-size: 12px;
    color: #333;
    cursor: pointer;
  `;

  appliedCheckbox.onchange = () => {
    hideApplied = appliedCheckbox.checked;
    filterJobs();
  };

  appliedContainer.appendChild(appliedCheckbox);
  appliedContainer.appendChild(appliedLabel);

  // Container'a ekle
  container.appendChild(title);
  container.appendChild(easyApplyContainer);
  container.appendChild(appliedContainer);
  header.appendChild(container);
}

const observer = new MutationObserver(() => {
  if (hideEasyApply || hideApplied) {
    filterJobs();
  }
  // Header'ı da kontrol et
  createFilterContainer();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Sayfa ilk yüklendiğinde de bir temizle
setTimeout(() => {
  filterJobs();
  createFilterContainer();
}, 1000);

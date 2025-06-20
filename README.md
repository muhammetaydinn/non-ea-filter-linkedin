# LinkedIn Easy Apply Filter

A Chrome extension that hides Easy Apply jobs on LinkedIn, allowing you to focus on jobs that require traditional application processes.

## Features

- ✅ Automatically hides Easy Apply jobs on LinkedIn job search pages
- ✅ Toggle button in the header to show/hide Easy Apply jobs
- ✅ Works with infinite scroll - new jobs are automatically filtered
- ✅ No popup or extra UI required
- ✅ Lightweight and fast

## Installation

### From Chrome Web Store (Recommended)
1. Visit the Chrome Web Store listing
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)
1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select this folder

## How to Use

1. Go to LinkedIn Jobs: `https://www.linkedin.com/jobs/`
2. Search for jobs as usual
3. Easy Apply jobs will be automatically hidden
4. Use the "Hide Easy Apply" / "Show Easy Apply" button in the header to toggle

## How It Works

- **Target:** LinkedIn job cards with `[data-occludable-job-id]` attribute
- **Filter Logic:** Checks for "Easy Apply" text in job card content
- **Display Method:** Uses `display: none` to hide cards
- **Observer Pattern:** MutationObserver watches for new job cards

## Privacy

This extension:
- Only runs on LinkedIn job pages
- Does not collect any personal data
- Does not send data to external servers
- Only modifies the display of job cards locally

## Technical Details

- **Manifest Version:** 3
- **Permissions:** `activeTab` (only for LinkedIn job pages)
- **Content Script:** Runs on `*://*.linkedin.com/jobs/*`
- **Browser Support:** Chrome, Edge, other Chromium-based browsers

## Troubleshooting

- **Jobs not being filtered:** Refresh the page and try again
- **Button not appearing:** Make sure you're on a LinkedIn jobs page
- **Extension not working:** Check if Developer mode is enabled (for manual installation)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.

## Version History

- **v1.0.0** - Initial release with basic Easy Apply filtering

## Dosya Yapısı

```
linkedin-easy-apply-filter/
├── manifest.json      # Uzantı konfigürasyonu
├── content.js         # Ana filtreleme kodu
├── README.md          # Bu dosya
└── icons/             # Uzantı ikonları (opsiyonel)
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Nasıl Çalışır

1. **Sayfa Yüklendiğinde:** Tüm mevcut iş kartları taranır ve "Easy Apply" içermeyenler gizlenir
2. **Dinamik İçerik:** MutationObserver ile yeni eklenen iş kartları otomatik olarak filtrelenir
3. **URL Değişiklikleri:** LinkedIn'in SPA yapısı nedeniyle sayfa değişikliklerinde yeniden başlatılır

## Teknik Detaylar

- **Target Selector:** `.job-card-container` - LinkedIn'in iş kartı container'ı
- **Filter Logic:** `card.textContent.toLowerCase().includes('easy apply')`
- **Display Method:** `display: none` ile gizleme
- **Observer Pattern:** MutationObserver ile DOM değişikliklerini izleme

## Sorun Giderme

- **İlanlar filtrelenmiyor:** Console'u açıp hata mesajlarını kontrol edin
- **Yeni ilanlar görünmüyor:** Sayfayı yenileyin ve tekrar deneyin
- **Uzantı çalışmıyor:** Developer mode'un açık olduğundan emin olun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 
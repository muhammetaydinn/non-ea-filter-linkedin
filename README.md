# LinkedIn Easy Apply Filter

Bu Chrome uzantısı, LinkedIn iş arama sayfalarında sadece "Easy Apply" seçeneği olan iş ilanlarını gösterir ve diğerlerini gizler.

## Özellikler

- ✅ LinkedIn iş arama sayfalarında otomatik çalışır
- ✅ Sadece "Easy Apply" içeren ilanları gösterir
- ✅ Sonsuz scroll ile yüklenen yeni ilanları otomatik filtreler
- ✅ MutationObserver ile dinamik içerik değişikliklerini yakalar
- ✅ Popup veya ekstra UI gerektirmez
- ✅ Türkçe yorumlarla açıklanmış kod

## Kurulum

1. **Chrome'da Developer Mode'u açın:**
   - Chrome'da `chrome://extensions/` adresine gidin
   - Sağ üst köşedeki "Developer mode" toggle'ını açın

2. **Uzantıyı yükleyin:**
   - "Load unpacked" butonuna tıklayın
   - Bu klasörü seçin

3. **Test edin:**
   - LinkedIn'e gidin: `https://www.linkedin.com/jobs/`
   - İş arama yapın
   - Sadece "Easy Apply" içeren ilanların göründüğünü kontrol edin

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
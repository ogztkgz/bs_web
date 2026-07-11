# AGENTS.md

Bu proje bir Angular frontend projesidir. Kod yazarken, refactor yaparken veya yeni ozellik gelistirirken asagidaki kurallara uy.

## Genel Hedef

Kod temiz, okunabilir, surdurulebilir, responsive ve PWA uyumlu olmalidir.
Kisa vadede calisan ama uzun vadede bakimi zor cozumler tercih edilmemelidir.

## Angular Kurallari

* Angular best practice'lerine uygun kod yaz.
* Component, service, model, enum ve interface dosyalarini sorumluluklarina gore ayir.
* Component icinde gereksiz is mantigi tutma.
* API cagrilari service katmaninda yapilmalidir.
* Component sadece UI ve kullanici etkilesimiyle ilgilenmelidir.
* Tekrar eden kodlari ortak helper, shared service veya reusable component haline getir.
* Gereksiz `any` kullanimindan kacin.
* TypeScript type safety'ye onem ver.
* Interface ve type tanimlarini acik ve anlasilir yap.
* Observable kullanımlarinda memory leak olusmamasina dikkat et.
* Gerekli yerlerde `async pipe` tercih et.
* `subscribe` kullaniliyorsa unsubscribe yonetimini dogru yap.

## Proje Yapisi

Mumkun oldugunca asagidaki gibi duzenli bir yapi tercih et:

```text
src/app/
  core/
    services/
    guards/
    interceptors/
    models/
  shared/
    components/
    pipes/
    directives/
  features/
    feature-name/
      components/
      pages/
      services/
      models/
  layouts/
  app.routes.ts
```

## Component Kurallari

* Component isimleri acik ve anlamli olmalidir.
* Buyuk componentler kucuk, tekrar kullanilabilir componentlere bolunmelidir.
* HTML dosyasinda karmasik kosullar ve hesaplamalar yazma.
* Karmasik islemleri TypeScript tarafinda getter, method veya view model ile sadelestir.
* Component dosyalari gereksiz uzun olmamalidir.
* UI state yonetimi acik ve takip edilebilir olmalidir.

## Stil ve Responsive Tasarim

* Tasarim responsive olmalidir.
* Mobil, tablet ve desktop gorunumleri dikkate alinmalidir.
* Gereksiz sabit genisliklerden kacin.
* Flexbox ve CSS Grid dogru sekilde kullanilmalidir.
* Ortak stil tekrarleri azaltilmalidir.
* Kullanici deneyimi sade, modern ve anlasilir olmalidir.
* Buton, form, kart, liste gibi yapilar tutarli gorunmelidir.
* Erisilebilirlik icin uygun HTML semantiklerine dikkat et.
* Gorsel hiyerarsi acik olmalidir.

## Design System Kurallari

Bu projede tasarim degerleri merkezi olarak yonetilmelidir.

### Tema Yonetimi

Asagidaki degerler component icerisinde hardcoded olarak kullanilmamalidir:

* Renkler
* Font aileleri
* Font boyutlari
* Font agirliklari
* Border radius degerleri
* Shadow degerleri
* Spacing degerleri (`margin`, `padding`, `gap`)
* Z-index katmanlari
* Breakpoint degerleri
* Buton stilleri
* Form stilleri
* Kart (`card`) stilleri

Bu degerler merkezi bir tema yapisindan yonetilmelidir.

Ornek:

```scss
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-success: #22c55e;
  --color-danger: #ef4444;

  --font-family-base: 'Inter', sans-serif;

  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
}
```

### UI Tutarliligi

* Ayni amac icin kullanilan tum butonlar ayni tasarim dilini kullanmalidir.
* Ayni tur kartlar ayni gorunumde olmalidir.
* Form alanlari proje genelinde tutarli gorunmelidir.
* Renk kullanimi anlamli olmalidir:
* Primary -> Ana aksiyonlar
* Success -> Basarili islemler
* Warning -> Uyarilar
* Danger -> Hatalar ve silme islemleri

### Yeni UI Gelistirirken

Yeni bir ekran gelistirirken:

1. Once mevcut component veya stil kullanilabiliyor mu kontrol et.
2. Kullanilabiliyorsa yeniden olusturma.
3. Ortak kullanim ihtimali varsa reusable component olustur.
4. Yeni tasarim token'i gerekiyorsa merkezi tema dosyasina ekle.
5. Component icinde sabit renk veya font degeri tanimlama.

### Yasaklar

Asagidaki kullanimlar mumkun oldugunca yapilmamalidir:

```scss
color: #2563eb;
font-size: 17px;
padding: 13px;
border-radius: 11px;
```

Yerine tema degiskenleri kullanilmalidir:

```scss
color: var(--color-primary);
font-size: var(--font-size-md);
padding: var(--spacing-md);
border-radius: var(--radius-md);
```

### Uzun Vadeli Hedef

Marka renkleri, fontlar veya tasarim dili degistiginde uygulamanin tamami yalnizca tema dosyasi degistirilerek guncellenebilmelidir.

## PWA Uyumlulugu

* Uygulama PWA uyumlulugu dusunulerek gelistirilmelidir.
* Mobil tarayici deneyimi uygulama hissine yakin olmalidir.
* Offline veya zayif baglanti durumlari goz onunde bulundurulmalidir.
* Gereksiz buyuk asset kullanimindan kacin.
* Performansi dusurecek kodlardan uzak dur.
* Lazy loading kullanilabilecek feature modullerinde tercih edilmelidir.
* Lighthouse performans, accessibility ve best practices skorlarini kotulestirecek degisikliklerden kacin.

## Form Kurallari

* Formlarda validation acik ve kullanici dostu olmalidir.
* Hata mesajlari anlasilir yazilmalidir.
* Reactive Forms tercih edilmelidir.
* Form submit islemlerinde loading, success ve error state yonetimi yapilmalidir.
* Kullanici ayni islemi yanlislikla birden fazla kez tetikleyememelidir.

## API ve Hata Yonetimi

* API istekleri dogrudan component icinde yapilmamalidir.
* HTTP error handling merkezi veya tutarli sekilde yapilmalidir.
* Kullaniciya teknik hata mesaji gosterme.
* Kullanici dostu hata mesajlari yaz.
* Loading state, empty state ve error state ihmal edilmemelidir.
* API response modelleri type/interface ile tanimlanmalidir.

## Kod Kalitesi

* Gereksiz yorum satiri yazma.
* Kod zaten kendini acikliyorsa yorum ekleme.
* Karmasik bir is kurali varsa kisa ve anlamli yorum eklenebilir.
* Magic string ve magic number kullanimindan kacin.
* Sabit degerleri constant veya enum olarak tanimla.
* Dosya, class, method ve degisken isimleri acik olmalidir.
* Kod okunabilirligi performans kadar onemlidir.

## Performans

* Gereksiz render ve hesaplamalardan kacin.
* Buyuk listelerde pagination, virtual scroll veya lazy loading dusun.
* Gorseller optimize edilmelidir.
* Gereksiz package ekleme.
* Bundle size artiracak cozumlerden kacin.
* Change detection maliyetini artiracak yapilara dikkat et.

## Commit ve Degisiklik Yaklasimi

* Degisiklikleri kucuk ve anlamli parcalar halinde yap.
* Gereksiz dosya formatlama veya alakasiz refactor yapma.
* Sadece istenen kapsamda degisiklik yap.
* Var olan calisan yapıyı bozma.
* Yeni kod yazarken mevcut proje stiline uy.

## Agent Davranis Kurallari

* Kod uretmeden once mevcut yapıyı incele.
* Projede kullanilan mimariye ve klasor duzenine uy.
* Emin olmadigin durumda mevcut pattern'i takip et.
* Gereksiz buyuk mimari degisiklik onerme.
* Yeni bir yapi ekliyorsan neden gerekli oldugunu kisa acikla.
* Cozumu sade, surdurulebilir ve genisletilebilir tut.
* Responsive ve PWA etkisini her UI degisikliginde dikkate al.
* Kod verirken sadece ilgili dosyalari ve gerekli degisiklikleri uret.
* Kullanici istemedikce tum projeyi bastan tasarlama.

## Oncelik Sirasi

Karar verirken oncelik sirasi su sekilde olmalidir:

1. Dogru calisan yapi
2. Temiz ve okunabilir kod
3. Angular best practice
4. Responsive tasarim
5. PWA uyumlulugu
6. Performans
7. Genisletilebilirlik

## Yapilmamasi Gerekenler

* Component icine buyuk is mantigi yazma.
* Her seyi tek dosyada toplama.
* Gereksiz `any` kullanma.
* Kullanilmayan import, degisken veya fonksiyon birakma.
* UI'da responsive davranisi ihmal etme.
* API hatalarini sessizce yutma.
* Kullaniciya ham backend hata mesaji gosterme.
* Gereksiz bagimlilik ekleme.
* Mevcut mimariyi sebepsiz degistirme.

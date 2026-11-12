# React Portfolio | Responsive Developer Portfolio

[English](#english) · [Canlı portfolyo](https://react-portfolio-topaz-ten.vercel.app/)

## Türkçe

**React Portfolio**, Figma'daki *İkinci Alternatif* tasarımının (düğüm `2:15`) React ve Vite ile uygulanmış responsive portfolyo projesidir. **Bileşen mimarisi, Context API, kalıcı kullanıcı tercihleri, erişilebilirlik ve API hata yönetimi** konularını gösterir.

### Özellikler
- Masaüstü ve mobil ekranlara uyumlu düzen
- Context API ile tema ve dil tercihleri; `localStorage` ile kalıcılık
- Yerel JSON tabanlı profil/proje içeriği
- Axios ile JSONPlaceholder örnek API isteği; yanıt doğrulama ve başarısızlıkta yerel verilere dönüş
- Semantik HTML, klavye odağı, azaltılmış hareket tercihi ve lazy-loaded görseller
- GitHub Actions üzerinde test ve production build kontrolleri

**Teknolojiler:** React 19 · JavaScript · Vite · Axios · Context API · CSS · Prettier · GitHub Actions · Vercel

### Öne çıkan projeler
- [Kahve Durağı](https://github.com/nmertcan/coffee_app_react) — API tabanlı kahve ve sipariş arayüzü · [Demo](https://coffee-app-react.vercel.app/)
- [Movie Explorer](https://github.com/nmertcan/movie_explorer_react) — film arama, kategoriler, kalıcı favoriler · [Demo](https://movie-explorer-react-sigma.vercel.app/)
- [React Login Form](https://github.com/nmertcan/login_form_react) — form ve istemci yönlendirmesi · [Demo](https://login-form-react-indol.vercel.app/)
- [Teknolojik Market](https://github.com/nmertcan/sepet_uygulamasi_react) — React state yönetimi ve sepet

### Kurulum ve kontrol
```bash
npm install
npm run dev
npm test
npm run build
```

### İçeriği özelleştirme
- Profil, projeler ve bağlantılar: `src/data/portfolio.json`
- Türkçe/İngilizce metinler: `src/data/copy.js`
- Görseller: `public/assets/`

Boş bağlantılar gösterilmez veya devre dışı bırakılır. Portfolyodaki kişisel bilgileri güncellemek için önce veri dosyasını düzenleyin.

**Canlı portfolyo:** https://react-portfolio-topaz-ten.vercel.app/

## English

A responsive React/Vite portfolio implementing the Figma *İkinci Alternatif* design (node `2:15`). It demonstrates **component-based architecture, Context API preferences, persistent settings, accessible UI, and defensive API integration**.

**Features:** responsive layouts, bilingual UI, light/dark preferences, JSON-driven content, Axios mock API with local-data fallback, semantic HTML, keyboard focus styles, reduced-motion support, and GitHub Actions CI.

**Stack:** React 19, JavaScript, Vite, Axios, Context API, CSS, Prettier, GitHub Actions, Vercel.

**Run:** `npm install && npm run dev` · **Checks:** `npm test && npm run build`

**Live:** https://react-portfolio-topaz-ten.vercel.app/

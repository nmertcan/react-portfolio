# React Portfolio

[Türkçe](#türkçe) · [English](#english)

## Türkçe

Figma'daki **İkinci Alternatif** tasarımının (`2:15` numaralı düğüm) React ve Vite ile geliştirilmiş portföy uygulaması. Masaüstü ve mobil ekranlara uyum sağlar. Tema ve dil tercihleri Context API ile yönetilir ve `localStorage` içinde saklanır. İçerik yerel JSON dosyasından okunur; proje verileri ayrıca Axios ile bir örnek API'ye gönderilir.

**Canlı portföy:** https://react-portfolio-topaz-ten.vercel.app/

**Canlı projeler:** [Kahve Durağı](https://coffee-app-react.vercel.app/) · [Movie Explorer](https://movie-explorer-react-sigma.vercel.app/) · [React Login Form](https://login-form-react-indol.vercel.app/)

### Kurulum ve çalıştırma

```bash
npm install
npm run dev
```

Kontrolleri çalıştırmak için:

```bash
npm test
npm run build
```

GitHub Actions, `main` dalına yapılan gönderimlerde ve pull request'lerde testleri ve üretim derlemesini çalıştırır.

### İçeriği düzenleme

- Profil bilgileri, projeler ve bağlantılar `src/data/portfolio.json` dosyasında bulunur. Boş bırakılan bağlantılar gösterilmez veya devre dışı bırakılır.
- Türkçe ve İngilizce arayüz metinleri `src/data/copy.js` dosyasındadır.
- Görseller `public/assets/` klasöründedir.
- Doğum tarihi ve tercih edilen pozisyon alanları henüz doldurulmamıştır.

### Örnek API

`src/hooks/usePortfolioData.js`, sayfa açılır açılmaz yerel proje verilerini gösterir. `src/services/portfolioApi.js`, proje listesini Axios ile JSONPlaceholder'ın `/posts` adresine POST isteği olarak gönderir. Dönen yanıt doğrulanır ve uygunsa kartlar bu yanıtla güncellenir. İstek başarısız olursa yerel veriler görünmeye devam eder ve yeniden deneme seçeneği sunulur. İsteğe profil veya iletişim bilgileri eklenmez. İstek tarayıcının **Network/Ağ** panelinden incelenebilir.

### Kod yapısı ve erişilebilirlik

Sayfa bölümleri `src/components/` içindeki bileşenlere ayrılmıştır. `App.jsx`, verileri bileşenlere props üzerinden aktarır. `src/preferences.jsx`, tema ve dil durumunu Context API ile paylaşır; `src/hooks/usePersistentPreference.js` tercihleri `localStorage` ile eşitler. Sayfada semantik HTML, etiketli gezinme ve kontroller, görünür odak stilleri, azaltılmış hareket tercihi ve farklı ekran boyutlarına uyarlanan düzenler bulunur. Proje görselleri ihtiyaç duyulduğunda yüklenir.

### Yayın

**Private** GitHub deposu Vercel'e bağlıdır. Derleme komutu `npm run build`, çıktı klasörü `dist` olarak ayarlanmıştır. Kaynak kod deposu private olsa da canlı site herkese açıktır.

## English

React and Vite implementation of the Figma **İkinci Alternatif** design (node `2:15`). The site supports desktop and mobile layouts, Context API theme and language preferences saved to `localStorage`, JSON-driven content, and an Axios request to a public mock API.

**Live portfolio:** https://react-portfolio-topaz-ten.vercel.app/

**Live projects:** [Kahve Durağı](https://coffee-app-react.vercel.app/) · [Movie Explorer](https://movie-explorer-react-sigma.vercel.app/) · [React Login Form](https://login-form-react-indol.vercel.app/)

### Run

```bash
npm install
npm run dev
```

Run the checks with:

```bash
npm test
npm run build
```

GitHub Actions runs tests and a production build on pushes to `main` and pull requests.

### Personalize

- Edit `src/data/portfolio.json` for profile details, projects, and links. Empty links are omitted or disabled.
- Edit `src/data/copy.js` for Turkish and English interface text.
- Images are stored in `public/assets/`.
- Birth date and preferred role are still blank.

### Mock API

`src/hooks/usePortfolioData.js` displays local project data immediately. `src/services/portfolioApi.js` sends the project list to JSONPlaceholder's `/posts` endpoint with Axios POST. The response is validated before the cards are updated. If the request fails, local projects remain visible and a retry option is offered. Profile and contact details are not sent. You can inspect the request in the browser's Network panel.

### Structure and accessibility

Page sections are split into components under `src/components/`. `App.jsx` passes data through props. `src/preferences.jsx` shares theme and language state through Context API, while `src/hooks/usePersistentPreference.js` synchronizes preferences with `localStorage`. The page uses semantic HTML, labelled navigation and controls, visible focus styles, reduced-motion support, and responsive layouts. Project images are lazy loaded.

### Deployment

The **private** GitHub repository is connected to Vercel. The build command is `npm run build`, and the output directory is `dist`. The live site is public while the source repository remains private.

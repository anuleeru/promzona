# Инструкция по деплою

## Подготовка к деплою

1. Проверьте, что все зависимости установлены:
   ```bash
   npm install
   ```

2. Запустите сборку:
   ```bash
   npm run build
   ```

3. Проверьте результат локально:
   ```bash
   npm run preview
   ```

## Деплой на хостинг

### Вариант 1: Статический хостинг (Netlify, Vercel, GitHub Pages)

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**GitHub Pages:**
1. Добавьте в `vite.config.js`:
   ```js
   base: '/repository-name/'
   ```
2. Соберите проект: `npm run build`
3. Загрузите содержимое `dist/` в ветку `gh-pages`

### Вариант 2: Собственный сервер (Apache/Nginx)

**Nginx конфигурация:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/promzona/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Оптимизация кеширования
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache .htaccess:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Кеширование
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### Вариант 3: Docker

**Dockerfile:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Запуск:**
```bash
docker build -t promzona .
docker run -p 80:80 promzona
```

## Проверка после деплоя

- [ ] Логотипы отображаются корректно
- [ ] Фавикон виден во вкладке браузера
- [ ] Все 4 зоны работают корректно
- [ ] 3D виды отображаются
- [ ] Модальные окна открываются
- [ ] Переключение между вкладками работает
- [ ] Манифест PWA загружается (`/manifest.json`)
- [ ] robots.txt доступен (`/robots.txt`)

## Оптимизация

После деплоя рекомендуется:
- Настроить CDN для статических ресурсов
- Включить GZIP/Brotli сжатие на сервере
- Настроить HTTPS сертификат (Let's Encrypt)
- Добавить мониторинг (Google Analytics, Yandex Metrika)

---

© 2026 Кыргызкомур ЦУК&Л

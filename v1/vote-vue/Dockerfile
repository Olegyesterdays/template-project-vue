# Используем официальный образ Node.js
FROM node:16 AS build-stage

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем зависимости и файлы package.json
COPY package.json .
COPY package-lock.json .

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Собираем приложение
RUN npm run build

# Создаем production-стадию
FROM nginx:alpine AS production-stage

# Копируем собранные файлы из предыдущей стадии
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Указываем порт, который будет открыт в контейнере
EXPOSE 80

# Команда для запуска Nginx в фоновом режиме
CMD ["nginx", "-g", "daemon off;"]

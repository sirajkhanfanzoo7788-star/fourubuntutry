# 1️⃣ Base image
FROM node:20

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# 4️⃣ Copy app code
COPY . .

# 5️⃣ Expose port your app uses
EXPOSE 5000

# 6️⃣ Start the app
CMD ["node", "app.js"]
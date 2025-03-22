FROM node:22-alpine
WORKDIR /app
COPY package*.json .
COPY pnpm-lock*.yaml .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]
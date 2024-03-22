# Build Stage
FROM node:20.9.0-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
COPY next.config.js ./
RUN npm install
COPY . .
RUN  npm run build
#

# Production Stage
FROM node:20.9.0-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/next.config.js ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/.env.local ./
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]

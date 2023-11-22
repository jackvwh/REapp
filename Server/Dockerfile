FROM node:18.16.0-bullseye-slim As base

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /Server
COPY . .
RUN npm install
EXPOSE 3000

FROM base as production

ENV NODE_ENV=production
RUN npm run build
CMD ["dumb-init", "node", "dist/index.js"]



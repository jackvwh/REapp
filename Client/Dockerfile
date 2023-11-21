FROM node:14.15.4-alpine3.12 as base

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /Client
COPY . .
RUN npm install
EXPOSE 5000

FROM base as production

ENV NODE_ENV=production
RUN npm run build
CMD ["dumb-init", "node", "dist/index.js"]


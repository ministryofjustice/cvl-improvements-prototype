FROM node:24-alpine

ENV NODE_ENV=production

RUN addgroup --gid 1017 --system appgroup \
  && adduser --uid 1017 --system appuser --gid 1017

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add --no-cache make python3

COPY . .

RUN npm install

RUN chown -R appuser:appgroup /app

USER 1017

RUN chmod +x start.sh

CMD ["./start.sh"]

FROM node:22-alpine

ENV NODE_ENV=production

RUN addgroup -g 1017 -S appgroup \
  && adduser -u 1017 -S -G appgroup appuser

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

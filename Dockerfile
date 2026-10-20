FROM node:24-bullseye-slim

ENV NODE_ENV=production

RUN addgroup --gid 1017 --system appgroup \
  && adduser --uid 1017 --system appuser --gid 1017

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        make \
        python3 && \
    rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm install -g npm@12
RUN npm install

RUN chown -R appuser:appgroup /app

RUN chmod +x start.sh

USER 1017

CMD ["./start.sh"]
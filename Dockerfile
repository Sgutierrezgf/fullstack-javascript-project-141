FROM node:22-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    make \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /project

COPY package.json package-lock.json .npmrc ./
RUN npm ci --legacy-peer-deps

COPY . .

CMD ["bash", "-c", "make setup && make test"]

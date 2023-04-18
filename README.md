# About The Project

I had issues self-hosting my [Cal.com](https://github.com/calcom/cal.com) instance. So I just embeded my hosted insatnce to still have a custom domain. This app is built using [React](https://react.dev)

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/download)

## Installation

Clone this repository + setup

```bash
git clone https://github.com/TeaRex-coder/calendar-embed.git
cd calendar-embed
ht
```

Update calLink: "name-here", with your calLink

`nano script.js`

### Build with Docker Compose

docker-compose.yml

```yaml
version: "3"
services:
  calendar-embed:
    build: .
    ports:
      - "8080:80"
    container_name: calendar-container
    restart: unless-stopped
```

`docker compose up -d --force-recreate`

### Alternativley build with docker run

Build Docker image

`docker build . -t calendar-embed`

Run Docker Container

`docker run -p 8080:80 -d --name calendar-container --restart unless-stopped calendar-embed`

## Custom Domain

To use you own domain consider using a reverse proxy like [Traefik](https://github.com/traefik/traefik)

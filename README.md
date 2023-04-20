<p align="center">
  <img src="https://user-images.githubusercontent.com/8019099/210054112-5955e812-a76e-4160-9ddd-58f2c72f1cce.png">
</p>

<h3 align="center">Running Cal.com embed in a Docker Container</h3>

<p align="center">
  <img src="https://img.shields.io/github/stars/TeaRex-coder/calendar-embed?style=for-the-badge">
  <img src="https://img.shields.io/docker/stars/alexandreboutoille/calendar-embed?style=for-the-badge">
  <img src="https://img.shields.io/docker/pulls/alexandreboutoille/calendar-embed?style=for-the-badge">
  <img src="https://img.shields.io/github/languages/code-size/TeaRex-coder/calendar-embed?style=for-the-badge">
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/TeaRex-coder/calendar-embed?style=for-the-badge">
  <img src="https://img.shields.io/github/issues/TeaRex-coder/TeaRex-coder/calendar-embed?style=for-the-badge">
  <img src="https://img.shields.io/github/license/TeaRex-coder/calendar-embed?style=for-the-badge">
</p>

# About The Project

I had issues self-hosting my [Cal.com](https://github.com/calcom/cal.com) instance. So I just embeded my hosted insatnce to still have a custom domain. This app is built using [React](https://react.dev)

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install)

## Installation

Clone this repository + setup

```bash
git clone https://github.com/TeaRex-coder/calendar-embed.git
cd calendar-embed
```

Update calLink: "name-here", with your calLink

`nano /src/components/Calendar.jsx`

### Using Docker Hub Image

To use the Docker Hub image alexandreboutoille/calendar-embed, edit the `docker-compose.yml` file as follows:

```yaml
version: "3.8"
services:
  calendar-embed:
    image: alexandreboutoille/calendar-embed:latest
    ports:
      - "8080:80"
    container_name: calendar-container
    restart: unless-stopped
```

`docker compose up -d --force-recreate`

### Alternativley build with Docker Compose

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

To use you own domain consider using a reverse proxy like [Traefik](https://github.com/traefik/traefik)

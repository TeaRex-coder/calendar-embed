# About The Project
I had issues self-hosting my [cal.com](https://github.com/calcom/cal.com) instance. So I just embeded my hosted insatnce to still have a custom domain

# Requirements
Install [Docker](https://docs.docker.com/get-docker/)

# Installation
Clone this repository
```bash
git clone https://github.com/TeaRex-coder/calendar-embed.git
cd calendar-embed
```

Update <cal.com url> with your URL

`nano index.html`

Build Docker image

`docker build <file path> -t calendar-embed`

Run Docker Container

`docker run -p 8080:80 -d --name calendar-container calendar-embed`

# Custom Domain
To use you own domain consider using a reverse proxy like [Traefik](https://github.com/traefik/traefik)

# buildmeaplaylist-web
Frontend React server for BuildMeAPlaylist.com

## Overview

```
                         /--- React (front-end)
BuildMeAPlaylist.com ---
                         \--- Golang API (back-end) --- Postgresql (database)


       (React)     ----\
                        Nginx --- Ubuntu (virtualized) --- DigitalOcean
(Golang/Postgresql)----/
```


BuildMeAPlaylist.com - domain by Google Domains

DigitalOcean - hosting ubuntu virtualized environment and nginx server

Nginx - server host

Postgresql - database for backend

React - front end

Golang API server - handle API requests as well as authentication

Maybe switch to DigitalOcean Managed Databases (basically separate droplet just for Postgresql).
But it cost a little bit much...

Current hosting tier is $5/month.

## Developers tool
- Github
- Git
- Visual studio code
- Vim 
- Ubuntu
- Postman
- Curl
- M-m-m-mechanical keyboard (ikbc-f87)
- Discord (Gopher's discord)
- PgAdmin III
- DigitalOcean
- Docker (later)

# Running
`npm install`

`npm start`

# Build
`npm build`

# Serving
`serve -s build -l 3000 &`
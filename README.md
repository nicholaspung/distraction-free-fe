# Distraction Free FE

An application to save titles for later viewing on subreddits that you frequently visit. This was created to limit the subreddit visits and designed to be very plain to discourage frequent usage.

Note: to be used in conjunction with [distraction-free-api](https://github.com/nicholaspung/distraction-free-api)

## Key Features

- See current top Reddit Posts
- Ability to save titles to store for later viewing

## Tech Stack

- Vue
- Vue Router
- VueX
- Auth0

Deployed on Github Pages

```
deploy.sh

*Note: make sure to enable SSH if using below. You can also switch out to https repository url*

Reminder to change:
# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

## Environment Variables

```
auth_config.json

{
  "domain": YOUR_AUTH0_DOMAIN,
  "clientId": YOUR_AUTH0_CLIENT_ID,
  "audience": YOUR_AUTH0_IDENTIFIER,
  "scope": YOUR_SCOPES
}
```

```
api.js

*Change url to point at server*
const urlBase =
  env === 'development' ? 'http://localhost:5000' : 'http://192.168.0.219:5000';
```

```
auth/index.js

*Change uri to correct directory*
const uri = '/distraction-free-fe/';
```

```
vue.config.js

*Change production publicPath to correct directory
publicPath:
  process.env.NODE_ENV === 'production' ? '/distraction-free-fe/' : '/',
```

## Future Features + Needs Work

Check `todos.md` file

- Add a way to check Twitter for the people you follow

## Installation Instructions

To get client running locally:

- Clone this repo
- Create an Auth0 account and select Single Page App
- Update the config files from the "environment variables" section
- `npm install`
- `npm run serve`

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploys to gh-pages

```
npm run deploy
```

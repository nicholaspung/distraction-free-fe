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
  env === 'development' ? 'http://localhost:5000' : 'http://YOUR.SERVER';
```

```
auth/index.js

If you are loading app into a subdirectory, do this. Otherwise, skip.

*Change uri to correct directory*
const uri = '/EITHER_HOME_OR_SUBDIRECTORY/';
```

```
vue.config.js

*Change production publicPath to correct directory
publicPath:
  process.env.NODE_ENV === 'production' ? '/EITHER_HOME_OR_SUBDIRECTORY/' : '/',
```

## Future Features + Needs Work

Check `todos.md` file

- Add a way to check Twitter for the people you follow
- Modify the Auth0 log in page
- Analytics to see how many posts you check a week

## Auth0 Note

If you decided to host the app under a subdirectory, make sure in your Auth0 configuration to point the Remote Origin to `https://YOURDOMAIN.XXX`. Don't be like me and spend a few hours wondering why my remote origin didn't work with `https://YOURDOMAIN.XXX/SUBDIRECTORY/` or `https://YOURDOMAIN.XXX/`

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

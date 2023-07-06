# REACT CALENDAR

## USAGE

### quick generate a component using grc.sh - usage is explained in script comments

### uses json server to serve calendar events from a fake-api

### json server has a small delay added in pkg.json to mimic back end loading time, to mimic an error thrown from the backend just run the front end without JSON server and try to hit / or /search

### run front end

```
yarn dev
```

### run json server

```
yarn fake-api
```

### run storybook and jest tests with these 2 commands

```
yarn storybook
```

```
yarn test
```

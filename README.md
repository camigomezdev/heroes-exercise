# MarvelApp

This page is a personal project to learn about Vue.js and a11y.

### We're using:

- Vue.js
- Vue-cli
- Sass
- [Marvel API](https://developer.marvel.com/)

### Working with Marvel API

1. Get an API key by sign in here: [https://developer.marvel.com/signup](https://developer.marvel.com/signup)
2. Create a `credentials.js` file inside `src` folder with the following structure:
  ```
  const MARVEL_KEY_PUBLIC = 'YOUR_PUBLIC_KEY_HERE';
  const MARVEL_KEY_PRIVATE = 'YOUR_PRIVATE_KEY_HERE';
  const urlAPI = 'https://gateway.marvel.com:443/v1/public/';

  export { MARVEL_KEY_PUBLIC, MARVEL_KEY_PRIVATE, urlAPI };
  ```
3. Read the terms of use for the Marvel Comics API here: [https://developer.marvel.com/terms](https://developer.marvel.com/terms)
4. Observe the attribution and linking guidelines when displaying data from the API here: [https://developer.marvel.com/documentation/attribution](https://developer.marvel.com/documentation/attribution)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

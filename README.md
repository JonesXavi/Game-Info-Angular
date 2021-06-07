# Angular Series - Games Info App [Demo](https://jonesxavi-game-info-angular.netlify.app/Game-Info-Angular/)


## What ?

Games Info App built using Angular 11 utilizing a public [API](https://rawg.io/apidocs)

## Why ?

To brush up the Angular and get started with Angular 11. To create a public API based App.

## How to use the public API

1. Create an account in `https://rapidapi.com/accujazz/api/rawg-video-games-database/details`
2. Under RAWG Video Games Database page, find Endpoints Tab under which you can find the x-rapidapi-key & x-rapidapi-host to use in httpheaders
3. Goto `https://rawg.io/apidocs`, create an account and get the `API key` to use in params in httpheaders interceptors file.

Or you can directly goto `https://rawg.io/apidocs`, create an account, get the `API key` and use directly like below in service call:

`${env.BASE_URL}/api/games?key=${env.KEY}`
`BASE_URL = 'https://api.rawg.io', KEY = <Your API Key>`

Either way it works!


## Angular Default Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


# StoriesUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



##Stories APP

For the development of Stories APP we have used Angular 16 to build front-end and .Net Core WebAPI for back-end


Front-end code is present in StoriesUI 
Back-end code is present is StoriesAPI


Local Angular App will run on http://localhost:4200/
		It uses API endpoint domain as http://localhost:28889 (my local api endpoint). You can change it in environment.ts file located at src/environment/environment.ts
		example: http://localhost:28889/api/Stories/getallstories/1/20
		
		
## Caching used:
Response caching has been implemented.
It will cache the resposne for 2 minutes.
We cache the data of each page only when it is requested amd will be available in cache for 2 minutes (120 seconds).

Added Swagger to API to call api endpoint for verification


## Local setup:

Clone UI and API code from the respective repository
open UI code in VSCode.
Open terminal window and navigate to StoriesUI folder and run command "npm install" to download all the required packages to run the application.

To run the application execute below command:
ng serve
		
		

		
## Note: Not stories that don't have link will be displayed as bold text in black color.


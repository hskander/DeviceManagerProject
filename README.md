# DeviceManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Install and Test the Project
1. Download the code - Clone the repository or download the zip file
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`
3. Run `json-server --watch db.json` in another command line for the Fake database server Json sever. Navigate to `http://localhost:3000` 
4. Now you can use the Application and test it

## Notes 
* I implemented a dynamic search method that checks all attributes of a device, so you can easily search for a device
* When you click on the map button, the browser redirects to Google Maps
* The List Button refresh the page, you can use it after searching for a device
* All the attributes are required so you can't add a Device when one of the inputs is empty, a required field message will be displayed in this case
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

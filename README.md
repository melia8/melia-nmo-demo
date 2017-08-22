# melia-nmo-demo
This is a demo of the nexmo SMS API

The back end is a simple Spring Boot App.
The front end is an angular2 client, (code located in ngNexmo folder)

This demo sends messages from an angular front end to a persons phone via SMS.

If the receiver replies to the SMS it will appear in the Angular front end chat screen.

For it to work you need to:

1. Add your nexmo details to the Spring Boot application.properties file.

2. Add your web-hook server URL and the number you want to converse with to the angular config-consts.ts file in the root of the angular apps folder

3. Build the Angular app by issuing "ng build' from the ngNexmo folder, (*if building for the first time dont forget to issue a npm install to load the node modules specified in the package.json file*). Once built, copy the contents of the dist folder to Boot app's main/resources/static

4. issue "./gradlew bootRun" from the nexmo-demo folder.



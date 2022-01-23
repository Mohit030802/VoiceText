# JustSpeak 🔊

## Technologies or Languages Used -
- HTML5
- CSS3
- Vanilla JavaScript
- Node JS
- Twilio Sendgrid
- JSPdf
- Docker, kuberneties
- Datree
- Firebase
- Alan-ai
- CIVO
- heroku
```javascript    
let x = "Hello World, ";
console.log( x + "Welcome to this Devops project");
```                                         

## Why I build this?
This is a web application built using speech-recognition and various technologies to solve a real world problem that I encountered.
> **Problems that this app solves:**
> - If someone is not having laptop or PC, then he/she can do assignments easily with this application.
> - If we have to prepare some big documents then they have to type all day and night to compelete the given task, but with this application we can simply complete it in no time by converting our speech to text and thus then downloading the text or pdf.
> - If we have to send our transcript to any person then we can do that easily from one place.
> - A person who doesn't have hands can use it to their respective jobs.

## Workflow
This project is using `Heroku hosting service` and there are two **CI/CD pipelines** 
  - Datree : 
    > To check for kubernetes misconfiguration in `deployment.yaml` and `service.yaml` files.
  - Docker :
    > To check for Dockerfile configuration when we are making any changes to the `master` branch and if everything seems to be okay then it'll run `docker build just-speak .` and push it to DockerHub registery (after maintainer's approval).

After the success build of CI/CD completion the PR will be ready to be merged and if the mainter will merge the PR then it is automated that after merging the PR the changes will be pushed to the dockerhub.
And there is a pipeline to deploy the docker hub image with Heroku. So, it'll be automatically deployed after successful merging. 

### Need Assistance for running this App on your Localhost?
After downloading this project in **ZIP format** or **cloning** using GitHub CLI.
> If you had downloaded this project then make sure you unzip this directory. 
- Make sure you are having `node` installed in your localhost. If not kindly refer to this link <a href="https://nodejs.org/">Download Latest Version form here</a>.
> After instaling `node` you are capable of running a localserver on your *localhost:3000* (by default) 🎉🎉🎉🎉.
- Now, we have to run `npm i` or `npm install`. 
> This will install all the required dependencies and list then inside a *package.json* file. 
> Now we have came to end of the setup and we have to run `npm start` this will spin the server and **You will be redirected to Your Browser at `localhost:3000` where the Website is being hosted**.

### Need Assistance for running this App on your Localhost using Docker🐳? 
> First you have to pull the image from my **Docker Hub** <a href="https://hub.docker.com/repository/docker/codingnightmare/just-speak">registry</a>. 
> Then do the same steps as you do to run docker image.
If you want to run it in one line code then here we go, just copy paste this code 
```
docker run -d -p 3000:3000 codingnightmare/just-speak:v1
```
Then it'll be deployed into your local host port 3000.
> 
```diff
+ console.log("Do share your feedback about this project?");
```

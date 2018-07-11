import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/styles/hljs";

const blogs = [
  {
    url: "expresandfirebase",
    date: "March, 4 2018",
    title: "Hosting your Express server on firebase",
    bodyTop:
      "I discovered Firebase a little less than six months ago and it never ceases to amaze me. I have never looked back, with only a few simple commands you can have your app live and hosted free, without waiting for those pesky dynos. Their free Tier is amazing, and I have yet to pay a dime! Aside from static hosting you can say goodbye to creating your own Database. Their docs are awesome, and Firebase comes prebaked with Authentication saving you tons of time. Okay, you get it, I like Firebase, but what about when you absolutely need your Node.js Express server? Well Firebase thought of that too. Welcome to Firebase Functions! Basically you can create your express server through Functions and deploy this code at the exact same time you deploy your front end through Firebase! Secret Tokens you ask? Why yes, Firebase also thought of that. Below is a super simple express server returning just one route to get you setup.  ",
    body:
      "This write up is assuming you already know how to manuever Firebase with their CLI. If you don't there are tons of great write ups to get you started!",
    body2: "",
    links: [
      "https://codeburst.io/express-js-on-cloud-functions-for-firebase-86ed26f9144c",
      "https://firebase.google.com/docs/functions/config-env"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: require("../../img/blogPics/victoryGraph.png"),
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
        # First you will need to run 
          $ firebase init
          * Select functions and press enter
        
          * This will create a functions directory for you
          
          * At the root of your functions directory
            $ npm install express cors --save

      ## Replace your index.js file with the contents below...

      const functions = require("firebase-functions");
      
      const cors = require("cors");
      const express = require("express");

    
      const app = express();
      
      app.use(cors({ origin: true }));
      
      //We make this so that you dont need to put a / at the end of your requests
      const api = functions.https.onRequest((request, response) => {
        if (!request.path) {
          request.url = "/\${request.url}"; // prepend '/' to keep query params if any
        }
        return app3(request, response);
      });


      app.get("/test", (request, response) => {
        response.send(
          "Hello from Express on Firebase with CORS! No trailing '/' required!"
        );
      });
      
      module.exports = {
        api
      };


      ### Inside your functions directory...
        * $ firebase serve --only functions
        * This will create a local server where you can make calls to your endpoints! 
        * Navigate to the link firebase give you in your terminal at /test and watch the magic happen!
      
      #### Now you can simply run 
        * $ npm run build (or whatever you are using to build for production)
        * $ firebase deploy
      
      Now keep in mind that you need to manage your production and dev environments accordingly because once you deploy your functions with firebase deploy your api route will not be localhost:5xxxx. 
      Heres an example of my production endpoints...

      ##### hosting url = https://reactdatavisualization.firebaseapp.com

      ##### exposed backend functions = https://us-central1-reactdatavisualization.cloudfunctions.net/api3/test

      



  `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
    

                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "reactdatavisualization",
    date: "February, 17 2018",
    title: "Data Visualization In React",
    bodyTop:
      "In todays ecosystem data is everywhere. Companies are run, managed, and destroyed by data. We use it as milestones, to project income, and sometimes data can even destroy us. Today we are going to be doing a quick example of data visualization with React and Victory. I chose not to use d3, while most popular, I personally think their docs are not user friendly. The first time I needed to make a graph with React I was able to follow Victory's tutorial with ease.",
    body:
      "Victory provides a streamlined process to get up and running with any sort of data visualization that you need. There docs are so awesome they even have a FAQ cheat sheet that answered many questions I had myself! Feel free to check it out, the second link below. Not only can you do basic charts with Victory they also have many animations and types of data visualizations that can be used.",
    body2: "",
    links: [
      "http://formidable.com/open-source/victory/docs/",
      "https://formidable.com/open-source/victory/docs/faq/"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    pictures: require("../../img/blogPics/victoryGraph.png"),
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
      # Below is a React Component that you can use to get up and running quickly.

      import React from 'react'
      import ReactDOM from 'react-dom';
      import * as V from 'victory';
      
      // These are straight from Victory's Docs. 
      // Another reason I prefer Victory over d3, Victory is much simpler.
      import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
      

      export default class ComplexBarChart extends React.Component {
          constructor(props) {
              super(props)
              this.state = {
                  data: [],
              }
      
          }
      
          // Make it more fun by smashing a button and watching your amazing chart create art!
          newRandomDataSet = () => {
              let dataArray = []
              for (var i = 0; i < 4; i++) {
                  //need to add plus one otherwise it starts at zero and breaks the padding
                  dataArray.push({ quarter: (i + 1), earnings: Math.floor(Math.random() * 10000) + 1 })
      
              }
              this.setState({ data: dataArray })
          }
      
          render() {
      
              return (

                // Victory Components always scale to their parent element. So in order to resize your chart we need to modify the size of its container. 

                  <div style={{ maxHeight: '250px', maxWidth: '500px' }}>
      
                  // domainPadding will add space to each side of VictoryBar to
                  // prevent it from overlapping the axis
                      <VictoryChart
                          domainPadding={20}
                          theme={VictoryTheme.material}
                      >

                      // tickValues specifies both the number of ticks and where
                      // they are placed on the axis
                          <VictoryAxis
                              tickValues={[1, 2, 3, 4]}
                              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                          />

                          // tickFormat specifies how ticks should be displayed

                          <VictoryAxis
                              dependentAxis
                              tickFormat={(x) => ('$\${x / 100}k')}
                          />
                              
                          <VictoryBar
                              data={this.state.data}
                              x="quarter"
                              y="earnings"
                            />
                        </VictoryChart>

                        <button onClick={this.newRandomDataSet}>New Random data</button>
                  </div >
                        )
                    }
                }



  `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
    Heres a list of some other nifty visualizations Victory has to offer. go check them out!           
        VictoryArea
        VictoryAxis
        VictoryBar
        VictoryCandlestick
        VictoryChart
        VictoryErrorBar
        VictoryGroup
        VictoryLine
        VictoryPie
        VictoryPolarAxis
        VictoryScatter
        VictoryStack
        VictoryVoronoi

                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "onvsologn",
    date: "January, 31 2018",
    title: "O(N) vs OLog(N)",
    bodyTop:
      "In case you haven't heard programmers reference Big O Notation when talking about time complexity of their programs or functions. It is important to understand Big O because it facilitates developers being aware of the efficiency of an algorithm so they can create applications with good performance. Today we are only going to be covering the differences between O(N) and OLog(N). While this difference is slight, it matters. ",
    body:
      "In 2018 we live in a world of infinite data, what used to be simple whiteboarding interview questions has literally become a reality. As technology expands so does data, drones film in 1080p, people expect their Cloud data to be ready yesterday, and more and more people are connecting everyday. Understanding big data is crucial to developing fast, progressive applications.",
    body2: "",
    links: [
      "https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`

# O(N)
// O(N) in short means your program iterations will increase with your data size proportionately (worst case scenario).
// Example.

findIndex = (items, match) => {
  for (let i = 0, i < items.length; i++)
    if (items[i] == match)
      return i;
  return console.log('no match after ' + items.length + ' iterations');
}

# Here you can see that, if 'match' was the second item, there would only be two iterations, not bad.
# But remember we are talking worst case scenario.
# Worst case, would be if our program iterated through every item once, until the end.
# If we had 10 items, it would iterate 10 times, scaling proportionately to our data set.

## OLog(N)
// Instead of looking through items one by one, they split the data, usually in half, only iterating over half every 'split'
// Binary Search Trees are great examples of OLog(N).
// The Below Example is a QuickSort algorithm.
// Here we can see that it technically only has to 'iterate' or 'touch' half the list.

quickSort = (list) => {
  // Only two items, no need to sort
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, i<list.length; i++ ) {
    switch (true) {
      case (list[i] < pivot):
        left.push(list[i]);
        break;
      case (list[i] >= pivot):
        if (list[i])
          right.push(list[i]);
        break;
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
};

quickSort(['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r']);
        => ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]

## In an effort to be comprehensive, here is a merge sort which is also OLog(N)
// Split the array into halves and merge them recursively 
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]





  `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
Nothing to see here.
                 
                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "this",
    date: "January, 28 2018",
    title: "Explain THIS",
    bodyTop:
      'Within Javascript junior developers often find themselves using this a lot. Sorry let me clarify, "this" in relationship to the object! Lets pretend you\'re going to your first interview and you get asked, "Explain the this value in JavaScript! Illustrate your explanation with an example!" I\'ve left a link below to a great site where I first found some awesome interview questions and answers!',
    body:
      "Pretty simple when reading it above here, but the fundamental concept of THIS must be understood in javascript. I have found that this logic plays through even with modern frameworks like React!",
    body2: "",
    links: [
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
# Explain the this value in JavaScript!
## In JavaScript this is a global or function scoped variable.
## When used in global scope, this equals the global object, which is window in the browser.
## When used inside a function, the value of this is dynamically determined when the function is called and its value \n          equals the context of the function.


## EXAMPLE
class firstClass { firstFunction() { return this; } }
class secondClass extends firstClass { }

const d = new secondClass();
console.log(d.firstFunction() === d);
            > true

Here, firstFunction() was inherited with prototypal inheritance from firstClass.When creating the d object using the \n          class (constructor function) secondClass, any method of firstClass, which is firstFunction(), or just returning itself \n           gets this assigned to d.So when calling firstFunction on d, it returns itself, which is d!


  `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
Nothing to see here.
                 
                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "graphqlexpressdemo",
    date: "January, 25 2018",
    title: "Setting up GraphQL and Express",
    bodyTop:
      "GraphQL is gaining tons of traction in 2018. Today we will setup a simple Database with GraphQL, Node, more specifically Express. ",
    body:
      "It is easy to see just how awesome graphql can be. Easy to use, fast, and simple to understand relationships.",
    body2:
      "From this write up you can easily implement a user object, and make a request from your terminal to view it! More to come.",
    links: ["http://graphql.org/code/#javascript"],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
# First things first, create a directory for this project, and create a server.js file within.
$ mkdir graphqlexpressdemo
$ cd graphqlexpressdemo
$ touch server.js

# Next we need to install some packages, this is straight from graphql docs...
$ npm install express express - graphql graphql

# Now within server.js we will start with the basic hello world from their docs.
// server.js
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// If using babel
// import express from 'express'
// import graphqlHTTP from 'express-graphql'
// import buildSchema from 'graphql'

var schema = buildSchema(\`
              type Query {
                hello: String
              }
            \`);

            var root = { hello: () => 'Hello world!' };

            var app = express();
            app.use('/graphql', graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true,
            }));
            app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

          ## Now navigate to localhost:4000/graphql to view the awesome tutorial.
          ## In this tutorial you can delete all the info and make practice queries to see how graphql packages and sends data, great info!

          # Now we want to start making requests to our server, lets use old school curl.

          $ curl -X POST \
            -H "Content-Type: application/json" \
            -d '{"query": "{ hello }"}' \
            http://localhost:4000/graphql

          ## You should have received a response like this!
          {"data":{"hello":"Hello world!"}}

          ### Awesome! We made a request to our local server, set headers to application/json, then requested a query for our hello object. 
    
    `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
               Nothing to see here.
                 
                `}}
      </SyntaxHighlighter>
    )
  },

  {
    url: "deployingdockerimagetoebs",
    date: "January, 23 2018",
    title: "Deploying Local Docker Image to AWS Elastic Beanstalk",
    bodyTop:
      "In this segment we are going to take our docker image, the one you can see by, $ docker images and hosting it on EBS so the whole world can see your beautiful Docker web application. If you skipped ahead remember you will need an AWS account for this.",
    body:
      "EBS is doing a lot of work for us, not only is it creating a container for our docker image but also automatically load balancing and adjusting performance. It is amazing how far cloud computing has come. EBS is a suitable replacement for cloud hosting like Heroku because EBS also hosts regular build .zip files. We could have used webpack to build a folder, zip it, then upload that instead of the Dockerrun.aws.json and all would have been the same!",
    body2:
      "In this specific example I actually chose a Docker Image that I had built, and then pulled down to my local machine from the Docker cloud Website. I manually linked this to my github repository, master branch. I did this, so anytime I update my master, my image gets rebuilt with the changes. Please note, while the Docker cloud will auto rebuilt on changes to master, based on this write up, you still need to $ docker pull image/name, then reupload Dockerrun.aws.json to your EBS console. In case you lost it, the second link below will direct you to your Docker Account, which you can then create a new repository, connecting it to Github!",
    links: [
      "https://console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/gettingStarted",
      "https://cloud.docker.com/swarm/gavinthomas1192/repository/docker/gavinthomas1192/portfolio/general"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
          # Head over to the first link and 'Create new application' in the top right!

          ## Name your application, describe your application.

          ### It should now say 'No environments currently exist for this application. Create one now.'

          #### Click 'Web Server Environment'

          ##### Adjust any information you see fit here, you should change your url to something you can easily share to friends.
          ##### Head down to 'Base Configuration' and choose 'Docker' from the platform drop down.

          # Now you will need to create a Dockerrun.aws.json file.
            $ touch Dockerrun.aws.json

          # The contents should look like this.
          // Dockerrun.aws.json
          {
            "AWSEBDockerrunVersion": "1",
            "Image": {
              "Name": "your/image/name",
              "Update": "true"
            },
            "Ports": [
              {
                "ContainerPort": "5000"
              }
            ],
            "Logging": "/var/log/nginx"
          }

          ## Now choose 'upload' and upload this Dockerrun.aws.json file. 

          ### Now click finish and wait for your EBS to finish!

          ### During the build process, heres my entire log, just for reference it took almost 10 minutes!
          2:05pm
          Environment health has transitioned from Pending to Ok. Initialization completed 38 seconds ago and took 6 minutes.
          2:04pm
          Docker container 4135fe21dbc7 is running aws_beanstalk/current-app.
          2:04pm
          Successfully built aws_beanstalk/staging-app
          2:03pm
          Successfully pulled gavinthomas1192/portfolio:latest
          2:00pm
          Added instance [i-088a45e926984e088] to your environment.
          1:59pm
          Waiting for EC2 instances to launch. This may take a few minutes.
          1:58pm
          Created EIP: 34.235.218.13
          1:58pm
          Created security group named:
          awseb-e-fdvvrrxnzf-stack-AWSEBSecurityGroup-5MZ284MMZS9F
          1:58pm
          Environment health has transitioned to Pending. Initialization in progress (running for 8 seconds). There are no instances.
          1:57pm
          Using elasticbeanstalk-us-east-1-757109747137 as Amazon S3 storage bucket for environment data.
          1:57pm
          createEnvironment is starting.

          #### My finished URL http://gthomas.us-east-1.elasticbeanstalk.com/

          

    
    `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
               Nothing to see here.
                 
                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "hostingdockerimageonaws",
    date: "January, 22 2018",
    title: "Creating AWS EC2 Instance",
    bodyTop:
      "This will be a follow up from my post on creating a docker image from an existing React Application. If you haven't read that yet, go read it! First you will need to create an AWS account, a credit card is needed to create your account. I have had my account for over 8 months and have yet to be charged for anything, links to sign up below. After creating an AWS account you will be on your home screen, go ahead and search ec2 within the 'services' search bar, if you're lazy, it's the second link down below. Follow along in the code for the rest of the steps.",
    body:
      "Now you have your docker image hosted on AWS ec2. Next time we will cover automation of this process and ECS hosting! That's the fun stuff!",
    // body2: '',
    links: [
      "https://aws.amazon.com/console/",
      "https://console.aws.amazon.com/ec2/v2/home?region=us-east-1"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More supplemental information",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
          # On the EC2 page, click the blue 'launch instance' button. 

          ## There a lot of options here on this next page, for now just choose the default AMI, Amazon Machine Image
          ## Be sure to click 'configure next steps' at the bottom rather then 'preview and launch'

          ### You can keep clicking next steps (reviewing all the options) but stop at security so we can configure HTTP/HTTPS
          ### On the left hand side click 'Add rule'
          ### Select HTTP from the drop down
          ### Select Review and Launch at the bottom Right!

          #### On the “Review Instance Launch” page, click the blue “Launch” button. This will pop up a modal that asks you to pick a Key Pair. A key pair consists of a public key and a private key file that you can use to connect to your EC2 Instance over SSH. Select “create a new key pair” from the drop-down, give the Key Pair a name like my-ec2-key-pair, and click “Download Key Pair”
          ####Save the Key Pair .pem file to a safe and accessible location on your computer (once you close this modal, you will never be able to download this .pem file again, so make sure to save it!). Now, click the blue “Launch Instances” button in the bottom right of the modal. This takes you to a “Launch Status” page. Click the blue “View Instances” button in the bottom right of this page, and you’ll be taken to the EC2 Instances page.

          //Congratulations! You just setup your first of many EC2 instances!

          # Remember that .pen file you downloaded? Navigate to that directory now! I suggest you just put this inside your project directory and don't forget to .gitignore!

          $ cd ~/my-aws-key-pairs
          $ chmod 400 my-ec2-key-pair.pem
          $ ssh -i my-ec2-key-pair.pem ec2-user@<EC2-INSTANCE-PUBLIC-IP-ADDRESS>

          ## If you did everything correctly you should see this super cool terminal picture
            __|  __|_  )
            _|  (     /   Amazon Linux AMI
          ___|\___|___|

          ### Your bash will look different, but now we need to update and install docker, not the same docker CLI you installed in the last post. 
          [ec2-user]$ sudo yum update -y
          [ec2-user]$ sudo yum install -y docker
          [ec2-user]$ sudo service docker start

          #### Next we need to make it so we don't need to type sudo each time, then restart the instance
          [ec2-user]$ sudo usermod -a -G docker ec2-user
          [ec2-user]$ exit
          $ ssh -i my-ec2-key-pair.pem ec2-user@<EC2-INSTANCE-PUBLIC-IP-ADDRESS>
          [ec2-user]$ docker info

          #### Finally we need to spin up an instance of our image
          [ec2-user]$ docker run -d -p 80:5000 your-docker-image-we-made-last-time

          #### The -p 80:5000 flag in the command above tells Docker to link port 5000 on the Docker container to port 80 on the EC Instance. 
          #### Since the Security Group for this EC2 Instance exposed port 80 to the world, you can also connect to the public IP address of your EC2 Instance from any web browser.
          #### For myself I would put 54.89.49.7 in my browser.

          #CONGRATS! You did it.

    
    `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
               Nothing to see here.
                 
                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "CreatingProductionDockerImage",
    date: "January, 21 2018",
    title: "Create production Docker image from existing React application.",
    bodyTop:
      "It's 2018, you can't go a single day without reading or hearing about AWS and Docker. To those who are already familiar with Docker, this post might not be for you. However, If you want to learn more about Docker, and even deploy your own production front end React App then keep reading. First thing, which I won't be covering is make sure to install the Docker CLI, the basics behind what docker is and why you should use it, links at bottom. Most of the reading will be within the code block, because you know, #keepinItNerdy.",
    body:
      "The first time I did this process I encountered many errors, most, if not all were easily fixed by actually reading the error stack and completing the tasks it tells you to do. Seriously, read the errors. My main problem was with node-sass and different versions of Node throughout. If you encounter this problem you might need to add $ RUN npm rebuild node-sass --force to your Dockerfile. Again, this will be pretty clear in the error stack on build failure.",
    body2:
      "So you have a nifty Docker image that can run on localhost... what now? You guessed it, AWS. In the next post I will be covering how to push this image to AWS EC2. If you want to get a head start the second link down below will head you in the right direction.",
    links: [
      "https://docs.docker.com/engine/installation/",
      "https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html",
      "https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html",
      "https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/#use-multi-stage-builds"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "More Docker Commands",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
        //Create a Dockerfile at the root of your existing React Project. 
        //You can think of the Dockerfile like a large script in your package.json that's in charge of running a series of commands to build your image.
          $ touch Dockerfile

        // The contents of your Dockerfile, read more below.
          # You should always specify a full version here to ensure all of your developers are running the same version of Node.
          FROM node:8.0.0
          
          # Override the base log level (info).
          ENV NPM_CONFIG_LOGLEVEL warn
          # Install and configure 'serve'.
          RUN npm install -g serve
          # If you specified a different folder to put your build files into replace 'dist' below with your folder.
          CMD serve -s dist
          EXPOSE 5000
          
          # Install all dependencies of the current project.
          COPY package.json package.json
          RUN npm install
          
          # Copy all local files into the image.
          COPY . .
          
          # Build for production.
          RUN npm run build 
        
        // Lets create a .dockerfileignore to ignore our large node_modules
          $ touch .dockerfileignore
        // The contents of .dockerfileignore
          node_modules

        // From here we can build our docker image navigate into the directory of your React project
          $ docker build -t name-of-your-project .
        // This will take a while. I had to debug several errors through the process. #actuallyReadYourError

        // To verify image is good to go...
          $ docker run -p 5000:5000 name-of-your-project
        // Now you can navigate to localhost:5000 to see your new production image! 

        // If you create a docker cloud account, which you should, you can connect your github repo for automatic builds!
        // Once you set this up, and the first build finishes, you can share your web app with anyone who has docker! 
        // All they have to do is...
          $ docker run -p 8888:5000 gavinthomas1192/portfolio:latest
        // This is of course to preview my app from your computer!


    
    `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
                // List all images, this is nifty to see just how many GB's images have consumed!
                  $ docker images

                // Delete image
                  $ docker rmi --force image-name-exactly-how-it-was-listed

                // List all docker containers
                  $ docker container ls
                
                // Stop running container
                  $ docker container container-id-here stop
                 
                `}}
      </SyntaxHighlighter>
    )
  },
  {
    url: "typeofobject",
    date: "January, 20 2018",
    title: "Time to brush up on typeof...",
    bodyTop: '"Determine whether a variable is an object or not..."',
    body:
      'Immediately the quick answer would be simply using typeof to check whether the variable is an object. But wait, if you brush up on your typeof knowledge over at MDN, you will realize typeof(null) will also return "object"!',
    body2:
      "To fix this problem we have to also make sure our variable isn't null first! We can quickly add validation to our if statement as seen above in the final answer. While this function is simple, it's a good bush up for those doing javascript challenges not to be overloooked.",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // pictures: [],
    codeAnswerText: "Show me the answer!",
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
    
    // What's wrong with this answer, anything?
    {typeof cow === 'object' ? console.log('moooo') : console.log('Cow is not an object')}
    
    
    `}}
      </SyntaxHighlighter>
    ),
    codeAnswer: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
                  // typeof null will also return 'object'..
                  // But wait, not so fast typeof...
                  
                  // To fix this we simply check if the variable is null first!
                  
                  {cow !== null && typeof cow === 'object' ? console.log('moooo') : console.log('Cow is not an object')}
                  
                  // In case you decided you needed to brush up what typeof will return...
                  Undefined -"undefined"
                  Null -"object" 
                  NaN -"number"
                  Infinity -"number"
                  (typeof 1) -"string"
                  New Date -"object"
                  Boolean-"boolean"
                  Number -"number"
                  String -"string"
                  Symbol - (new in ECMAScript 2015)	"symbol"
                `}}
      </SyntaxHighlighter>
    )
  },

  {
    url: "asyncawait",
    date: "January, 19 2018",
    title: "A long Await, Async",
    bodyTop:
      "Long story short, Async Await is a win win for typing and reading.",
    body:
      "Surely most of you have heard of Async Await already. However I, myself haven't taken the neccesarry time to fully implement it into my existing projects. Async await now makes the once, neverending nesting... a much cleaner, more readable code base.",
    body2:
      "I have found using AA with apps using Firebase as a backend has been incredibly successful. I no longer have to use complicated deep nesting while checking the who, what, when, and how at the end of my designated routes.",
    links: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
    ],
    media:
      "http://www.zsoltnagy.eu/javascript-theory-quiz-crack-the-es6-interview/?utm_content=bufferf3094&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer",
    // codeAnswerText: '',
    // pictures: [],
    code: (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {`
        const makeRequest = () => {
            return promise1()
              .then(value1 => {
                // do something
                return Promise.all([value1, promise2(value1)])
              })
              .then(([value1, value2]) => {
                // do something          
                return promise3(value1, value2)
              })
          }
          //Now with Async await... we can do this...
          const makeRequest = async () => {
            const value1 = await promise1()
            const value2 = await promise2(value1)
            return promise3(value1, value2)
          }

          // To starting using Async Await with babel (es2015) and webpack...
           {
            "presets": ["es2015"],
            "plugins": ["transform-async-to-generator"]
          }

          // Don't forget to install the npm package!
          $ npm install babel-plugin-transform-async-to-generator --save


          `}}
      </SyntaxHighlighter>
    )
    // codeAnswer: <SyntaxHighlighter language='javascript' style={atomOneDark}>{`
    //     console.log('Nothing to see here')
    //   `}}</SyntaxHighlighter>,
  }
];

export default blogs;

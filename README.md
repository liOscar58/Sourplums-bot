
![Logo](https://i.imgur.com/rQ06RyU.png)


# SourPlums Discord Bot
![roadmap](https://i.imgur.com/4GJYKPx.png)

# Introduction
SourPlums is a command driven Discord bot written in Python. It makes use of a Docker Container for deployment onto a AWS Lambda function for a 24/7 serveless bot. Discord sends an API post call towards the Lambda function that then acts and returns a response. Commands are resigestered with Python so that users can view a list of commands directly within Discord chat feature.

Replace with your own Discord app and bot keys and tokens before building.

# Setup

It is recommened to setup the project in a virtual env
```
pip install virtualenv
python3.8 -m venv env
```
Then install the dependencies in requirements.txt
```
pip install -r commands/requirements.txt
```
Make sure to r egister the commands
```
pip install -r commands/requirements.txt
```
# Depolyment Using AWS CLI

Bootstrap the AWS CDK 
```
cdk bootstrap
```
Then once everything checks out you can deploy. Make sure your [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) is up-to-date and installed
```
cdk deploy
```



## 🔗 Links
You can invite the bot here through its [website](https://sourplums-website-live.vercel.app/), also created  painstakingly with pure HTML, CSS and javascipt.
# About 

Ever since Discord became widely popular around the beginnging of covid I've always wanted to create an automated bot for moderation and gimmiky use for my own Discord server. The thought of using a device such as a Raspberry Pi was my first idea. 

Its not until my Software Design & Architecture class that I really understood what applications built on the cloud really offered. I did poorly in the class to be honest since there was no application or motive for the students to do self learning. It felt like a trudge of learning concepts that I would not really apply with a final project that consited of building a meal application.

Only then when I started to play around with AWS Lambda functions that I became interested in the possibilities. Having a command driven Discord bot that responds only when needed with minimal uptime and moderation fueled my curiosity even further. 

Throughout this project I loved how not only do I get to have my own personal creation within my online space, I also can interact with it whenever, wherever I am. The simplicity of a Lambda function being event based meant that my bot doesn't need to scan every single message in a Discord server to check if it was a command. By using AWS Lambda instead of an EC2 instance I save the headache of possbilities of crazy uptime costs with EC2. 

Your solo developer and student [Oscar Li](https://github.com/liOscar58).


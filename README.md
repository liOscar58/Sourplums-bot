
![Logo](https://i.imgur.com/rQ06RyU.png)


# SourPlums Discord Bot

SourPlums is a command driven Discord bot written in Python. It makes use of a Docker Container for deployment onto a AWS Lambda function for a 24/7 serveless bot.

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
# Depolyment

Bootstrap the AWS CDK 
```
cdk bootstrap
```
Then once everything checks out you can deploy. Make sure your [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) is up-to-date and installed
```
cdk deploy
```



## 🔗 Links
You can invite the bot here through its [website](https://sourplums-website-live.vercel.app/), also created by [me](https://github.com/liOscar58).



## DeFil

DeFil (Defamation Filter) is a Chrome extension designed to classify Indonesian language tweets containing potentially reputation-damaging content on the social media platform Twitter. Leveraging the Support Vector Machine (SVM) machine learning model, this extension aims to identify and flag tweets that may contain defamatory or damaging language targeting individuals or entities.

Here is a video demonstration of the extension:


https://github.com/fatwaabdusyukur/defil/assets/89562555/689cc1ff-f13c-4747-8bec-ff74f93cf48f

## Features

- Features for filtering personal tweets: This feature is used to ensure that the tweet that will be posted is not a tweet that contains defamation.
- Feature to filter other people's tweets: This feature is used to check whether a tweet posted by someone else is a tweet that contains defamation or not. This feature can be activated by selecting the text to be checked then opening the context menu in the browser and selecting the tweet filter menu.

## Installation Method

Because this extension was created using two programming languages, namely JavaScript (NodeJS) for the front-end and Python for the back-end. So you must ensure that both languages are installed on the computer.

Here are the steps to install this application:

1. Step 1: install all necessary dependencies with npm (for javascript/nodejs) and pip (for python).
```
npm install
```
```
pip install flask flask_cors scikit_learn
```
2. Step 2: please run the server located in the backend folder.
```
python server.py
```
3. Step 3: please run the project in production mode with npm.
```
npm run prod
```
4. Step 4: extract the build results then add the folder to the chrome extension by going to the extension settings then activating developer mode then load the folder.

## Licence

This application is licensed under the [MIT License](LICENSE).

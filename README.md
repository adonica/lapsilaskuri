# Muksumuistio

## Description

This is a simple application for a daycare center to mark whether a child is present or not. In the application, you can add a new child, edit the current name or delete it. When you tap a child's name in the list, its background turns green, indicating that the child is present. A second tap changes the color to orange, indicating that the child is not present. The total number of children present is displayed at the top of the screen.

## Screenshots

![Main-screen](/images/muksumuistio_frontpage.png)

![Edit-screen](/images/muksumuistio_edit.png)

![Login/Add new name-screen](/images/muksumuistio_login.png)

## Tech/Framework Used

Built with

  * React(frontend)
  * HTML, CSS, JavaScript(frontend)
  * Cloud Firestore(backend database)

## Getting Started

To run this project, you need to provide your Firebase configuration details. Follow these steps:

1. Rename the `.env.example` file to `.env`.

2. Add your Firebase configuration values to the .env file:
```
REACT_APP_FIREBASE_API_KEY="your-api-key"
REACT_APP_FIREBASE_AUTH_DOMAIN="your-auth-domain"
REACT_APP_FIREBASE_URL="your-project-url"
REACT_APP_FIREBASE_PROJECT_ID="your-project-id"
REACT_APP_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
REACT_APP_FIREBASE_APP_ID="your-app-id"
```
3. Install dependencies and start the project.
In the root folder of project directory:
```
yarn install
yarn start
```

It runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License:

#### MIT License

Copyright (c) 2024 Tanja Aittamäki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

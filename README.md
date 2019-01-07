# OPTUS CMS - Frontend Module
This respository hosts the codebase for the OPTUS CMS Frontend.

**Folder Structure**
- ```src``` - Contains the codebase for the development code.
- ```build``` - Contains the codebase for the deployment code.
- ```src/components``` - Handles components of the Project.
- ```src/services``` - Handles Web API calls of the Project.
- ```src/graphQL``` - Handles Web API calls of the Project.

**Prerequisites**
- ```Node``` - Cross-platform runtime environment for developing server-side and networking applications.
- ```YARN``` - Used to handle packages.
- ```CircleCI CLI``` - Used to handle continous integration and deployment.

**Dependencies**
- ```react-apollo``` - Used to handle graphQL API call.
- ```aws-appsync-react``` - Used to handle user login via AWS user pools methods.
- ```Ant Design``` - Optus CMS app uses ant designs for creating UI components. Antd provides a lot of react components which can be modified to a custom UI. Antd provides UI grid system classes too.
Link: https://ant.design/
- ```react-styleguidist``` - React Styleguidist is a component development environment with reloaded dev server and a living style guide. It is used for component development in Optus CMS app.
Link: https://github.com/styleguidist/react-styleguidist 
- ```eslint-plugin-react``` - It is used to set coding rules which helps in reducing bugs and makes the code from different contributors, consistent.
Link:https://www.npmjs.com/package/eslint-plugin-react

**Starting Local Dev Server**
- Run ``$yarn install`` inside the root directory (First time only)
- Run ``$yarn start``

**Running test cases**
- Run ``$yarn test`` inside the root directory

**Starting Documentation Server**
- Run ``$yarn start:documentation-server``

**Build**
- Run ``$yarn build``

**Further Reading**
- Component level documentation/comments are added inline with source code files.

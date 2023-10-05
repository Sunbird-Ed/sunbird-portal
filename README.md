# sunbird-portal

[![Circle CI - master branch](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-portal/tree/master.svg?style=svg)](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-portal/tree/master.svg?style=svg)
[![Circle CI Badge](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-portal.svg?style=shield)]((https://circleci.com/gh/Sunbird-Ed/SunbirdEd-portal.svg?style=shield))
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-portal&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-portal)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-portal&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-portal)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-portal&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-portal)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-portal&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-portal)

---

## What is Sunbird?
[Sunbird](http://sunbird.org) is a next-generation scalable open-source learning solution for teachers and tutors. Built for the 21st century with [state-of-the-art technology](http://www.sunbird.org/architecture/views/physical/), Sunbird runs natively in [cloud/mobile environments](http://www.sunbird.org/features/). The [open-source governance](LICENSE) of Sunbird allows a massive community of nation-builders to co-create and extend the solution in novel ways.

## What is the project mission?
Project Sunbird has a mission to improve learning outcomes for 200 million children across India. This is a multi-dimensional problem unique to the multi-lingual offline population of India (and other developing countries). It's not a problem of any single organization or stakeholder and it cannot be realistically addressed by individual effort. 

Project Sunbird is an [open, iterative and collaborative](http://www.sunbird.org/participate/) approach to bring together the best minds in pursuit of this audacious goal.

## What is the Sunbird portal?
The Sunbird portal is the browser-based interface for the Sunbird application stack. It provides a web-app through which all functionality of Sunbird can be accessed.

## Getting started
To get started with the Sunbird portal, please try out our cloud-based demo site at: https://staging.open-sunbird.org/

---

## Installing Sunbird Portal

Installing Sunbird requires two primary software components:

- Sunbird portal or web application
- Sunbird services stack or the backend API interface

## Table of contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running Application](#running-application)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Dependencies List](#dependencies-list)
---

### Prerequisites

<table>
  <tr>
    <td colspan="2"><b>System Requirements</b></td>
  </tr>
  <tr>
    <td><b>Operating System</b></td>
    <td>Windows 7 and above/4.2 Mac OS X 10.0 and above/Linux</td>
  </tr>
  <tr>
    <td><b>RAM</b></td>
    <td>> 16 Gb (Minimum 8Gb)</td>
  </tr>
  <tr>
    <td><b>CPU</b></td>
    <td>2 cores, > 2 GHz</td>
  </tr>
</table>


| Software dependencies |  |
| :--- | ------- |
| **[Node](https://nodejs.org/en/download/)** | > 16.19.x (Install the latest release of LTS version) |
| **[Angular CLI](https://angular.io/cli#installing-angular-cli)** | > 14.x.x (Install the latest Angular CLI version) |
| **[yarn](https://classic.yarnpkg.com/en/)** | Latest version of yarn: `npm install --global yarn` |
| **[nodemon](https://www.npmjs.com/package/nodemon)** | Latest version  of nodemon: `npm install -g nodemon` |


### Project Setup

1. Clone project

    ```console
    git clone https://github.com/Sunbird-Ed/SunbirdEd-portal.git
    ```

    > ***Note***: Stable versions of the sunbird portal are available via tags for each release, and the master branch contains latest stable release. For latest stable release [refer](https://github.com/Sunbird-Ed/SunbirdEd-portal/branches)

2. Install required dependencies

    1. Sunbird portal or web application

        1. $ cd {PROJECT-FOLDER}/src/app/client
        2. $ yarn install

    2. Sunbird services stack or the backend API interface

        1. $ cd {PROJECT-FOLDER}/src/app
        2. $ yarn install

3. Configuring the Environment and Services Stack

    > Configure the following system environment variables in the terminal which you have opened

          | Environment Variable      |  Value  | Data Type |
          | :------------------------ | ------- | --------- |
          |  sunbird_environment      | local   |   string  |
          |  sunbird_instance         | sunbird |   string  |
          |  sunbird_default_channel  | sunbird |   string  |
          |  sunbird_default_tenant   | sunbird |   string  |

    > The initialization of these environmental variables can take place in a common place like in your **.bashrc** or **.bash_profile**
    

4. Edit the Application Configuration
    > Open `<PROJECT-FOLDER>/src/app/helpers/mandatoryEnv.js` in any available text editor with the below keys along with the values as per the infra
                                                                                                                                                  
          |       Variable Name                     |                   Description                                       |
          | :-------------------------------------- |---------------------------------------------------------------------|
          |  sunbird_anonymous_register_token       |   Token to register anonymous device                                |                                  
          |  sunbird_anonymous_default_token        |   Fallback token for device register API for `anonymous` users      |                                                           
          |  sunbird_loggedin_device_register_api   |   Kong End Point for Logged Users                                   |                               
          |  sunbird_logged_default_token           |   Fallback token for device register API for `logged-in` users      |                                                         
          |  sunbird_loggedin_register_token        |   Device register API for logged-in users                           | 
          |  cloud_private_storage_secret           |   To set the Cloud Account Key                                      |

    > For further environment variable reference refer to this confluence wiki link: [https://project-sunbird.atlassian.net/wiki/spaces/SP/pages/3353378817/Portal+-+Min+environment+variables](https://project-sunbird.atlassian.net/wiki/spaces/SP/pages/3353378817/Portal+-+Min+environment+variables)

    > Once the file is updated with appropriate values, then you can proceed with running the application

### Running Application

1. Sunbird portal or web application

    1. Run the following command in the **{PROJECT-FOLDER}/src/app/client** folder
    2. $ ng build --watch=true
    3. Wait for the build process to complete before proceeding to the next step

2. Sunbird services stack or the backend API interface

    1. Run the following command in the **{PROJECT-FOLDER}/src/app** folder
    2. $ npm run server

3. The local HTTP server is launched at `http://localhost:3000`

### Project Structure

    .
    ├── Sunbirded-portal                                            
    |   ├── /.circleci                           # 
    │   |   └── config.yml                       # Circleci Configuration file
    |   ├── /src/app                             # Sunbird portal or web application
    │   |   ├── /client                          # -|-
    │   |   |    └── src                         # -|-
    │   |   ├── /helpers                         # Helpers and Service file
    │   |   ├── /libs                            # Sunbird utilities
    │   |   ├── /proxy                           # Redirection to respective services
    │   |   ├── /resourcebundles                 # Language resources
    │   |   ├── /routes                          # Sunbird Backend Routes
    │   |   ├── /sunbird-plugins                 # Sunbird plugins for editors
    │   |   ├── /tests                           # Test case scripts for helpers and routes
    │   |   ├── framework.config.js              # Default framework configuration
    │   |   ├── gulp-tenant.js                   # -|-
    │   |   ├── gulpfile.js                      # Gulp build configuration
    │   |   ├── package.json                     # Contains Node packages as specified as dependencies in package.json
    │   |   └── server.js                        # Main application program file / entry file for Sunbird services stack or the backend API interface
    └───└── .gitignore                           # git configuration to ignore some files and folder

### Testing

1. Sunbird portal or web application

        1. $ cd {PROJECT-FOLDER}/src/app/client
        2. $ npm run test
        3. With Coverage $ npm run test-coverage

2. Sunbird services stack or the backend API interface

        1. $ cd {PROJECT-FOLDER}/src/app
        2. $ npm run backend-test
        3. With Coverage $ npm run backend-test-with-coverage


### Dependencies list

<details>
  <summary>Portal - Frontend</summary>
</details>

| Plugin Name                                                                                                  	| Plugin Repository                                                	| npm version 	| NG Version 	|
|--------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------	|-------------	|------------	|
| [@project-sunbird/chatbot-client](https://www.npmjs.com/package/@project-sunbird/chatbot-client)             	| https://github.com/project-sunbird/sunbird-bot-client            	| 4.0.0       	| NG 13      	|
| [@project-sunbird/common-consumption](https://www.npmjs.com/package/@project-sunbird/common-consumption)     	| https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents 	| 6.0.0      	| NG 13      	|
| [@project-sunbird/common-form-elements-full](https://www.npmjs.com/package/@project-sunbird/common-form-elements-full) 	| https://github.com/Sunbird-Ed/SunbirdEd-forms                    	| 6.0.0       	| NG 14      	|
| [@project-sunbird/sb-content-section](https://www.npmjs.com/package/@project-sunbird/sb-content-section)     	| https://github.com/Sunbird-Ed/sb-content-module                  	| 6.0.0       	| NG 13      	|
| [@project-sunbird/sb-notification](https://www.npmjs.com/package/@project-sunbird/sb-notification)           	| https://github.com/Sunbird-Ed/sb-notification                    	| 6.0.0       	| NG 14      	|
| [@shikshalokam/sl-questionnaire](https://www.npmjs.com/package/@shikshalokam/sl-questionnaire)           	    | https://github.com/shikshalokam/sl-questionnaire-components       | 2.3.0       	| NG 12      	|
| [@shikshalokam/sl-reports-library](https://www.npmjs.com/package/@shikshalokam/sl-reports-library)           	| https://github.com/shikshalokam/sl-reports-library                | 3.0.1       	| NG 14      	|


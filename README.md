
# EuropassParser

## Description
The Europass CV helps users to present their skills and qualifications effectively and clearly. Any user can create a CV online here. 

The Europass Parser Javascript Library gives the possibility to developers to parse quickly into their HTML forms a Europass PDF+XML CV created from users 
through the Europass site. 

More information about the Europass CV Schema and resources about Europass REST services can be found at the Europass Interoperability site.

## Getting Europass Parser Javascript Library

There are multiple ways of getting europass-parser.js

* ### Via NPM:
```
npm install --save europass-parser
```
ES5 
```
var EuropassParser = require('europass-parser');
EuropassParser(file);
```
ES6
``` 
import * as EuropassParser form 'europass-parser';
EuropassParser(file);
```
* ### Via Download:

click  [here](https://github.com/europass/europasscv-parser-js/releases/download/1.0.2/europass-parser.zip)  to download Europass Parser Javascript Library Unzip the folder and include scripts inside into your project

    <script src="path/to/europass-config.js"> </script>  
    <script src="path/to/europass-parser.js"> </script>  
    <script>  
      // When you get the Europass CV (PDF+XML) file from a user pass it to the library  
      EuropassParser(file);  
    </script>

 * ### Compile from sources:
	  -   Clone this repository
	  -   cd into the repository folder
	  -   ``` npm install && npm run build ```
      -   doc folder is generated containing the europass-parser.js and europass-config.js



## Getting Started

-   europass-config.js includes all the available Europass Schema keys than can be parsed into an html form. For example in the following line
    ```
    ...  
    { 'original': 'SkillsPassport.LearnerInfo.Identification.PersonName.FirstName', 'replace': 'name', 'enabled': true},  
    ...
    ```
    -   The key  **original**  indicates the absolute path to the Europass CV JSON Schema in dot annotation style
    -   The key  **replace**  is the name you have declared in the specific input filed of yout own HTML form
    -   The key  **enabled**  gives extra flexibility to the developer in case a form field should not be populated from Europass CV data.
-   **europass-parser.js**  is the library that takes as input the configuration file and fills the html elements.

## Events
Some sections, such as Work Experience, Education, Achievemts, Languages, Skills, have more than one Object inside. For these sections, the corresponing HTML elements need to be populated by the developer for the Europass Parser to be able to fill them.

The events below inform the developer of the number of Objects for each Section that exists inside Europass CV data.

-   Work Experience records  **'work_length'**
-   Education records  **'education_length'**
-   Achievements records  **'achievements_length'**
-   Mother tongues records  **'mother_tongues_length'**
-   Foreign languages records  **'foreign_languages'**
-   Driving licenses records  **'driving_length'**

For these sections  **europass-config.js**  contains an extra key the  **suffix**
```
...  
{ 'original': 'SkillsPassport.LearnerInfo.WorkExperience.Position.Label', 'replace': 'work_experience_title', 'suffix': '_', 'enabled': true}  
...
```
example
```
document.addEventListener('work_length', function (event) {  
 var number_of_work_experiences = event.detail;  
 /*  
  Create here the corresponding html fields  
 */  
});
```
The suffix should be used as follows
```
<input name="work_experience_title"> </input>  
...  
<!-- The html below should be generated from the developer if does not already exists. -->  
<input name="work_experience_title_1"> </input>
```
This way the Europass Parser Javascript Library finds the available fields to fill in.

**all the html elements that are to be fulfilled from the library must at least be created at the time when the event is fired.**

Finished parsing event.

-   Finishing parsing Event 'EuropassParser_finished'

### Extras

-   Usage with React.js
    -   Install Europass Parser Javascript Library through npm
    -   Import the library and the config into the component  
	       ```
        //Other React Imports  
        import EuropassParser from 'europass-parser';  
        import EuropassParserConfig from './config';
        ```
          
        **Add in the React constructor**  
        ```
        window.EuropassParserConfig = EuropassParserConfig;
        ```
    -   Use the library following the get started instructions.
-   Usage with Angular 4+
    -   install Europass Parser Javascript Library through npm
    -   add in .angular-cli.json file in scripts  
        ```
        "../node_modules/europass-parser/build/config.js"
        ```
    -   add the following into typings.d.ts  
        ```
        declare module 'europass-parser'
        ```
    -   add it into the components imports  
        ```
        import * as EuropassParser from 'europass-parser';
        ```
    -   Use the library following the get started instructions.

#### Available demo can be found [here](https://europass.github.io/europasscv-parser-js/)

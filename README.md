# EuropassParser

## Install
```
npm install --save europass-parser
```
A tool to parse Europass CV Data into form fields

Include library to your project and match in the config.js the values with the corresponding form field's names
Include also config.js into your project

## Initialise EuropassParser with the below command
```
EuropassParser(file)
```
file is the result from the `input type="file"`
## Events
Some sections have more than one Object inside, such as Work Experience, Education, Achievemts, Languages, Skills, you need to populate the corresponing html elements, so to be abel the Parser to fill them 
Alse there is triggered an Event to notify the Developer that the parsing has finished.

* Work Experience records `'work_length'`
* Education records `'education_length'`
* Achievements records `'achievements_length'`
* Mother tongues records `'mother_tongues_length'`
* Foreign languages records `'foreign_languages'`
* Driving licenses records `'driving_length'`
* Finishing parsing Event `'EuropassParser_finished'`


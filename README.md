# EuropassParser

## Description
The Europass CV helps users to present their skills and qualifications effectively and clearly. Any user can create a CV online here. 

The Europass Parser Javascript Library gives the possibility to developers to parse quickly into their HTML forms a Europass PDF+XML CV created from users 
through the Europass site. 

More information about the Europass CV Schema and resources about Europass REST services can be found at the Europass Interoperability site.

## Getting Europass Parser Javascript Library

There are multiple ways of getting europass-parser.js

### Via NPM:
```
npm install --save europass-parser
```

ES5 
```
var EuropassParser = require('europass-parser');
EuroapassParser(file);
```


ES6
``` 
import * as EuropassParser form 'europass-parser';
EuroapassParser(file);
```

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


const parser = require('./parser');

// API Endpoint for extracting XML from Europass PDF/XML file.
const XML_EXTRACTION_URL = 'https://europass.cedefop.europa.eu/rest/v1/document/extraction';
// API Endpoint for converitng XML to JSON format.
const XML_TO_JSON_URL = 'https://europass.cedefop.europa.eu/rest/v1/document/to/json';

/**
* Function to extract the XML info from the Europass PDF/XML file
* @param {ArrayBuffer} pdfArrayBuffer
*/

export function file2EuropassJSON(pdfArrayResult) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', XML_EXTRACTION_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/pdf');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            xhr.onreadystatechange = null;
            // After the API response we have to convert now the XML into JSON format.
            xml2EuropassJSON(xhr.response);
        }
        else if (xhr.status === 400) {
            xhr.onreadystatechange = null;
        }
    };
    xhr.send(pdfArrayResult);
}

/**
 * Function to convert XML data into structured Europass JSON
 * @param {ArrayBuffer} xmlArrayResult 
 */
export function xml2EuropassJSON(xmlArrayResult) {
    const xhrXmlToJson = new XMLHttpRequest();
    xhrXmlToJson.open('POST', XML_TO_JSON_URL, true);
    xhrXmlToJson.setRequestHeader('accept-language', '*');
    xhrXmlToJson.setRequestHeader('Content-Type', 'application/xml');
    xhrXmlToJson.onreadystatechange = (response) => {
        if (xhrXmlToJson.readyState === 4 && xhrXmlToJson.status === 200) {
            xhrXmlToJson.onreadystatechange = null;
            const europassJSON = JSON.parse(response.target.response);
            const skillsPassport = europassJSON.SkillsPassport;
            const learnerInfo = (skillsPassport && skillsPassport.LearnerInfo) ? skillsPassport.LearnerInfo: '';            
            const skills = learnerInfo ? learnerInfo.Skills:'';

            // Start the procedure to fill the form
            //console.log(learnerInfo.WorkExperience.length)
            const workevent = new CustomEvent('work_length', {
                detail: (learnerInfo && learnerInfo.WorkExperience) ? learnerInfo.WorkExperience.length : 0
            });
            document.dispatchEvent(workevent);

            const eduevent = new CustomEvent('education_length', {
                detail: (learnerInfo && learnerInfo.Education) ? learnerInfo.Education.length : 0
            });
            document.dispatchEvent(eduevent);

            const achevent = new CustomEvent('achievements_length', {
                detail: (learnerInfo && learnerInfo.Achievement) ? learnerInfo.Achievement.length : 0
            });
            document.dispatchEvent(achevent);

            const mother_tongue_event = new CustomEvent('mother_tongues_length', {
                detail: skills && skills.Linguistic && skills.Linguistic.MotherTongue ? skills.Linguistic.MotherTongue.length : 0
            });
            document.dispatchEvent(mother_tongue_event);

            const foreign_language_event = new CustomEvent('foreign_languages_length', {
                detail: skills && skills.Linguistic && skills.Linguistic.ForeignLanguage ? skills.Linguistic.ForeignLanguage.length : 0
            });
            document.dispatchEvent(foreign_language_event);

            const driving_event = new CustomEvent('driving_length', {
                detail: (skills.Driving && skills.Driving.Description) ? skills.Driving.Description.length : 0
            });
            document.dispatchEvent(driving_event);

            const photo_event = new CustomEvent('europass_photo', {
                detail: learnerInfo.Identification.Photo ? learnerInfo.Identification.Photo : ''
            });
            document.dispatchEvent(photo_event);

            parser.json2form(europassJSON);
        }
        else if (xhrXmlToJson.status === 400) {
            xhrXmlToJson.onreadystatechange = null;
        }
    };
    xhrXmlToJson.send(xmlArrayResult);
}
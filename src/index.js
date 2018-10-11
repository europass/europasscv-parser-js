import style from './styles.css';
import * as Api from './api';

class Europass {
    constructor(file) {
        this.readFile(file);
    }
    readFile(file) {
        //Get the file type to make the related API calls
        const fileType = file.type;
        
        // Create a Javascript Filereader instance to read the data from the file in ArrayBuffer format
        // and call the corresponding functions that handle the API Requests.
        if (fileType === 'text/xml') {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', function (event) {
                const parsedFile = event.target.result;
                Api.xml2EuropassJSON(parsedFile);
            });
            fileReader.readAsArrayBuffer(file);
        } else if (fileType === 'application/pdf') {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', function (event) {
                const parsedFile = event.target.result;
                Api.file2EuropassJSON(parsedFile);
            });
            fileReader.readAsArrayBuffer(file);
        } else {
            // If the file format is not XML or PDF/XML the user will recieve an error that has to handle it properly.
            // Any other error will be thown from the Europass API with the corresponding error code.
            throw new Error('File format is not supported by Europass');
        }
    }
}

module.exports =(file) => {
    return new Europass(file);
};

/**
 * Get the Europass JSON from the Browser local storage 
 * and start to matching it with the provided configuration file
 */

export function json2form(cv) {
    // The configureation file has been already declared in the html
    if (EuropassParserConfig) {
        EuropassParserConfig.map(section => {
            parseConfig(cv, section);
        });
    } else {
        throw new Error('Europass Config file must be loaded before Europass Parser Library');
    }
    const finishedEvent = new CustomEvent('EuropassParser_finished');
    document.dispatchEvent(finishedEvent);
}

/**
 * Finds and sets to Html element the values from Europass CV.
 * @param {Object} europassCV 
 * @param {Object} section 
 */
export function parseConfig(europassCV, section) {
    if (section.enabled) {
        const europassID = section.original;

        for (let id of europassID.split('.')) {
            if (europassCV[id]) {
                europassCV = europassCV[id];
                if (Array.isArray(europassCV)) {
                    let itemIndex = 0;
                    let item = europassCV;
                    item.map(subItem => {
                        const subId = section.original.substring(section.original.indexOf(id) + id.length + 1, section.original.length);
                        if (subId){
                            subItem = parseObject(subId, subItem);
                        } else {
                            subItem = parseArray(europassCV, itemIndex);
                        }
                        const arrayElementName = section.replace + (itemIndex ? section.prefix + itemIndex.toString() : '');
                        const arrayElement = document.getElementsByName(arrayElementName)[0];
                        if (arrayElement && subItem && typeof subItem !== 'object') {
                            const clearText = stripHtml(subItem);
                            arrayElement.value = clearText;
                        }
                        itemIndex += 1;
                    });
                }

            }
        }
        const element = document.getElementsByName(section.replace)[0];
        if (element && europassCV && typeof europassCV !== 'object') {
            const clearText = stripHtml(europassCV);
            element.value = clearText;
        }
    }
}


/**
 * Returns the sub-item from an Array
 * @param {Array} cv 
 * @param {Number} index 
 */
function parseArray(cv, index) {
    return cv[index];
}

/**
 * Get the value of any key from objects.
 * @param {String} key 
 * @param {Object} item
 * @returns {String}
 */
function parseObject(key, item) {
    let helperItem;
    for (let id of key.split('.')) {
        if (item && !Array.isArray(item)) {
            item = item[id];
            if (Array.isArray(item)) {
                const subId = key.substring(key.indexOf(id) + id.length + 1, key.length);
                item.map(subItem => {
                    helperItem = parseObject(subId, subItem);
                });
            }
        }
    }
    if (helperItem) {
        return helperItem;
    } else {
        return item;
    }
}

/**
 * Remove all Html tags from text.
 * @param {String} text 
 * @returns {String}
 */
function stripHtml(text) {
    const span = document.createElement('span');
    span.innerHTML = text;
    return span.textContent || span.innerHTML;
}

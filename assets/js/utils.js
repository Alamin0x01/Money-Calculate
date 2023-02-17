// function for fetch Elements from the HTML by ID

function fetchElementById(id) {
    return document.getElementById(id);
}

// function for get Elements value from the Input field as a number

function getElementValueAsNumber(id) {
    return Number(fetchElementById(id).value);
}

// 3 expanse field

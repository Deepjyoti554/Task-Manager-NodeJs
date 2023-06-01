
exports.returnDate = getDate; //Use to export the object from one file to another file

function getDate() {
    const today = new Date(); //return date object with current date and time

    //How do i format a date in javaScript
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    // let day = today.toLocaleDateString("en-US", options);
    // return day;
    return today.toLocaleDateString("en-US", options);
}

exports.returnDay = getDay;

function getDay() {
    const today = new Date(); //return date object with current date and time

    //How do i format a date in javaScript
    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
}

console.log(module.exports);
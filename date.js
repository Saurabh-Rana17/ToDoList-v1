module.exports = getDate;
function getDate() {
    let date = new Date();
    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-IN", option);
    return day;
}   
// $(document).ready(function () {

// Display current date on the header:
var date = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(date);

// Get the current time:
var timeNow = moment().get('hour');
console.log(timeNow);

// Apply classes according to current time:
// Present:
$(".description[data-hr]").filter(function () {
    return $(this).data('hr') === timeNow;
}).addClass("present");

// Past:
$(".description[data-hr]").filter(function () {
    return $(this).data('hr') < timeNow;
}).addClass("past");

// Future:
$(".description[data-hr]").filter(function () {
    return $(this).data('hr') > timeNow;
}).addClass("future");

// On click events to store todo's in local storage
$("#btn9AM").on("click", function () {
    var textToStore = $("#9AM").val();
    localStorage.setItem("9AM", textToStore);
})
$("#btn10AM").on("click", function () {
    var textToStore = $("#10AM").val();
    localStorage.setItem("10AM", textToStore);
})
$("#btn11AM").on("click", function () {
    var textToStore = $("#11AM").val();
    localStorage.setItem("11AM", textToStore);
})
$("#btn12PM").on("click", function () {
    var textToStore = $("#12PM").val();
    localStorage.setItem("12PM", textToStore);
})
$("#btn1PM").on("click", function () {
    var textToStore = $("#1PM").val();
    localStorage.setItem("1PM", textToStore);
})
$("#btn2PM").on("click", function () {
    var textToStore = $("#2PM").val();
    localStorage.setItem("2PM", textToStore);
})
$("#btn3PM").on("click", function () {
    var textToStore = $("#3PM").val();
    localStorage.setItem("3PM", textToStore);
})
$("#btn4PM").on("click", function () {
    var textToStore = $("#4PM").val();
    localStorage.setItem("4PM", textToStore);
})
$("#btn5PM").on("click", function () {
    var textToStore = $("#5PM").val();
    localStorage.setItem("5PM", textToStore);
})

// Tried to shorten the above code block with a for loop.
// This is my failed code:
// var arr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
// for (var i = 0; i < arr.length; i++) {
//     var btn = document.getElementById("btn" + arr[i]); <-- don't know how to select this id using jQuery
//     var textToStore = document.getElementById(arr[i]);

//     btn.addEventListener("click", function () {
//         localStorage.setItem(arr[i], textToStore);
//     })

// For loop to render stored todo's on time-bloks:
var arr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

for (var j = 0; j < arr.length; j++) {
    var todo = localStorage.getItem(arr[j]);
    document.getElementById(arr[j]).value = todo
}



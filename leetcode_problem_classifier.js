// main logic below; just need to figure out how to present
// https://leetcode.com/problemset/all/
var parent = $(".question-list-table tr");
var easy = $("span.label-success", parent).length;
var medium = $("span.label-warning", parent).length;
var hard = $("span.label-danger", parent).length;

console.log("Easy: " + easy + "\nMedium: " + medium + "\nHard: " + hard)

// ==UserScript==
// @name         Linkedin Usability Improvements
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/job-apply/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

var $ = window.$;

$(document).ready(function() {
    wait_for_element("#follow-company-question", uncheck_follow);
});

var wait_for_element = function(selector, callback) {
    if (jQuery(selector).length) {
        callback();
    } else {
        setTimeout(function() { wait_for_element(selector, callback); }, 100);
    }
}

function uncheck_follow () {
    $("#follow-company-question")[0].checked = false;
}

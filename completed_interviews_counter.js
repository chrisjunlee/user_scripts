// ==UserScript==
// @name         Pramp Completed Interviews Counter
// @namespace    https://www.pramp.com/
// @version      0.1
// @match        https://www.pramp.com/dashboard*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

var $ = window.$;

(function() {
    'use strict';

    GM_addStyle ( ".CheckoutHideOrderTermsAndConditions { display: none !important; }");
})();

$(document).ready(function() {
    // cloning a row
    var newnode = $("div.dashboardmetricblock").last().clone();

    // filling row with our data and adding
    var count = $('#PastInterviewsTable .interviewLine td:first-of-type:contains("2019")').length;
    $(".scorelabel", newnode).html("Completed:");
    $(".reputationscore", newnode).html(count);
    $("div.dashboardmetricblock").parent().append(newnode);

    // changing "No Shows:" text color
    $("div.dashboardmetricblock:contains('No Shows') .reputationscore").css("color", "rgb(108, 110, 112)");
});

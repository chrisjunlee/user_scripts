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

class ClonedNode {
    constructor(prototypeNode, name, val){
        this.node = prototypeNode.clone();
        $(".scorelabel", this.node).html(name);
        $(".reputationscore", this.node).html(val);
        $("div.dashboardmetricblock").parent().append(this.node);
    }
}

$(document).ready(function() {
    var pastSessionRows = $('#PastInterviewsTable .interviewLine').has('td:contains("2019")');
    var algoCount = pastSessionRows.has('[data-label=Type]:contains("Algorithms")').length;
    var sysDesCount = pastSessionRows.has('[data-label=Type]:contains("System Design")').length;
    var behavioralCount = pastSessionRows.has('[data-label=Type]:contains("Behavioral")').length;

    // cloning a row
    var prototypeNode = $("div.dashboardmetricblock").last();
    var algoNode = new ClonedNode(prototypeNode, "Algorithms:", algoCount);
    var sysDesNode = new ClonedNode(prototypeNode, "System Design:", sysDesCount);
    var behavioralNode = new ClonedNode(prototypeNode, "Behavioral:", behavioralCount);

    // fixes table overlap issue
    $("div#user-metrics").css("height", "fit-content")

    // changing "No Shows:" text color
    $("div.dashboardmetricblock:contains('No Shows') .reputationscore").css("color", "rgb(108, 110, 112)");
});

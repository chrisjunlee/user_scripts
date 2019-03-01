// ==UserScript==
// @name         Leetcode Title Formatter
// @description  Renames title for easy python project creation
// @namespace    http://tampermonkey.net/
// @author       chrisjunlee
// @match        https://leetcode.com/problems/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

var $ = window.$;

$(document).ready(function() {
    wait_for_element("#question-title", update_title);
});

var wait_for_element = function(selector, callback) {
    if (jQuery(selector).length) {
        callback();
    } else {
        setTimeout(function() { wait_for_element(selector, callback); }, 100);
    }
}

function update_title() {
    var title_node = $("#question-title")[0];
    var new_str = title_node.innerText.replace(/(^[0-9]*)(\..*)/, pad_number);

    function pad_number(str, group1, group2) {
        var rating = $('div[diff]').text()[0];
        return group1.padStart("4", "0") + rating + group2.replace(/[^a-zA-Z0-9]/g, "_").replace(/_+(?=_)/g, "").toLowerCase() + ".py"
    }

    title_node.innerText = new_str;

    // auto-copy on-click (onselect doesn't work for non-editable elements)
    title_node.addEventListener("onclick", function () { document.execCommand("copy"); });
}

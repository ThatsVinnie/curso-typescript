"use strict";
var showFeedback = function (msg, type) {
    alert(type.toUpperCase() + ':' + msg);
};
var showError = function (msg) {
    throw new Error('função marcada com never');
};

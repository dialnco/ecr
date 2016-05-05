"use strict";

/**
 * Config module which defines Firebase URL.
 * @module myApp/config
 */
var app = angular.module("myApp.config", ["ngRoute"]);

// your Firebase URL goes here
app.constant("FBURL", "https://flickering-fire-932.firebaseio.com/surveys/ECR");

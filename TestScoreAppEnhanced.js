'use strict';


var names = ["Ben", "Joel", "Judy", "Anne"];

var scores = [88, 98, 77, 88];

var $ = function(id) { return document.getElementById(id); };

function addScore() {

var name = $("name").value;

var score = $("score").value;

names.push(name);

scores.push(score);

}

function displayResults() {

var avg = 0.0,

highest = 0;

for (var i = 0; i < scores.length; i++) {

avg += parseFloat(scores[i]);

if (scores[highest] < scores[i])

highest = i;

}

avg = avg / scores.length;

$("results").innerHTML = "Average score = " + avg .toFixed(2) + "<br />";

$("results").innerHTML += "High Score = " + names[highest] + " with a score of " + scores[highest];

}

function displayScores() {

var str = "<table>";

str += "<tr align='left'><th>Name</th><th>Score</th></tr>";

for (var i = 0; i < scores.length; i++) {

str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";

}

str += "</table>";

$("scores_table").innerHTML = str;

}

window.onload = function() {

$("add").onclick = addScore;

$("display_results").onclick = displayResults;

$("display_scores").onclick = displayScores;

};

var date = new Date();
	var current_date = (date.getMonth()+1)+"-"+ date.getDate()+"-"+ date.getFullYear();
    var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	
	document.getElementById("demo").innerHTML = date_time;
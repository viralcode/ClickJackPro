/* Coded by jijojohn @ singlelinelogics */
$(document).ready(function(){
$(".bpoc").css("display","none");
$("#error").css("display","none");
$("#exploit").css("display","none");
$(".button_example").click(function(e){
e.preventDefault();
$(".button_example").text("Processing..").css("display","none");
$("#exploit").slideDown();
alert("If the target is vulnerable The target will load in the below box,otherwise it will show as empty");
chrome.tabs.getSelected(null, function(tab) {
var urx = tab.url;
$("#exploit").attr("src",urx);

$(".bpoc").slideDown("slow");
$(".button_examples").css("margin-left","110px");
});
});
$(".bpoc").click(function(){
$(".button_example").css("visibility","hidden");
$("#exploit").css("visibility","hidden");
$("#exploit").replaceWith("<textarea id=\"txt\"></textarea>");
var first = $("#sdx").html();
var newstring = first.substr(0, first.length-5);
var finalstring = newstring.substr(5);
chrome.tabs.getSelected(null, function(tab) {
var uri = tab.url;
var dd = finalstring.replace("src=", "src=" + uri);
$("#txt").text(dd);
$(".button_examples").css("margin-left","100px");
$("#txt").click(function(){$("#txt").focus().select()});
$(".bpoc").replaceWith("<h2>Kindly Copy the POC in the above textarea</h2>");
});
});
$("#logo").click(function(){
$("body").html("<img src=\"src.images/logo.png\" style=\"margin-left:80px\"> <br/><center><marquee  behavior=\"scroll\" direction=\"up\">Singlelinelogics Team<br/><br/><u>Development Team</u><br/>Jijojohn<br/>Manzoor Samad<br/><br/><u>Graphics</u><br/><br/>Adarsh Soman<br/>Devanand<br/><br/><u>Thanks</u><br/><br/>Nikhil Karakkattu</marquee></center>");
});
});
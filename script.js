let Q = document.getElementById("Q");
let W = document.getElementById("W");
let E = document.getElementById("E");
let A = document.getElementById("A");
let S = document.getElementById("S");
let D = document.getElementById("D");
let Z = document.getElementById("Z");
let X = document.getElementById("X");
let C = document.getElementById("C");

$(document).ready(function(){
    $("#btnq").click(function(){
        Q.play();
        $("#display").text("Sound 1");
    });
    $("#btnw").click(function(){
        W.play();
        $("#display").text("Sound 2");
    });
    $("#btne").click(function(){
        E.play();
        $("#display").text("Sound 3");
    });
    $("#btna").click(function(){
        A.play();
        $("#display").text("Sound 4");
    });
    $("#btns").click(function(){
        S.play();
        $("#display").text("Sound 5");
    });
    $("#btnd").click(function(){
        D.play();
        $("#display").text("Sound 6");
    });
    $("#btnz").click(function(){
        Z.play();
        $("#display").text("Sound 7");
    });
    $("#btnx").click(function(){
        X.play();
        $("#display").text("Sound 8");
    });
    $("#btnc").click(function(){
        C.play();
        $("#display").text("Sound 9");
    });
}); 

$(".four").hide();
$(".five").hide();
$(".Albany").hide();
$(".Las").hide();
$(".liquid").hide();
$(".dark").hide();
$(".Donald").hide();
$(".Joe").hide();
$(".ans").hide();
$(".ft").hide();
$(".next").hide();
$(".next1").hide();
$(".next2").hide();
$(".next3").hide();
$("p").hide();
$("p-1").hide();
$("p-2").hide();
$("p-3").hide();
$("p-4").hide();
$("p-5").hide();
$("p-6").hide();
$("p-7").hide();
$("p-8").hide();
$("p-9").hide();
$("p-10").hide();
$("p-11").hide();
$("p-12").hide();
$("p-13").hide();
$("p-14").hide();
$(".reset").hide();
$(".congrats").hide();
$(".main2").hide();

$(".start").click(function() {
    $(".main").hide();
    $(".main2").show();
    $(".start").hide();
    $(".four").show();
    $(".five").show();
    $("p").show();
});

$(".five").click(function() {
    $("p-1").show();
    $(".four").hide();
    $("p").hide();
    $(".five").hide();
    $(".reset").show();
});

$(".reset").click(function() {
    $(".reset").hide();
    $("p-1").hide();
    $(".main").show();
    $(".start").show();
    $(".main2").hide();
});

$(".four").click(function() {
    $("p-6").show();
    $(".five").hide();
    $("p").hide();
    $(".four").hide();
    $(".next").show();
});

$(".next").click(function() {
    $("p-11").show();
    $(".Albany").show();
    $(".Las").show();
    $("p-6").hide();
    $(".next").hide();    
});

$(".Las").click(function() {
    $("p-2").show();
    $(".Albany").hide();
    $("p-11").hide();
    $(".Las").hide();
    $(".reset").show();
});

$(".reset").click(function() {
    $(".reset").hide();
    $("p-2").hide();
    $(".main").show();
    $(".start").show();
    $(".main2").hide();
});

$(".Albany").click(function() {
    $("p-7").show();
    $(".Las").hide();
    $("p-11").hide();
    $(".Albany").hide();
    $(".next1").show();
});

$(".next1").click(function() {
    $(".next1").hide();
    $("p-12").show();
    $("p-7").hide();
    $(".liquid").show();
    $(".dark").show();
    $("p-6").hide();
});

$(".dark").click(function() {
    $("p-3").show();
    $(".liquid").hide();
    $(".dark").hide();
    $("p-12").hide();
    $(".reset").show();  
});

$(".reset").click(function() {
    $(".reset").hide();
    $("p-3").hide();
    $(".main").show();
    $(".start").show();
    $(".main2").hide();
});

$(".liquid").click(function() {
    $("p-8").show();
    $(".liquid").hide();
    $(".dark").hide();
    $("p-12").hide();
    $(".next2").show();
});

$(".next2").click(function() {
    $(".next2").hide();
    $("p-13").show();
    $("p-8").hide();
    $(".Donald").show();
    $(".Joe").show();
});

$(".Joe").click(function() {
    $("p-9").show();
    $(".Joe").hide();
    $(".Donald").hide();
    $("p-13").hide();
    $(".next3").show();
});

$(".Donald").click(function() {
    $("p-4").show();
    $(".Donald").hide();
    $(".Joe").hide();
    $("p-13").hide();
    $(".reset").show();
});

$(".reset").click(function() {
    $(".reset").hide();
    $("p-4").hide();
    $(".main").show();
    $(".start").show();
    $(".main2").hide();
});

$(".next3").click(function() {
    $(".next3").hide();
    $("p-14").show();
    $("p-9").hide();
    $(".ans").show();
    $(".ft").show();
});

$(".ans").click(function() {
    $("p-10").show();
    $(".ans").hide();
    $(".ft").hide();
    $("p-14").hide();
    $(".border").slideUp();
    $(".congrats").show();
});

$(".ft").click(function() {
    $("p-5").show();
    $(".ans").hide();
    $(".ft").hide();
    $("p-14").hide();
    $(".reset").show();
});

$(".reset").click(function() {
    $(".reset").hide();
    $("p-5").hide();
    $(".main").show();
    $(".start").show();
    $(".main2").hide();
});
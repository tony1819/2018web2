$(document).ready(function(){
    $("#gonggoBtn1").click(function(){
        $("#gonggoBtn1").css("background-color","#424242");
        $("#gonggoBtn1").css("color","white");
        $("#gonggoBtn2").css("background-color","white");
        $("#gonggoBtn2").css("color","black");
    })
    $("#gonggoBtn2").click(function(){
        $("#gonggoBtn2").css("background-color","#424242");
        $("#gonggoBtn2").css("color","white");
        $("#gonggoBtn1").css("background-color","white");
        $("#gonggoBtn1").css("color","black");
    })
})

document.getElementById("inputbox").style.visibility = "hidden";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").style.visibility = "hidden";
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button4").style.visibility = "hidden";
document.getElementById("Kontrollwerte").style.visibility = "hidden";
document.getElementById("Speechbubble").style.visibility = "hidden";
//document.getElementById("GameStartWindow").style.visibility = "hidden";
//document.getElementById("cash").style.visibility = "hidden";
//document.getElementById("Ant1").style.visibility = "hidden";

function mauzitalks() //mauzi bewegt den Mund
{
    $("#Mauzioh").removeClass("nekohead").addClass("mauzitalk");
    setTimeout(function(){
        $("#Mauzioh").removeClass("mauzitalk").addClass("nekohead");
    }, 1500);
}

function mauzitwinker() //Mauzi zwinkert
{
    $("#Mauzioh").removeClass("nekohead").addClass("mauzitwinker");
    setTimeout(function(){
        $("#Mauzioh").removeClass("mauzitwinker").addClass("nekohead");
    }, 2000);
}

function cash_eyes() //mauzi cashed mit den Augen
{
    $("#Mauzioh").removeClass("nekohead").addClass("mauzicash");
    setTimeout(function(){
        $("#Mauzioh").removeClass("mauzicash").addClass("nekohead");
    }, 700);
}





function got_life() //lifeicon poppt kurz auf
{

    $("#lifeicon").addClass("gotlife");
    setTimeout(function(){
        $("#lifeicon").removeClass("gotlife");
    }, 350);

}

function got_coin() //coinicon poppt kurz auf
{
    $("#coinicon").addClass("gotcoin");
    setTimeout(function(){
        $("#coinicon").removeClass("gotcoin");
    }, 350);
}
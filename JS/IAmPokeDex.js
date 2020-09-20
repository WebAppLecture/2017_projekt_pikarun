let isClosed = true;

function OpClosDex() //PokeDexöffner und Zeitpunkt
{
    if (isClosed) {
        $('#upperdex').toggleClass('hoch');
        $("#lowerdex").toggleClass('runter');
    } else {
        $('#lowerdex').toggleClass('hochafter');
        $("#upperdex").toggleClass('runterafter');
    }
    isClosed = !isClosed;
}


function dexclicker() //Befehl, wann man den Dex anklicken kann
{
    $("#wholepokedex").click(OpClosDex);
}


function pokedexstart() //Befehl den Dex zu öffnen
{
    $('#upperdex').toggleClass('hoch');
    $("#lowerdex").toggleClass('runter');

}

function pokedexdeact() //Befehl den Dex zu schließen
{
    $('#lowerdex').toggleClass('hochafter');
    $("#upperdex").toggleClass('runterafter');
}

function renewdexcontent() //Befehl die Inhalte im Dex zum jeweiligen Zeitpunkt zu refreshen
{
    document.getElementById("coincol").innerHTML = "Münzen: ";
    document.getElementById("cointot").innerHTML = coins_col + "/" +coins_tot;
    document.getElementById("schwierigkeitsgrad").innerHTML = "Level: -";
    document.getElementById("lifenumber").innerHTML = "Leben: " + Math.max(0,life)+"x";
}

function coinrefresher() //Befehl die Inhalte im Dex zum jeweiligen Zeitpunkt zu refreshen
{
    document.getElementById("cointot").innerHTML = coins_col + "/" +coins_tot;
    document.getElementById("lifenumber").innerHTML = "Leben:" + Math.max(0,life)+"x";

}
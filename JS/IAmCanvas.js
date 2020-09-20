window.addEventListener('keydown',keydown,false);
window.addEventListener('keyup',keyup,false);

let map =
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01111100011111" +//easter egg
    "00010100010000" +//
    "00010100010000" +//
    "00010100010000" +//
    "00000000000000" +//
    "00110000011110" +//
    "01001000010000" +//
    "01101000010000" +//
    "01010000011110" +//
    "00000000000000" +//
    "01111000001100" +//
    "00010000010010" +//
    "00001000011111" +//
    "00000000000000" +//
    "00110000001110" +//
    "01001000010000" +//
    "01111000010000" +//
    "00000000001110" +//
    "01111100010000" +//
    "00010000010000" +//
    "00010000001110" +//
    "01100000000000" +//
    "00000000011101" +//
    "00000000000000" +//
    "00000000011000" +//
    "00000010100100" +//
    "00000010100100" +//
    "00000001111100" +//
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01000100010000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00001000200000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000200000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10200000000000" +
    "10200000000000" +
    "10200000000000" +
    "10200000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00012000120000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000120001200" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10013000000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01110201111111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01110201111111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01111102011111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01110201111111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01110201111111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01111102011111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01111111020111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01111111020111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01110201111111" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "11200000000000" +
    "11120000000000" +
    "11112000000000" +
    "11111200000000" +
    "11111120000000" +
    "11111112000000" +
    "11111111200000" +
    "11111111120000" +
    "11111111112000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "11111111110000" +
    "11111111112000" +
    "11111111110000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "11111111110000" +
    "11111111112000" +
    "11111111110000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "11111111111000" +
    "11111111111120" +
    "11111111111110" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "11111111111110" +
    "11111111111112" +
    "11111111111110" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "11111111111110" +
    "11111111111112" +
    "11111111111110" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00002222222222" +
    "00000000000000" +
    "10000000000000" +
    "10200000000000" +
    "10000000000000" +
    "10000000120000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000012000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001200000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000012000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000120000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10002000000000" +
    "10000000000000" +
    "10200000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001320000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "12000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "12000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "12000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "12000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10011111111111" +
    "10000000100000" +
    "10000000000000" +
    "10000000000000" +
    "12001000000100" +
    "11111111111111" +
    "00001200000010" +
    "00000000000000" +
    "00000000000000" +
    "12000000100000" +
    "11111111111111" +
    "10000100012000" +
    "10000000000000" +
    "10000000000000" +
    "10010000000100" +
    "11111111111111" +
    "00100000001000" +
    "00000000000000" +
    "00000000000000" +
    "00001000001200" +
    "11111001111111" +
    "10001000000010" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "11222100010001" +
    "12222200000000" +
    "12222200000000" +
    "12222200000000" +
    "11222100010001" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "11000122210001" +
    "10000222220000" +
    "10000222220000" +
    "10000222220000" +
    "11000122210001" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01000100012221" +
    "00000000022222" +
    "00000000022222" +
    "00000000022222" +
    "01000100012221" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000111100000" +
    "00011010011000" +
    "00100100000100" +
    "00100100000100" +
    "01000110000010" +
    "01001001000010" +
    "01001001000010" +
    "01000110000010" +
    "00100100000100" +
    "00100100000100" +
    "00011010011000" +
    "00000111100000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10012001200000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "11000100010000" +
    "11111111111110" +
    "12222212222210" +
    "12222212222210" +
    "02212212212210" +
    "02212222212200" +
    "12212222212200" +
    "10011111111110" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10011111111110" +
    "12212222212200" +
    "12212222212200" +
    "02212212212210" +
    "02222212222210" +
    "12222212222210" +
    "11111111111110" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01001001001111" +
    "01001001001201" +
    "00001001000001" +
    "00001001000001" +
    "01001001111000" +
    "01001000001000" +
    "00001000001001" +
    "00001001001001" +
    "01001001000001" +
    "01000001000001" +
    "01000001001111" +
    "01111111001000" +
    "01000000001000" +
    "01000000001111" +
    "01001001000001" +
    "01001201200001" +
    "01111001111111" +
    "01000001001001" +
    "01000001001001" +
    "01001000001200" +
    "00001000001000" +
    "00001001000001" +
    "01001001000001" +
    "01001001001001" +
    "00001001001001" +
    "00001001000000" +
    "01000001000000" +
    "01200001001001" +
    "01111001111001" +
    "00000000000000" +
    "00000000000000" +
    "00000000000001" +
    "00000000000001" +
    "00000000000000" +
    "00000000000000" +
    "00000000000001" +
    "00000000000001" +
    "00000000000000" +
    "00000000000000" +
    "00000000000001" +
    "00000000000001" +
    "00000000000000" +
    "00000000000000" +
    "00000000000001" +
    "00000000000001" +
    "00000000000000" +
    "00000000000000" +
    "00000111100000" +
    "00011000011000" +
    "00100100000100" +
    "01000010000100" +
    "01001110000010" +
    "01000010000010" +
    "01000010000010" +
    "01001110000010" +
    "01000010000100" +
    "00100100000100" +
    "00011000011000" +
    "00000111100000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10001300000000" +//checkpoint
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01200000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01200000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "01200000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10012200000000" +
    "10222220000000" +
    "12222200000000" +
    "12222200000000" +
    "10222220000000" +
    "10012200000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "10000000000000" +
    "0000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000" +
    "00000000000000";


let speed_pika = 8;//Geschwindigkeit von Pikatchu (bei normalem Gehen, also nicht im Sprint)
let jump = 20;//"Sprungstärke"
let force = 1.5;//"Gravitationsstärke"
let mode = 0;//bestimmt ob Spiel normal läuft, angehalten oder beendet wird
let start = 0;//wird eins wenn der User zu spielen beginnt
let complete = 0;//wird eins wenn alle Münzen eingesammelt werden
let time_real = 0;//Zeit die im Hintergrund für diverse Timer läuft
let time_rec = 0;//aktuelle Spielzeit
let time_cur = 0;//Zeit die für Bewegung der Map vervendet wird (ab 2tem Schwierigkeitsgrad)
let record = "-";//Bestzeit
let coins_col =0;//Anzahl eingesammelter Münzen
let coins_tot = map.split(2).length-1;//Anzahl aller Münzen
let keyboard = 0;//wird eins wenn Tastatur aktiviert wird
let speed_map = 0;//Geschwindigkeit der Map (ab 2tem Schwierigkeitsgrad)
let over = 0;//wird eins wenn Spiel beendet wird
let edge = 0;//wird eins wenn Spieler den Spielfeldrand erreicht
let duration = 0;//Beschleunigungsdauer bei Sprint (haben uns nach Implementierung aber entschieden die Geschwindigkeit sprunghaft ändern zu lassen)
let delay = 1000;//Beschleunigungsverzögerung bei Sprint
let status_a = false;//wird "wahr" wenn "a" gedrückt wird und "falsch" wenn a wieder losgelassen wird
let status_d = false;//wird wahr wenn "d" gedrückt wird und "falsch" wenn d wieder losgelassen wir
let timer_acc = 0;//Timer der nach der Zeit delay Pikatchu beschleunigen lässt
let timer_afk =0 ;//Timer der bei Inaktivität Pikatchu winken lässt
let life = 5;//Anzahl Leben
let mult = 1.5;//bei Sprint wird Pikatchu auf das mult-fache von speed_pika beschleunigt
let fps = 24;//Frames pro Sekunde
let border = 200;//Spielfeldrand (ab hier läuft nicht mehr Pikatchu sondern die map)
let relativ = 0;//relativer Abstand von Pikatchu zu allen Blöcken/Münzen
let delta = 0;//x-Koordinate von Pikatchu in diesem Frame minus x-Koordinate von Pikatchu vom letzten Frame
let x_start = row(map.search(3));//Position des ersten checkpoints
let x_end = map.length;//Position der letzten Münze

for(i=0;i <= map.length;i++){//bestimmt Position der letzten Münze
    if(map.slice(map.length-i,map.length-i+1)*1 === 2){
        x_end = row(map.length-i);
    break;
    }
}

function keydown(context){//registriert und reagiert wenn Taste gedrückt wird
    switch (keyboard*context.keyCode){
        case 37:
        case 65:
            status_a = true;
            start = 1;
            break;
        case 39:
        case 68:
            status_d = true;
            start = 1;
            break;
        case 38:
        case 87:
            if(Math.abs(pika.vy) === 0 && pika.jump === 1){
                pika.vy = -jump;
                pika.jump = 0;
                jumpboing();
            }
            start = 1;
            break;
        default:
    }
}

function keyup(context){//registriert und reagiert wenn Taste gedrückt losgelassen wird
    switch (context.keyCode){
        case 37:
        case 65:
            status_a = false;
            break;
        case 39:
        case 68:
            status_d = false;
            break;
    }
}

function print(context,id,r,s,x_1,y_1,w_1,h_1,x_2,y_2,w_2,h_2){//drehspiegelt ein Bild und zeichnet es ins Canvas (optional auch nur Teil eines sprite sheet wenn die letzten vier Variablen nicht besetzt werden)
    context.save();
    context.translate(x_1+0.5*w_1,y_1+0.5*h_1);
    context.scale(s,1);
    context.rotate(r);
    if(!isNaN(x_2)){
        context.drawImage(document.getElementById(id),x_2,y_2,w_2,h_2,-0.5*w_1,-0.5*h_1,w_1,h_1);
    }
    else{
        context.drawImage(document.getElementById(id),-0.5*w_1,-0.5*h_1,w_1,h_1);
    }
    context.restore();
}

function intervall(a,b){//unterteilt die Zeit b in a Intervalle gleicher Länge und gibt in Bezug auf time_real die "aktuelle" Intervallnummer zurück
    let c=0;
    let d=1000*time_real % (a*b);
    for (let i = 0; i < a; i++){
        if (d >= i*b && d < (i+1)*b){
            c = i+1;
        }
    }
    return c;
}

class character{//Klasse für Pikatchu
    constructor(){
        this.x_rel = border;//Abstand vom Anfagng des Spielanzeigefensters zu Pikatchu
        this.x_abs = ((map.search(3)-(map.search(3))%14)/14);//Abstand vom Anfang der map zur aktuellen Position von Pokatchu
        this.x_spawn = 30*(((map.search(3)-(map.search(3)%14))/14));//Abstand vom Anfang der map zum letzten checkpoint
        this.y = 300;
        this.vx = 0;
        this.vy = 0;
        this.direction = 1;//Richtung in die Pikatchu gerade schaut
        this.jump = 0;//wird eins wenn Pikatchu springen darf
        this.width = 50;
        this.height = 40;
    }

    draw(context){//wählt Bewegungszustand von Pikatchu aus (vom sprite sheet)
        if (this.vx === 0 && this.vy === 0){
            if(keyboard === 1 && time_real < 1000){
                print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,(intervall(2,20000)-1)*57+5,0,50,38);
            }
            else {
                if (timer_afk < 4000){
                    print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,5,0,50,38);
                }
                else {
                    print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,(intervall(2,10000)-1)*55,137,50,39);
                }
            }
         }
        else {
            if(this.vy === 0){
                if(Math.abs(pika.vx) === speed_pika){
                    print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,(intervall(4,100)-1)*50,40,50,38);
                }
                else{
                    print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,(intervall(4,100)-1)*57,88,57,38);
                }
            }
            else{
                if (this.vx === 0){
                    print(context,"pikasprite",0,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,2,93,49,30);
                }
                else{
                    print(context,"pikasprite",this.direction*Math.atan(this.vy/this.vx)-1.75*Math.PI,this.direction,this.x_rel-time_cur*speed_map,this.y,this.width,this.height,2,93,49,30);
                }
            }
        }
    }

    move(){//bewegt Pikatchu
        this.vy += force;
        this.y += this.vy;
        this.vx = speed_pika*Math.min(Math.max(1,((mult-1)/duration)*(timer_acc-delay)+1),mult)*(status_d-status_a );
        let a = pika.direction;
        if (this.vx !== 0){
            this.direction = this.vx/Math.abs(this.vx);
        }
        if(a !== this.direction || this.vx === 0){
            timer_acc = 0;
        }
        delta = this.x_rel;
        if (this.vx < 0){
            this.x_rel = Math.max(time_cur*speed_map-this.width+(1-Math.sign(speed_map))*(border+this.width),this.x_rel+this.vx);
}
        else {
            this.x_rel = Math.min(time_cur*speed_map+canv.width-border-this.width,this.x_rel+this.vx);
        }
        delta = this.x_rel-delta;
        if((1-Math.sign(speed_map))*(this.x_rel-border) === Math.sign(speed_map) || this.x_rel === time_cur*speed_map+canv.width-border-this.width){
            relativ += this.vx;
        }
        if(this.x_rel === time_cur*speed_map+canv.width-border-this.width){
            edge = 1;
        }
        else{
            edge = 0;
        }
    }

    reset(text){//Setzt spiel zum letzten checkpoint oder ganz zurück
        let j = 0;
        for(let i = 0;i < map.length;i++){
            if(map.slice(i,i+1) * 1 === 2 && coins[i].aktiv === 1){
                j=i;
                break;
                }
        }
        let k = 0;
        for(let i = 0; i < map.length;i++){
            if (map.slice(i,i+1)*1 === 3){
                if(text !== "all"){
                    if(row(j) >= row(i) && this.x_abs >= row(i) && 30*row(i) >= this.x_spawn){
                        this.x_spawn = 30*row(i);
                        this.y = 417-(30*line(i));
                        k = 1;
                    }
                }
            }
        }
        if(k === 0){
            this.x_spawn=30*row(map.search(3));
            this.y = 417-(30*line(map.search(3)));
        }
        for(let i = 0;i < map.length;i++){
            if (map.slice(i,i+1)*1 === 2){
                if (30*row(i) >= this.x_spawn){
                    if (coins[i].aktiv === 0){
                        coins[i].aktiv = 1;
                        coins_col -= 1;
                    }
                }
            }
        }
        relativ = 0;
        this.direction = 1;
        this.x_rel = border;
        this.vx = 0;
        this.vy = 0;
        timer_acc = 0;
        timer_afk = 0;
        time_cur = 0;
        life -= 1;

        if(text === "all"){
            over = 0;
            complete = 0;
            time_rec = 0;
            life = 5;
        }
        got_life();
        document.getElementById("coincol").innerHTML = "Münzen: ";
        coinrefresher();
    }

    collect(object){//prüft ob Pikatchu mit object (Münze) kollidiert
         if(this.x_rel < object.x+object.width && this.x_rel+this.width>object.x && this.y < object.y+object.height && this.height+this.y > object.y){
            if(object.aktiv ===1){
                coins_col += 1;
                coinrefresher();
                cash_eyes();
                sound_coin();
                got_coin();
            }
            object.aktiv = 0;
        }
    }

    adjust(object){//passt Positiom der Spielobjekte relativ zu der von Pikatchu an
        object.x = object.x_abs-this.x_spawn+204-relativ;
    }


    collision(object){//prüft ob Pikatchu mit object (Block) kollidiert
    let o=0;
        if (this.x_rel < object.x+object.width && this.x_rel+this.width > object.x && this.y < object.y+object.height && this.height+this.y > object.y){
            if(((0) || (this.y - this.vy >= object.y+object.height)) && ((this.x_rel-this.vx+this.width <= object.x) || (this.x_rel-this.vx >= object.x+object.width))){
                this.y -= this.vy;
                this.vy = 0;
                this.x_rel -= this.vx;
            }
            else{
                if ((this.y-this.vy+this.height <= object.y) || (this.y-this.vy >= object.y+object.height)){
                    if ((this.x_rel-this.vx+this.width > object.x) && (this.x_rel-this.vx < object.x+object.width)){
                        if (this.y-this.vy+this.height <= object.y){
                            this.y = object.y-this.height;
                            this.vy=0;
                            this.jump = 1;
                        }
                        else{
                            this.y = object.y+object.height;
                            this.vy = 0;
                        }
                    }
                }
                else {
                    if ((1-Math.sign(speed_map))*(this.x_rel-border) === Math.sign(speed_map) || this.x_rel === time_cur*speed_map+canv.width-border-this.width){

                        for (let j = 0; j < map.length; j++) {
                            if (map.slice(j,j+1)*1 === 1 || ((j%14) === 0)){
                            }
                        }
                        this.x_rel -= delta;
                    }
                    this.x_rel -= this.vx;
                    timer_acc = 0;
                }
            }
        }
    }
}

class Position{//Pseudo Blöcke die die absolute Position von Pikatchu bestimmen
    constructor(x,n,o){
        this.x = x;
        this.n=n;
        this.x_abs=o;
    }

    locate(){//aktualisiert absolute Position von Pikatchu
            if (pika.x_rel < this.x+30 && pika.x_rel+pika.width > this.x){
                pika.x_abs = this.n;
            }
        }
    }

class Block{
    constructor(x,y,w,h,u){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.x_abs=u;
    }

    draw(context){
        if(this.y<417) {
            context.drawImage(document.getElementById("brick"), this.x-time_cur*speed_map, this.y, this.width, this.height);
        }
    }
}

class Muenzen{
    constructor(x,y,w,h,k,o){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.aktiv = k;
        this.x_abs = o;
    }

    draw(context){
        if(this.aktiv*1 === 1){
            context.drawImage(document.getElementById("coin"),(intervall(10,350)-1)*120,0,120,120,this.x-time_cur*speed_map+2.5,this.y+2.5,25,25);
        }
    }
}

function rules(){//prüft ob Spielregeln eingehalen werden
    if(coins_col === coins_tot){
        if(complete === 0){
            over = 1;
            start  = 0;
            complete = 1;
            if(time_rec < record || record === "-"){
                record = time_rec;
                index = 23;
                main();
            }
            else{
                index = 24;
                main();
            }
        }
        if(keyboard === 0){
            sunglasses();
            victoryaudire();
            audindex = 3;
        }
        if(pika.jump === 1){
            keyboard = 0;
            status_a = false;
            status_d = false;
        }
    }
    else {
        let token_life = life;
        let j = 0;
        for (let i = 0;i < map.length;i++){
            if (map.slice(i,i+1)*1 === 2){
                if (coins[i].aktiv){
                    j = i;
                    break;
                }
            }
        }
        if (coins[j].x-30+pika.width-time_cur*speed_map <= 0){
            if (Math.sign(speed_map) === 0){
               index = 18;
               main();
            }
            else {
                token_life -= 1;
               if(token_life >= 0){
                   index = 19;
                   mode = 2;
                   start = 0;
                   over = 1;
                   keyboard = 0;
                   main();
               }
            }
        }
        else {
            if(start === 1){
                index = 0;
                main();
            }
        }
            if(over === 0){
            if (pika.y > 500){
                dead();
                token_life -= 1;
                if (token_life >= 0){
                    index = 20;
                    mode = 2;
                    start = 0;
                    over = 1;
                    keyboard = 0;
                    main();
                }
            }
            if (pika.x_rel <= time_cur*speed_map-pika.width){
                token_life -= 1;
                if (token_life >= 0){
                    index = 21;
                    mode = 2;
                    start = 0;
                    over = 1;
                    keyboard = 0;
                    main();
                }
            }
            if (token_life < 0){
                over = 1;
                start = 0;
                keyboard = 0;
                index = 22;
                mode = 2;
                main();
            }
        }
    }
}

function ground(){//fügt Abgrund/Löcher in map ein
    let a = 0;
    let b = 0;
    for (let p = 1; p < map.length;p++){
        if ((p % 14) === 0) {
            if (map.slice(p,p+1)*1 === 0){
                c.fillStyle = 'rgb(143,239,255)';
                c.fillRect(blocks[p].x-time_cur*speed_map,416,31,64);
                a = 1;
                if (b === 1){
                    print(c,"gras",0,1,blocks[p].x-12-time_cur*speed_map,416,11.9540229885,63.5555555556);
                    b = 0;
                }
            }
            if (map.slice(p,p+1)*1 === 1){
                b = 1;
                c.fillStyle = '#00F';
                if (a === 1){
                    print(c,"gras",0,-1,blocks[p].x-time_cur*speed_map,416,11.9540229885,63.5555555556);
                    a = 0;
                }
            }
        }
    }
}

canv = document.getElementById("myCanvas");
c = canv.getContext('2d');

setInterval(game,1000/fps);

function row(k){//Spalte in map
    return (k-(k%14))/14;
}

function line(k){//Zeile in map
    return (k%14)+1;
}

function sunglasses(){//"Animation" beim Sammeln aller Münzen
    print(c,"dealwithit",0,pika.direction,pika.x_rel-time_cur*speed_map+3,Math.min(complete,pika.y+11),45,10);
    complete += 3;
}

function watch(){//aktualisiert alle Zeiten und Timer
    time_real = (time_real+1000/fps);
    if(start === 1 && over === 0){
        time_rec = (time_rec + 1000/fps);
        if(edge === 0 || pika.vx === 0){
            time_cur = (time_cur+1000/fps);
        }
        if (pika.jump === 1){
            timer_acc += 1000/fps ;
        }
    }
    if(pika.vx !== 0 || pika.vy !== 0){
        timer_afk = 0;
    }
    else{
        if(keyboard === 1) {
            timer_afk += 1000/fps;
        }
    }
}

function pokedex(){//füllt das Pokedex
    document.getElementById("timecur").value = "Spielzeit: " + -Math.ceil(-time_rec/60000) + ":" + -Math.ceil(-time_rec/1000)%60;
    if(!isNaN(record)){
        document.getElementById("timerec").value = "Bestzeit: " + -Math.ceil(-record/60000) + ":" + -Math.ceil(-record/1000)%60;
    }
    else{
        document.getElementById("timerec").value = "Bestzeit: -";
    }
    document.getElementById("fortschritt").innerHTML = "Fortschritt: " + Math.round(100*Math.min(Math.max(0,pika.x_abs-x_start-1),x_end-x_start-1)/(x_end-x_start-1)) + "<span style='font-size: 15pt;'>%</span>";
    if(keyboard === 1){
       document.getElementById("keyactivity").innerHTML ="Tastatur: aktiviert";
    }
    else{
    document.getElementById("keyactivity").innerHTML ="Tastatur: deaktiviert";
    }
}

function game(){
    pokedex();
    if(mode === 1){
        watch();
        for (let k = 0; k < map.length/14; k++) {
            posi[k].locate();
        }
        pika.move();
        for (let i = 0; i <  map.length/14; i++) {
            pika.adjust(posi[i]);
        }
        for (let j = 0; j < map.length; j++){
            if ((map.slice(j, j + 1) * 1 === 1) || ((j%14) === 0)) {
                pika.adjust(blocks[j]);
                if (map.slice(j, j+1)*1 === 1) {
                    pika.collision(blocks[j]);
                }
            }
        }
        for (let i = 0;i < map.length;i++){
            if (map.slice(i,i+1)*1 === 2){
                pika.adjust(coins[i]);
                pika.collect(coins[i]);
            }
        }
        c.clearRect(0, 0, canv.width, canv.height);
        c.drawImage(document.getElementById("worldcut"), 0, 0, canv.width, canv.height);
        ground();
        pika.draw(c);
        for (let i = 0; i < map.length; i++) {
            if (map.slice(i,i+1)*1 === 1) {
                blocks[i].draw(c);
            }
        }
        for (let i = 0;i < map.length;i++){
            if (map.slice(i,i+1)*1 === 2){
                coins[i].draw(c);
            }
        }
        rules();
    }
    else{
        if(mode === 0){
            c.fillStyle = "black";
            c.fillRect(0, 0, canv.width, canv.height);
        }
    }
}

let pika = new character(417-30*((map.search(3)%14)+1));
let posi = [];
for(let k = 0;k < map.length/14;k++){
    posi[k] = new Position(30*k,k,30*k);
}
let blocks = [];
for (let k = 0; k < map.length;k++){
    if((map.slice(k,k+1)*1 === 1) || ((k%14) === 0)){
        blocks[k] = new Block(30*row(k), 417-(30*((k)%14)),30,30+60*(1-Math.sign((k%14))),30*row(k));
    }
}
let coins = [];
for (let k = 0;k < map.length;k++){
    if(map.slice(k,k+1)*1 === 2){
        coins[k] = new Muenzen(30*row(k),417-(30*(k%14)),10,10,1,30*row(k));
    }
}
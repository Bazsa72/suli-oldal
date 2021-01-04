let tomb = ["ipari","gepesz","mecha","vegyesz","muanyag","info","kornyezet","kisgyermek"];
function Ipari() {
    document.getElementById('content').innerHTML = "Ipari";
    iparitab();
    document.getElementById('ipari').className = "szak active";
    for(let i = 0; i < 8; i++) {
        if(tomb[i] != "ipari") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Gepesz() {
    document.getElementById('content').innerHTML = "Gépész";
    gepesztab();
    document.getElementById('gepesz').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "gepesz") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Mecha() {
    document.getElementById('content').innerHTML = "Mechatronika";
    mechatab();
    document.getElementById('mecha').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "mecha") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Vegyesz() {
    document.getElementById('content').innerHTML = "Vegyész";
    vegyesztab();
    document.getElementById('vegyesz').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "vegyesz") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Muanyag() {
    document.getElementById('content').innerHTML = "Műanyagos";
    muanyagtab();
    document.getElementById('muanyag').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "muanyag") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Info() {
    document.getElementById('content').innerHTML = "Programozó";
    infotab();
    document.getElementById('info').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "info") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Kornyezet() {
    document.getElementById('content').innerHTML = "Környezetvédő";
    kornyezettab();
    document.getElementById('kornyezet').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "kornyezet") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
function Kisgyermek() {
    document.getElementById('content').innerHTML = "Kisgyermekgondozó";
    kisgyermektab();
    document.getElementById('kisgyermek').className = "szak active";
    for (let i = 0; i < 8; i++) {
        if (tomb[i] != "kisgyermek") {
            document.getElementById(tomb[i]).className = "szak inactive";
        }
    }
}
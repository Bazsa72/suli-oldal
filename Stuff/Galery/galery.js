let index = 1;
function left() {
    if(index != 1) {
        index--;
        let filename = "media/" + index + ".jpg";
        document.getElementById('act').src = filename;
    }
    else {
        alert("Nincs több megjeleníthető kép ebben az irányban");
    }
    let filename = [];
    let k = 0;
    if(index == 8) {
        for(let i = 1; i < 9; i++) {
            filename[k] = "media/" + i + ".jpg";
            k++;
            for(let j = 0; j < 8; j++) {
                document.getElementById((j+1)).src = filename[j];
            }
        }
    }
    if (index == 16) {
        for (let i = 9; i < 17; i++) {
            filename[k] = "media/" + i + ".jpg";
            k++;
            for (let j = 0; j < 8; j++) {
                document.getElementById((j + 1)).src = filename[j];
            }
        }
    }
    if (index == 24) {
        for (let i = 17; i < 26; i++) {
            filename[k] = "media/" + i + ".jpg";
            k++;
            for (let j = 0; j < 8; j++) {
                document.getElementById((j + 1)).src = filename[j];
            }
        }
    }
}
function right() {
    if (index != 32) {
        index++;
        let filename = "media/" + index + ".jpg";
        document.getElementById('act').src = filename;
    }
    else {
        alert("Nincs több megjeleníthető kép ebben az irányban");
    }
    let filename = [];
    let k= 0;
    if (index == 9) {
        for (let i = 9; i < 17; i++) {
             filename[k] = "media/" + i + ".jpg";
             k++;
            for (let j = 0; j < 8; j++) {
                document.getElementById((j+1)).src = filename[j];
            }
        }
    }
    if(index == 17) {
        for (let i = 17; i < 25; i++) {
            filename[k] = "media/" + i + ".jpg";
            k++;
            for (let j = 0; j < 8; j++) {
                document.getElementById((j + 1)).src = filename[j];
            }
        }
    }
    if(index == 25) {
        for (let i = 25; i < 34; i++) {
            filename[k] = "media/" + i + ".jpg";
            k++;
            for (let j = 0; j < 8; j++) {
                document.getElementById((j + 1)).src = filename[j];
            }
        }
    }
}
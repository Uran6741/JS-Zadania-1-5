var okno3, okno4;

function WinOpen_jankowski_3() {
    okno3 = window.open('Z3_Jank.html', 'okienko_z3', 'toolbar=no,directories=no,menubar=no,height=380,width=400,top=200,left=200');
}

function WinOpen_jankowski_4() {
    okno4 = window.open('Z4_Jank.html', 'okienko_z4', 'toolbar=no,directories=no,menubar=no,height=700,width=650,top=100,left=300');
}

function okno_zamknij_jankowski_glowne() {
    window.close();
}

function okno_zamknij_jankowski_4() {
    if (okno4) okno4.close();
}
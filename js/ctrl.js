document.onkeydown = function (e) {
    e = e || window.event;//Get event

    if (!e.ctrlKey) return;

    var code = e.which || e.keyCode;//Get key code

    switch (code) {
        case 107://Block Ctrl++
        case 109://Block Ctrl+-
        case 173://Block Ctrl+-
        case 189://Block Ctrl++
            e.preventDefault();
            e.stopPropagation();    
        break;
    }
}
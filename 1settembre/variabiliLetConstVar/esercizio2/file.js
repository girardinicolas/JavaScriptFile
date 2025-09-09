// ciclo for con var
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("var: " + i);
    }, 100);
}

// ciclo for con let
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("let: " + j);
    }, 100);
}

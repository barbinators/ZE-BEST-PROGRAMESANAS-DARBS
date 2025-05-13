function filtrēt(kategorija) {
    let bildes = document.querySelectorAll(".attēls");

    for (let i = 0; i < bildes.length; i++) {
        if (kategorija === "visi" || bildes[i].classList.contains(kategorija)) {
            bildes[i].style.display = "inline-block";
        } else {
            bildes[i].style.display = "none";
        }
    }
}

function pārbaude() {
    let vārds = document.getElementById("vārds").value;
    let ziņa = document.getElementById("ziņa").value;

    if (vārds === "" || ziņa === "") {
        alert("Lūdzu, aizpildi visus laukus!");
        return false;
    }

    alert("Paldies par ziņu!");
    return true;
}
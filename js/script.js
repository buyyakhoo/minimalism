function switch_mob() {
    let x = document.getElementById("mobLink");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
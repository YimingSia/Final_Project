document.querySelector("#menu_icon").addEventListener("click", function(){
    if (document.querySelector("#burger").style.display === "none") {
        document.querySelector("#burger").style.display = "flex";
    } 
    else {
        document.querySelector("#burger").style.display = "none";
    }
});

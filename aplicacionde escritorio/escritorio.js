
const menuamburgesa = document.querySelector("#menuamburgesa")


menuamburgesa.addEventListener("click",function(){

    const men = document.getElementById("menu")
    if (men.style.display === "inline") {
        men.style.display = "none";
        btnmas.textContent="Leer mas..."
    
      } else {
        men.style.display = "inline";
        btnmas.textContent="ocultar"
      }
})

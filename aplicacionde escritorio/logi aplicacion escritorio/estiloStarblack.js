const btncheckbox = document.getElementById("btncheckbox")
const  btnbotonInicio= document.getElementById("btnbotonInicio")
const mensaje = document.getElementById("mensaje")

btnbotonInicio.addEventListener("click",function(e){
e.preventDefault()
    if (btncheckbox.checked !=""){
       window.open("http://127.0.0.1:5500/escritorio.html")
    } else {
        setTimeout(() => {
            mensaje.textContent=""
        },3000);
        mensaje.textContent="Tienes que aseptar los terminos"
        mensaje.style.color="red"   
    }
})


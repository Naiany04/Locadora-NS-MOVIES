const col1 = document.getElementById("col1");
const img = document.querySelector(".img");

col1.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft; //propriedade retorna a posição esquerda (em pixels)
    const y = e.clientY - e.target.offsetTop; //propriedade retorna a posição superior (em pixels)

    // console.log(x,y) //se der erro

    img.style.transformOrigin = `${x}px ${y}px` ; //permite alterar a posição dos elementos transformados 
    img.style.transform = "scale(2)"; //Esta prorpiedade permite girar, dimensionar, mover, inclinar, etc., elementos.

})

col1.addEventListener("mouseleave", () =>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)"
}
)
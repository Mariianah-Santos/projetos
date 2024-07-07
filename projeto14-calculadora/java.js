let botoes= document.querySelector('.botoes');
let btn = document.querySelectorAll('span');
let valor = document.getElementById('valor');
let modoEscuro = document.querySelector('.modoEscuro');
let body = document.querySelector('body');

for (let i=0; i<btn.length;i++) {
    btn[i].addEventListener("click", function() {

        if(this.innerHTML=="=") {
            valor.innerHTML = eval(valor.innerHTML);
        } else {
            if(this.innerHTML == "Limpar"){
                valor.innerHTML = "";
            }
            else {
                valor.innerHTML += this.innerHTML;
            }
        }
    })
}
modoEscuro.onclick = function() {
    body.classList.toggle('dark');

}
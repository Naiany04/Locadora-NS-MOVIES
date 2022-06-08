// // Definir variáveis universais
// var valorTotal = [0, 0, 0, 0];
// var valorProduto = [0, 500, 5, 3000];
// var qtd = [0, 0, 0, 0];

// // Trocar o nome pelo inserido no login
// function trocarNome() {
// 	var nome = document.getElementById('nome');
// 	var usuario = document.getElementById('usuario').value;
// 	nome.innerHTML = usuario;
// }

// // Aumentar a quantidade de itens de um produto
// function adicionarItem(item) {
// 	var quantidade = document.getElementById('quantidade' + item);
// 	var total = document.getElementById('total' + item);
// 	qtd[item] += 1;
// 	valorTotal[item] = valorProduto[item] * qtd[item];
// 	quantidade.innerHTML = qtd[item];
// 	total.innerHTML = valorTotal[item];
// 	console.log(quantidade);
// 	valorCompra();
// }

// // Diminuir a quantidade de itens de um produto
// function removerItem(item) {
// 	if (qtd[item] > 0) {
// 		qtd[item] -= 1;
// 		var quantidade = document.getElementById('quantidade' + item);
// 		var total = document.getElementById('total' + item);
// 		quantidade.innerHTML = qtd[item];
// 		valorTotal[item] = valorProduto[item] * qtd[item];
// 		total.innerHTML = valorTotal[item];
// 		valorCompra();
// 	}
// }

// // Remover o produto
// function removerProduto(produto) {
// 	var pai = document.getElementById('carrinho');
// 	var filho = document.getElementById('produto' + produto);
// 	if (confirm('Confirmar exclusão?')) {
// 		valorTotal[produto] -= (valorProduto[produto] * qtd[produto]);
// 		qtd[produto] = 0;
// 		pai.removeChild(filho);
// 		valorCompra();
// 	}
// }

// // Calcular o valor total da compra
// function valorCompra() {
// 	var valorTotalCompra = document.getElementById('valorTotalCompra');
// 	var valor = 0;;
// 	for (var i = 0; i < valorTotal.length; i++) {
// 		valor += valorTotal[i];
// 	}
// 	valorTotalCompra.innerHTML = valor;
// 	console.log(valorTotal.length);
// }

// // Finalizar a compra e zerar os valores
// function finalizarCompra() {
// 	var nome = document.getElementById('nome').innerHTML;
// 	alert('Obrigada pela compra, ' + nome + '!');
// 	document.location.reload(true);
// }



//js pagamento--------------------------------------------------------------

// function credito(){
//     let cc = document.getElementById("ipt2").value;
//     if(cc == false){
//         alert('');
//     }
//     else{
//         sessionStorage.setItem('ipt2',cc);
//         window.location = "carrinho.html"
//     }
// }


// function valor(){
//     document.getElementById('ipt2').value = "Parcelas: " + sessionStorage.getItem('total') + "!";
// 	alert("Valor parcelado: " + onclick(escolha()))
// }

// function escolha(){
// 	if (document.getElementById("um")){
// 		sessionStorage.getItem('total')/1;
// 	}
// 	else if(document.getElementById("dois")){
// 		sessionStorage.getItem('total')/2;
// 	}
// 	else{
// 		sessionStorage.getItem('total')/3;	
// 	}

// }

// ------------------------------------------------------------------------


//tentativa 1000
function totalAvista(){
let preco = parseFloat(sessionStorage.getItem('total'))
	window.location = "carrinho.html";
let aVista = 10;
let totalAvista = 0;


    totalAvista = (preco - (aVista /100) * preco);
    alert(`Preço: R$`+`${preco}`);
    alert(`À vista: R$`+ `${totalAvista}`);
}
if(document.getElementById('ipt1') = true){
	alert(totalAvista)
}
//---------------------------------------------------------------------
// function totalAvista(){
//     let preco = parseFloat(sessionStorage.getItem('total'))
//         window.location = "carrinho.html";
//     let totalA = 0;

//     if(document.getElementById('ipt') == true){
//         totalA = (preco - (10 /100) * preco);
//     alert(`Preço: R$${preco},00`);
//     alert(`Á vista: R$${totalAvista},00`);
//     }


// }

// function cartaoCredito(){
//     let preco = parseFloat(sessionStorage.getItem('total'))
//         window.location = "carrinho.html";

//     if(document.getElementById('ipt2') == true){
//         document.getElementById('um') = preco/1;
//         alert(`Preço: R$${preco},00`)
//     }
// }








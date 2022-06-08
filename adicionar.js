// total = 0.00;
        
//         function adiciona(id)
//         {
//             calcula(id,"adicao");
//         }
        
//         function remove(id)
//         {
//             calcula(id,"subtracao");
//         }    
            
//         function calcula(id,operacao)
//         {
//                 nomeid  = "nome"+id;
//                 precoid = "preco"+id;
//                 qtdid   = "qtd"+id;
                
//                 nome  = document.getElementById(nomeid).innerHTML;
                
//                 preco = document.getElementById(precoid).innerHTML;    
//                 preco = textoParaFloat(preco);
                
//                 qtd   = document.getElementById(qtdid).innerHTML;
//                 qtd   = parseInt(qtd) >1 <10;

//                 //Debug
//                 //alert("Produto: " + nome + "\n Preço: " + preco);    
                
//                 if(operacao=="adicao")
//                 {
//                     total = total + preco;
//                     qtd = qtd + 1;
//                 }
//                 else
//                 {
//                     total = total - preco;
//                     qtd = qtd - 1;
//                 }
                
//                 document.getElementById(qtdid).innerHTML = qtd;
 
//                 document.getElementById("total").innerHTML = floatParaTexto(total);
//         }  
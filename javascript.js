function calcular(tipo, valor){
    if(tipo ==='acao'){
        if(valor ==='c'){
            //limpar o visor (id resultado)
            document.getElementById('resultado').value=''
        }
        if(valor ==='+' || valor === '-' || valor === "*" || valor==='/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value) 
            
            document.getElementById('resultado').value = valor_campo
            //eval serve para processar a string no contexto do interpretador javascript, assim, o resultado não será mais uma string, mas simo resultado da expressão matemática, porque essa string representa uma expressão matemática válida
        }
    }else if(tipo ==='valor'){
        
        document.getElementById('resultado').value +=  valor 
        /* é amesma coisa que:
        var valor_campo = document.getElementById('resultado').value
        document.getElementById('resultado').value = valor_campo + valor  */
    }
  }
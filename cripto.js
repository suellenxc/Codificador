
/*document.getElementsByClassName('.cripto').value;

var cripto = document.getElementsByClassName('.cripto').value;
var letras = 'a,e,i,o,u'
var letrasModificadas = letras.replace("a", "ai", "e", "enter", "i", "imes", "o","ober","u","ufat")
var cripto = document.getElementsByClassName(".cripto").value;
var letrasModificadas = 

var textoResultado = document.getElementsByClassName('.cripto');
textoResultado.value = letrasModificadas

var verificar = palavrasChave.some(elementoArray => letras.includes(elementoArray));

function criptografar(textoResultado)

    /* const regex = newRegExp("^[0-9a-zA-Zb]+$");
            var teste = false
            teste = true
            if(teste ==  true){
                alert("Digite novamente");
            }
            else{
            cripto();
            console.log(cripto())


                if (verificar){
        descriptografar();
    } else {
        alert('A mensagem não está criptografada'
        }*/

        /*
        var textoDado = document.querySelector(".cripto")
            var mostra = document.querySelector(".input")
          
        
            function submit(){
                var textoResultado = encriptar(textoDado.value) 
                mostra.value = textoResultado
            }

            function encriptar(StringParaEncriptar){
            let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
            StringParaEncriptar = StringParaEncriptar.toLowerCase();
            for (let i= 0; i< matrizCodigo.length; i++){
            if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
            } 

            
                document.querySelector("descriptografar")
                document.querySelector('textoModificado');
    
        
    }
        */


            var textoDado = document.querySelector(".cripto")
            var mostra = document.querySelector(".input")
            function submit(){
                var textoResultado = encriptar(textoDado.value) 
                mostra.value = textoResultado
            }
            function encriptar(StringParaEncriptar){
                
                let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
                StringParaEncriptar = StringParaEncriptar.toLowerCase();
                for (let i= 0; i< matrizCodigo.length; i++){
                if(StringParaEncriptar.includes(matrizCodigo[i][0])){
                StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
            }
            return StringParaEncriptar;
        }

        function descriptografar(string){
            var regex = [/ai/ig,/enter/ig,/imes/ig,/ober/ig,/ufat/ig] ;
            var letras = ["a","e","i","o","u"];
            var frase = string;
        
            for(var i = 0 ; i < regex.length ;i++){
                var ocorrencias = frase.replace(regex[i], letras[i]);
                frase = ocorrencias;
            }
            return frase
        }
        var texto = document.querySelector(".input")
        function descript(frase){
            var frase = descriptografar(texto.value)
            texto.value = frase
        }
        var texto = document.querySelector(".input")
        function copiar (texto){
        navigator.clipboard.writeText(texto.value)
        
        } 


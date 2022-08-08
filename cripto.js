



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
        function copiar (texto)
        {
        navigator.clipboard.writeText(texto.value)
        alert("Seu texto foi copiado!")     
        /*
        {if (confirm (texto) == true) {
            texto = "Seu texto foi copiado!";
        }
        else {texto = "Seu texto não foi copiado";}
    }
    document.getElementById(".input").innerHTML = texto;*/
      }
        

        
            
        


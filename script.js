    // estado da minha aplicação
    let numero = 0 

    //alteradores de estados da aplicação
    function mais() {
        numero = numero + 1  
        mostrarNaTela()
    }

    function menos() {
        numero = numero - 1
        mostrarNaTela()
    }

    // jogar o estado da aplicação na tela
    function mostrarNaTela(){
        const p = document.querySelector("#resultado")
        
        p.innerText = numero
    }

    // iniciar
    mostrarNaTela()

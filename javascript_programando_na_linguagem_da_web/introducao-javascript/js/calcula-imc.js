    /*console.log("Olá, Mundo!");
    console.log(document);*/
    var titulo = document.querySelector(".titulo");
   // console.log(titulo);	
   // console.log(titulo.textContent);	
    titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente");


    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var pesoEhvalido = true;
        var alturaEhvalida = true;

        /*console.log(paciente); // tr
        console.log(tdPeso); // td que tem o peso
        console.log(peso); // obter 100

        console.log(tdAltura); // td que tem a altura
        console.log(altura); // obter 2.00*/

        var tdImc = paciente.querySelector(".info-imc")

        if(altura <= 0 || altura >= 3) {
            console.log("Altura inválida!");
            alturaEhvalida = false;
            tdImc.textContent = "Altura inválida!!!";
            paciente.classList.add("paciente-invalido")
        }
        
        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            pesoEhvalido = false;
            tdImc.textContent = "Peso inválido!!!";
            paciente.classList.add("paciente-invalido")
        }

        if ((peso <= 0 || peso >= 1000) && (altura <= 0 || altura >= 3)) {
            tdImc.textContent = "Peso e altura inválidos!";
            paciente.classList.add("paciente-invalido")
        }

        if (pesoEhvalido && alturaEhvalida
            ) {
            var imc = calculaImc(peso, altura);
            tdImc.textContent = imc
        }

        /*console.log(tdImc); 
        console.log(imc);*/
    }


    /*titulo.addEventListener("click", mostraMensagem);

    function mostraMensagem() {
        console.log("Olá fui clicado!");
    }*/

    /*titulo.addEventListener("click", function() {
        console.log("Essa é uma função anônima!");
    })*/

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);;
}
    /*console.log("Olá, Mundo!");
    console.log(document);*/
    var titulo = document.querySelector(".titulo");
    console.log(titulo);	
    console.log(titulo.textContent);	
    
    titulo.textContent = "Aparecida Nutricionista";

    var paciente = document.querySelector("#primeiro-paciente");
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    /*console.log(paciente); // tr
    console.log(tdPeso); // td que tem o peso
    console.log(peso); // obter 100

    console.log(tdAltura); // td que tem a altura
    console.log(altura); // obter 2.00*/

    var imc = peso / (altura * altura);

    console.log(imc);
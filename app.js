const nombreRegistrar = document.getElementById('nombreRegistrar');
const animalRegistrar = document.getElementById('animalRegistrar');
const edadRegistrar = document.getElementById('edadRegistrar');
const razaRegistrar = document.getElementById('razaRegistrar');
const estadoRegistrar = document.getElementById('estadoRegistrar');
const btnGuardar = document.getElementById('btnGuardar');


   
btnGuardar.addEventListener('click', () => {

    const nombre = nombreRegistrar.value;
    const animal = animalRegistrar.value;
    const edad = edadRegistrar.value;
    const raza = razaRegistrar.value;
    const estado = estadoRegistrar.value;

    const animalito = {

        nombre: nombre,
        animal,
        edad,
        raza,
        estado
    }

    console.log(animalito);
    const jsonString = JSON.stringify(animalito);
    console.log(jsonString);
    localStorage.setItem('animalito', jsonString)
    

});

document.addEventListener('DOMContentLoaded', () => {

    const dataLocal = localStorage.getItem('animalito');
    if(dataLocal){

        console.log('hay datos en local storage')
        console.log(dataLocal)
        const animalitox = JSON.parse(dataLocal)
        console.log('datos parseados c:')
        console.log(animalitox)

        nombreRegistrar.value = animalitox.nombre;
        animalRegistrar.value = animalitox.animal;
        edadRegistrar.value = animalitox.edad;
        razaRegistrar.value = animalitox.raza;
        estadoRegistrar.value = animalitox.estado;

    }

});

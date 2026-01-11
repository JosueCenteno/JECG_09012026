const btnMultiplicar = document.getElementById("btnMultiplicar");

btnMultiplicar.addEventListener("click", () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = n1 * n2;

    document.getElementById("resultado").value = resultado;
});


class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

const btnRegistrar = document.getElementById("btnRegistrar");

btnRegistrar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    const persona = new Persona(nombre, apellido);
    document.getElementById("nombreCompleto").value = persona.getNombreCompleto();
});

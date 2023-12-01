class lenguajeProg {
    constructor(nombre, categoria, interpretado, fechaCreacion){
        this.nombre = nombre;
        this.categoria = categoria || "POO";
        this.interpretado = interpretado || false;
        this.fechaCreacion = fechaCreacion;
    }

    setCategoria(categoria){
        this.categoria = categoria;
        interpretado = true;
    }

    setInterpretado(interpretado){
        this.interpretado = interpretado;
    }
}

let lenguaje1 = new lenguajeProg("Java","","",1980);
console.log(lenguaje1);
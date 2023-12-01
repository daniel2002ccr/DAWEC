function pruebaPOO (){
let lenguajeProg={

    nombre: "Java",
    categoria: "Lenguaje orientado a objetos",
    interpretado: true,
    fechaCreacion: 1980,
    setCategoria: function(categoria) {
        this.categoria = categoria,
        this.interpretado = false;
    },
    setInterpretado: (interpretado) => this.interpretado = interpretado,
    setNombre: (nombre) => this.nombre = nombre,
    setFechaCreacion: (fecha) => this.fecha = fecha,
  /*  getInfoLenguaje: () => "InfoLenguaje " + " " + lenguajeProg.nombre + lenguajeProg.categoria + lenguajeProg.interpretado + lenguajeProg.fechaCreacion */
    getInfoLenguaje (){
        return this.nombre, this.categoria, this.interpretado, this.fechaCreacion;
    }
};

lenguajeProg.setCategoria("POO");
console.log(lenguajeProg.categoria);
console.log(lenguajeProg.interpretado);
}

pruebaPOO();
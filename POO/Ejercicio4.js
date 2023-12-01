
    class fecha {
        constructor(dia, mes, ano) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }

        static getFecha() {
            var fecha = new Date();
            var dia = fecha.getDate();
            var mes = fecha.getMonth() + 1;
            var ano = fecha.getFullYear();

            return new fecha(dia, mes, ano);
        }

        toString() {
            return this.ano;
        }
    
    }
    let fecha1 = new fecha(1, 12, 1991);
    let fecha2 = new fecha(25, 12, 2002);
    let fecha3 = new fecha(12, 10, 1971);
    let fecha4 = new fecha(25, 12, 2012);
    let fecha5 = new fecha(1, 12, 1998);
    let fecha6 = new fecha(11, 12, 2002);

    console.log(fecha1);
    console.log(fecha2);

    let array = [fecha1, fecha2, fecha3, fecha4, fecha5, fecha6];

    array.sort();
    console.log(array);
    console.log(array[0].toString());
   
(() => {
    interface Alumno{
        matricula: number,
        nombre: string,
        edad: number,
        correo: string,
        grupo: Grupo,
    }

    interface Grupo{
        grupo: string,
        anio: number,
    }

    const alumno: Alumno = {
        matricula: 12312312,
        nombre: 'Ivan',
        edad: 20,
        correo: 'correo@gmail.com',
        grupo: {
            grupo: 'IDGS904',
            anio: 2020,
        },
    };

    const {matricula, nombre, edad, correo, grupo: grupoObj} = alumno;
    const { grupo, anio } = grupoObj;
    console.log(matricula, nombre, edad, correo, grupo);
    console.log(grupo, anio);
    console.log({alumno});

    const groups: string[] = ['IDGS','IEVN','REDES'];
    // console.log(`grupo 1: ${gps[0]}`);
    // console.log(`grupo 2: ${gps[1]}`);
    // console.log(`grupo 3: ${gps[2]}`);
    const [ programming, desing, security ] = groups;
    console.log(`grupo 1: ${programming}`);
    console.log(`grupo 2: ${desing}`);
    console.log(`grupo 3: ${security}`);

})

(() => {
    interface Alumno {
        matricula: number,
        nombre:string,
        edad: number,
        correo?: string,
    }

    const ivan: Alumno = {
        matricula: 123123,
        nombre: 'Ivan',
        edad: 10,
        correo: 'ivan@gmail.com',
    };

    let vector2: Array<number> = [1,2,3,4];
    vector2.push(32);

    console.log(vector2);

})
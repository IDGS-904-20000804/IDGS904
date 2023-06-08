(() => {
    var num1 = 123;
    let num2 = 321;
    const num3 = 111;

    let version: number = 2.32;
    version = 3,42;
    let nombre: string = 'Ivan';
    let activo: boolean = false;
    let matricula: number|string = 21312;
    matricula = '21312';

    let vector: number[] = [1,2,3,4];
    vector[2] = 8;
    vector.push(9);
    vector.forEach(v => console.log(v));
    console.log(matricula);
    console.log(vector);
})
function sumar( a: number, b: number ): void {
    console.log(a+b);
}
function sumarR( a: number, b: number ): number {
    return a+b;
}
console.log('El resultado de sumar es:');
sumar( 2, 3 );
const resultado = sumarR( 2, 3 );
console.log(`${resultado}`);


function multiplicar(
    n3: number,
    n4: number,
    n5: number = 20,
): number {
    let tem = n3*n5;
    return tem;
}

console.log(multiplicar(2,3));

interface Mascota{
    nombre: string,
    edad: number,
    mostrarEdad:() => void;
}

function datosMascota( mascota: Mascota, x: number): void {
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota: Mascota = {
    nombre: 'mascota de ivan',
    edad: 2,
    mostrarEdad(): void {
        console.log('La edad es: ' + this.edad);
    },
}

datosMascota( nuevaMascota, 20);
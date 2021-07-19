/*
    ===== Código de TypeScript =====
*/


//cuando el error no es critico o la sintaxis sea valida porque typescript siempre va a intentar traducir a js

function sumar( a: number ,b: number ) : number
{
    return a+b;
}

const sumarFlecha = (a: number, b: number) : number => {
    return a + b;
}

function multiplicar(numero, otroNumero, base)
{

}

const resultado = sumar(1,2);
console.log(resultado);
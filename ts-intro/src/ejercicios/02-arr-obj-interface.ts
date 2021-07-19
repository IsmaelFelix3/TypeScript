/*
    ===== Código de TypeScript =====
*/


let habilidades: string[] = ['Bash' , 'Counter', 'Healing'];

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    //el ? vuelve la propiedad opcional
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strinder',
    hp: 100,
    habilidades:['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Gotham';

console.table(personaje);
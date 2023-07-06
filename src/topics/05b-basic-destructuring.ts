const dbz: string[] = ["Goku", "Vegetas", "Trunks"];

console.log("personaje 3= ", dbz[2] || "personaje no encontrado");

const [p1, p2, trunks]: string[] = ["Goku", "Vegetas", "Trunks"]; //con destructuring

// const [,,trunks]:string[]=["Goku", "Vegetas", "Trunks"]; se puede separar por comas hasta llegar al elemento [,,trunks='not found']=>asigno valor por defecto en caso de no tenerlo
console.log(trunks);
 

export {};

import { Categoria } from "./categoria"; // Asegúrate de que esta importación apunte al archivo correcto
import { Persona } from "./persona"; // Asegúrate de que esta importación apunte al archivo correcto

export class Gasto {
    idGasto: number = 0;
    persona: Persona = new Persona();
    descripcion: string = '';
    monto: number = 0;
    fecha: Date = new Date();
    categoria: Categoria = new Categoria(); // Asegúrate de que exista la clase Categoria
}

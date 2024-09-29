import { Persona } from "./persona";

export class Usuario {
    idUsuario: number = 0;
    nombreUsuario: string = '';
    contrasena: string = '';
    rol: string = '';
    persona: Persona = new Persona();
}

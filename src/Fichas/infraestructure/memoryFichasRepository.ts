import { Ficha } from "../domain/Ficha";
import { FichaRepository } from "../domain/interfaces/FichaRepository";

export class InMemoryFichasRepository implements FichaRepository{
    

    getByVencimiento(vencimiento: Date): Array<Ficha> {
        return [new Ficha(8108)];
    }

 }
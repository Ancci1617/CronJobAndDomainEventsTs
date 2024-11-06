import { Ficha } from "../Ficha";

export interface FichaRepository{

    getByVencimiento(vencimiento : Date) : Array<Ficha>;

    

}
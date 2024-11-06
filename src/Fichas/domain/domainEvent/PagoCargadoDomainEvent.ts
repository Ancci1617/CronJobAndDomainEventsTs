import { DomainEvent } from "../../../shared/domain/DomainEvent";
import { Ficha } from "../Ficha";


export class PagoCargadoDomainEvent extends DomainEvent{
    public static eventName : string = 'pago.cargado';

    constructor(private ficha : Ficha) {
        super();
    }
    
    getFicha() : Ficha{
        return this.ficha
    }

}   
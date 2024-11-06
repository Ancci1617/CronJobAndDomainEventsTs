import { EventBus } from "../../shared/domain/interfaces/EventBus";
import { PagoCargadoDomainEvent } from "../domain/domainEvent/PagoCargadoDomainEvent";
import { Ficha } from "../domain/Ficha";

export class CargarPagoService{


    constructor(private eventBus : EventBus){

    }


    run(){

        //logica carga el pago


        this.eventBus.publish(new PagoCargadoDomainEvent(new Ficha(8108)));

    }

}
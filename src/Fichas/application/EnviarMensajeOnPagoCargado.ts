import { DomainEventSubscriber } from "../../shared/application/domainEvent/DomainEventSubscriber";
import { DomainEvent, DomainEventClass } from "../../shared/domain/DomainEvent";
import { PagoCargadoDomainEvent } from "../domain/domainEvent/PagoCargadoDomainEvent";

export class EnviarMensajeOnPagoCargado implements DomainEventSubscriber{


    constructor(){

    }


    listenTo() : DomainEventClass{

        return PagoCargadoDomainEvent;
    }


    async execute(event: PagoCargadoDomainEvent): Promise<void> {
        //lA LOGICA PARA ENVIAR EL MENSAJE   
    }
    
}
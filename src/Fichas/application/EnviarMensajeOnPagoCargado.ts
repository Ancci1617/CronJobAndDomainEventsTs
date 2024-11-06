import { DomainEventSubscriber } from "../../shared/application/domainEvent/DomainEventSubscriber";
import { DomainEvent, DomainEventClass } from "../../shared/domain/DomainEvent";
import { EventBus } from "../../shared/domain/interfaces/EventBus";
import { PagoCargadoDomainEvent } from "../domain/domainEvent/PagoCargadoDomainEvent";

export class EnviarMensajeOnPagoCargado implements DomainEventSubscriber<PagoCargadoDomainEvent>{


    constructor(){
        
    }


    listenTo() : DomainEventClass{

        return PagoCargadoDomainEvent;
    }




    async execute(event: PagoCargadoDomainEvent): Promise<void> {
        // if(!(event instanceof PagoCargadoDomainEvent)) return;
        
        //lA LOGICA PARA ENVIAR EL MENSAJE
        const ficha = event.getFicha();

        console.log("ENVIANDO MENSAJE A FICHA: ",ficha);
    }
    
}




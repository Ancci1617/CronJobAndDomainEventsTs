import { PagoCargadoDomainEvent } from "../Fichas/domain/domainEvent/PagoCargadoDomainEvent";
import { enviarMensajeOnPagoCargado } from "../Fichas/infraestructure/dependencies";
import { DomainEventSubscriber } from "../shared/application/domainEvent/DomainEventSubscriber";
import { DomainEvent, DomainEventClass } from "../shared/domain/DomainEvent";
import { eventBus } from "../shared/infraestructure/dependencies";

class DummyDomainEvent implements DomainEvent{
    static eventName : string = 'not.implemented';

    eventName: string = 'myDomainEvent';



}

export class AnotherSubscriber implements DomainEventSubscriber<DummyDomainEvent>{
    listenTo(): DomainEventClass {
        return DummyDomainEvent;
    }
    async execute(event: PagoCargadoDomainEvent): Promise<void> {



    }
    

}

export function registerDomainEvents(){
    const sub2 = new AnotherSubscriber();
    const subscribers = [
        sub2,
        enviarMensajeOnPagoCargado,
    ]



    eventBus.addSubscribers<DomainEvent>(subscribers);

}

import { EventEmitter } from "stream";
import { DomainEvent, DomainEventClass } from "../domain/DomainEvent";
import { EventBus } from "../domain/interfaces/EventBus";
import { DomainEventSubscriber } from "../application/domainEvent/DomainEventSubscriber";
import { isClassLike } from "typescript";


export class InMemoryEventBus implements EventBus{
    
    private emitter  = new EventEmitter();



    async publish(event: DomainEvent): Promise<void> {

        this.emitter.emit(event.eventName,event);        

    }

    async addSubscribers<T extends DomainEvent>(subscribers: Array<DomainEventSubscriber<T>>) {

        subscribers.forEach(subscriber => {
            const eventName = subscriber.listenTo().eventName;

            this.emitter.on(eventName,subscriber.execute.bind(subscriber));

        })

    }




}

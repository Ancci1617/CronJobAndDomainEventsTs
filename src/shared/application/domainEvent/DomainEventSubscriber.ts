import { DomainEvent, DomainEventClass } from "../../domain/DomainEvent"

export interface DomainEventSubscriber<T extends DomainEvent> {
    listenTo(): DomainEventClass;

    execute(event : T): Promise<void>

}




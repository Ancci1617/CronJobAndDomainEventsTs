import { DomainEvent, DomainEventClass } from "../../domain/DomainEvent"

export interface DomainEventSubscriber {
    listenTo(): DomainEventClass

    execute(event : DomainEvent): Promise<void>

}
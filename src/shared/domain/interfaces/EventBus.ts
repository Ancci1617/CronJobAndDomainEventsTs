import { DomainEventSubscriber } from "../../application/domainEvent/DomainEventSubscriber";
import { DomainEvent } from "../DomainEvent";

export interface EventBus{

    publish(event : DomainEvent) : Promise<void>;

    addSubscribers(subscribers: Array<DomainEventSubscriber>) : Promise<void>;

    
}
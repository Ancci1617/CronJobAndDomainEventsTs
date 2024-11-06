
export abstract class DomainEvent{
    static eventName : string = 'not.implemented';
    readonly eventName : string = 'not.implemented';
    

}

export type DomainEventClass = {
    eventName : string

};


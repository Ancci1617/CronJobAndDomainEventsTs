
export abstract class DomainEvent{
    static eventName : string = 'not.implemented';
    readonly abstract eventName : string ;
    

}

export type DomainEventClass = {
    eventName : string

};


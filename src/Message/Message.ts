export class Message{

    constructor(
        private text : string
    ){

    }

    toPrimitives(){
        return {
            text : this.text
        }
    }

}
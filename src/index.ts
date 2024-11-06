import { ClassDeclaration, ClassElement, DeclarationStatement, isDeclarationStatement, isTypeNode } from "typescript";
 class DomainEvent{

    public static domainEventName : string;
    

}



type DomainEventClass = {

    domainName : string

}





abstract class  AbsClass{
    
    public static domainName : string = 'domain.name.value';


}
class A extends AbsClass{
    public static domainName: string = 'A.new.domain.name';
    static staticMethodClassA(){
        console.log("Runnning static method")
    } 

    public method(){
        console.log("Runnning method")
    }
}
class B extends AbsClass{
    public static domainName: string = 'B.new.domain.name';
}
type typeAbs = typeof AbsClass;
function n() : typeAbs{

    return A;
}

const myClass : typeAbs = n();



if(myClass == A){
    let aInstance : A = new (myClass as A)();
    

    

    
    

}





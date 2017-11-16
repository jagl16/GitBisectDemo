import {SimpleDI} from './di/SimpleDI';

const DI = SimpleDI.Instance;

export class App{
    
    public Initialize(){
        
    }
    
    public Start() : void{
        console.log("Application started");
    }
}
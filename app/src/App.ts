import {SimpleDI} from './di/SimpleDI';
import {IFibonacciRepository} from './api/utils/IFibonacciRepository';
import {FibonacciRepository} from './api/utils/FibonacciRepository';

const DI = SimpleDI.Instance;

export class App{
    
    public Initialize(){
        DI.register<IFibonacciRepository>("IFibonacciRepository",new FibonacciRepository());
    }
    
    public Start() : void{
        console.log("Application started");
    }
}
import {IFibonacciRepository} from './IFibonacciRepository';

/**
 * This class calculates the Fibonacci number using simple for loops.
 * @author Jesus Garcia
 */
export class FibonacciRepository implements IFibonacciRepository{
    /**
     * Calculates the fibonnaci value of a number using simple
     * for loops.
     * @param value fibbonaci number
     */
    calculate(num: number): number {
        if(num <=1) return 1;
        var a = 1, b = 0, temp;
        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }
}
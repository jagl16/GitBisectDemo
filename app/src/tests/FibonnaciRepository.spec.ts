
 /**
 * @author: Jesus Garcia
 * @description: Test to verify th fibonacci calculator
 * generates the expected result.
 */

import * as mocha from 'mocha';
import * as chai from 'chai';

import {IFibonacciRepository} from '../api/utils/IFibonacciRepository';
import {SimpleDI} from '../di/SimpleDI';
import {App} from '../App';
let app : App = new App();
app.Initialize();

const expect = chai.expect;
const FibonnaciRepository  = SimpleDI.Instance.resolve<IFibonacciRepository>('IFibonacciRepository');

describe('Fiboonnaci calculator - ', () => {

    it('Calculates the fibonnaci of 0 = 0', () => {
        var result = FibonnaciRepository.calculate(0);
        expect(result).to.equal(0);
    });
    
    it('Calculates the fibonnaci of 1 = 1', () => {
        var result = FibonnaciRepository.calculate(1);
        expect(result).to.equal(1);
    });

    it('Calculates the fibonnaci of 2 = 1', () => {
        var result = FibonnaciRepository.calculate(1);
        expect(result).to.equal(1);
    });

    it('Calculates the fibonnaci of 5 = 8', () => {
        var result = FibonnaciRepository.calculate(5);
        expect(result).to.equal(8);
    });

    it('Calculates the fibonnaci of 60 = 2504730781961', () => {
        var result = FibonnaciRepository.calculate(60);
        expect(result).to.equal(2504730781961);
    });
});
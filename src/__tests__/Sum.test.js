import {Sum} from '../component/Sum.js';

test(" check the sum of two number ",()=>{
    const res= Sum(3,7);
    //Assertion 
    expect(res).toBe(10);
})
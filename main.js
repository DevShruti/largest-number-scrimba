function largestNumber(num) {
    const placeholder = '9'.repeat(num);
    // let placeholder = '';
    
    //for(let i = 0; i < num; i++) {
       // placeholder = placeholder.concat('9');
   // }
    
    return parseInt(placeholder);
}



/**
* Test Suite 
*/
describe('largestNumber()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const num = 2;
        
        // act
        const result = largestNumber(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(99);
    });
});
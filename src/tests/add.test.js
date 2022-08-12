const add = (a, b) => a + b ;

test('should add two number', () => {
    const result = add(2, 6);
    
    // if(result !== 8){
    //     throw new Error(`You added 2 and 6. The result was ${result}. We expected it to be 8`)
    // }

    expect(result).toBe(8);
})
describe('Test Example', () => {
    it('returns true', () => {
        expect(true).toBe(true);
    });
});

function insertDashes(str) {
    // write code here  
}

/**
* Test Suite
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value ="aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    }); 
});

class User {
    firstName;
    lastName;
    middleName;

    constructor (data = {}){
        this.firstName = data.firstName || '';
        this.lastName = data.lastName || '';
        this.middleName = data.middleName || '';

    }
}
 //**
 //* Test Suite

describe(`${User.name} Class`.() => {
   
});
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

describe(`${User.name} Class`,() => {
    describe('default values', () => {
        it('first name defaults to empty', () => {
        // arrange
        const data = { firstName: null };

        //act
        const model = new User(data); 

        //assert
        expect(model.firstName).toBe('');
        }); 

        it('last name defaults to empty', () => {
            // arrange
            const data = { lastName: null };
    
            //act
            const model = new User(data); 
    
            //assert
            expect(model.lastName).toBe('');         
        });

        it('middle name defaults to empty', () => {
        // arrange
        const data = { middleName: null };

        //act
        const model = new User(data); 

        //assert
        expect(model.middleName).toBe('');
        });
   });
});

// Unit Testing: Setting up data with beforeEach

describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();        
    });

    describe('first name defaults to empty', () => {
      it('first name defaults to empty', () => {
        //assert
        console.log(1)
        expect(model.firstName).toBe('');
      });
     
      it ('last name defaults to empty', () => {
           //assert
           console.log(2)
           expect(model.lastname).toBe('');        
      });

      it ('middle name defaults to empty', () => {
           // assert
           console.log(3)
           expect(model.middleName).toBe('');
      });
   });

   describe('full name', () => {
      beforeEach(() => {
        model = new User({ firstName: 'Arzu', lastName: 'Caner' 
      });

      it('middle initial when middleName is defined with first and last', () => {
        //arrange
        model.middleName = 'guney';

        //act
        const result = model.fullName;

        //assert
        expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);

       });

       it('when no middle name return just first and last', () => {
        //arrange
        model.middleName = '';

        //act
        const result = model.fullName;

        //assert
        expect(result).toBe(`${model.firstName} ${model.lastName}`);

        });
    });
});

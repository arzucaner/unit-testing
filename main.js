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

// Test Suite
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();
    });

    describe('say my name', () => {
        it('alerts the full name of user', () => {
            //arrange
            model.firstName = "Arzu";
            model.lastName = "Caner";
            spyOn(window, 'alert');

            //act
            model.sayMyName();

            //assert
            expect(window.alert).toHaveBeenCalled();
            expect(window.alert).toHaveBeenCalledWith('Arzu Caner');
        })
    });
    
});

// Test Suite 2
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();
    });

    describe('get code name', () => {
        it('is a testing god when confirmed', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);

            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe('TESTING GOD!');
        });

        it('is a scrub when not doing testing', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(false);

            //act
            const result = model.getCodeName();

            //assert
            expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
        });

        it('asks a user if they are a testing god', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);

            //act
            const result = model.getCodeName();

            //assert
            expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`);
        });
    });
  }); 
});

// Unit Testing: Mocks

// Test Suite
describe(`${User.name} Class`, () => {
    let model;
    let mockUserService;

    beforeEach(() => {
        mockUserService = {
            lastId: null,
            user: {},
            getUserById(id) {
                this.lastId = id;

                return this.user;                
            }
        };
        const data = { firstName: 'Arzu', middleName: 'Guney', LastName: 'Caner', id: 1 };
        model = new User(data, mockUserService);
    });

    describe('getMyFullUserData', () => {
        it('gets user data by id', async () => {
            //arrange
            mockUserService.lastId = null;
            mockUserService.user = new User(
                {firstName: 'Mazhar', middleName: 'Fuat', lastName: 'Ozkan', id: 2 }
                )
            // act
            const result = await model.getMyFullUserData();
            // assert
            expect(mockUserService.lastId).toBe(1);
        });        
    });
});

// Unit Testing: Additional Matchers

// Test Suite
describe(`${User.name} Class`, () => {
    it('exists', () => {
        //assert
        expect(User).toBeDefined();
    });

    let model;

    beforeEach(() => {
        model = new User();        
    });

    describe('additional matchers examples', () => {
        // tobeDefined(), toEqual()
        it('gets full name pieces', () => {
           //arrange
           const firstName = 'Arzu';
           const middleName = 'Guney';
           const lastName = 'Caner';

           //act
           model = new User({firstName, middleName, lastName});

           //assert
           expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
        })
    });
});


import { Greetings, Greet } from '../src/Hello';

describe('verify greetings', () => {
    it('greet from class', () => {
        //Arrange
        let expectedMessage = 'Hello from typescript class!';
        let greeter = new Greetings();

        // Act
        let result = greeter.sayHello();

        // Assert
        expect(result).toEqual(expectedMessage);
    })

     it('greet from function', () => {
        //Arrange
        let expectedMessage = 'Hello from typescript function!';        

        // Act
        let result = Greet();

        // Assert
        expect(result).toEqual(expectedMessage);
    })
});
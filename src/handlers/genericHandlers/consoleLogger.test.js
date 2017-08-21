/*eslint-disable no-undef*/
import ConsoleLogger from './consoleLogger';

describe('logRequestToConsole', () =>{
  test('should call next()', () => {
    // Arrange
    const req = { method: 'get', ip: '127.0.0.1', originalUrl: 'google.com' };
    const mockNext = jest.fn();
    
    // Act
    ConsoleLogger.logRequestToConsole(req, null, mockNext);

    // Assert
    expect(mockNext.mock.calls.length).toBe(1);
    expect(mockNext.mock.calls[0].length).toBe(0);
  });
});

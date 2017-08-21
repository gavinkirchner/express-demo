/*eslint-disable no-undef*/
import consoleLogger from './consoleLogger';

describe('logRequestToConsole', () =>{
  test('should call next()', () => {
    const req = { method: 'get', ip: '127.0.0.1', originalUrl: 'google.com' };
    const mockNext = jest.fn();
    
    consoleLogger(req, null, mockNext);

    expect(mockNext.mock.calls.length).toBe(1);
    expect(mockNext.mock.calls[0].length).toBe(0);
  });
});

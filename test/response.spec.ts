import { assert } from 'chai';
import { clientError, ok, serverError } from '../src/aws/response';

describe('aws/response', () => {
  it('should return a response with status code 200', () => {
    const response = ok({});
    assert.equal(response.statusCode, 200, 'Returned wrong status code');
  });

  it('should return a response with status code 400', () => {
    const response = clientError({});
    assert.equal(response.statusCode, 400, 'Returned wrong status code');
  });

  it('should return a response with status code 500', () => {
    const response = serverError({});
    assert.equal(response.statusCode, 500, 'Returned wrong status code');
  });

  it('should be able to handle both object and string input', () => {
    let okResponse = ok({});
    assert.equal(okResponse.body, '{}', 'Returned wrong body');

    okResponse = ok('hello');
    assert.equal(okResponse.body, 'hello', 'Returned wrong body');

    let clientErrorResponse = clientError({});
    assert.equal(clientErrorResponse.body, '{}', 'Returned wrong body');

    clientErrorResponse = clientError('hello');
    assert.equal(clientErrorResponse.body, 'hello', 'Returned wrong body');

    let serverErrorResponse = serverError({});
    assert.equal(serverErrorResponse.body, '{}', 'Returned wrong body');

    serverErrorResponse = serverError('hello');
    assert.equal(serverErrorResponse.body, 'hello', 'Returned wrong body');
  });
});

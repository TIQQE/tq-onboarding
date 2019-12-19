import { assert } from 'chai';
import { hello } from '../src/hello/handler';

describe('hello', () => {
  it('should be a function function', () => {
    assert.isFunction(hello, 'Please investigate why hello is not a function! It should be! It really, really should be!');
  });

  it('should do correct callback', async () => {
    let event: any = {};
    let context: any = {};
    const response = await hello(event, context);
    assert.equal(response.statusCode, 200, 'Should return 200');
  });
});

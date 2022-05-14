const assert = require('assert');
const app = require('../../src/app');

describe('\'echo\' service', () => {
  it('registered the service', () => {
    const service = app.service('echo');
    assert.ok(service, 'Registered the service');
  });

  it('Gives back the same thing that is sent to it', async () => {
    const message = 'Hello there'
    const data = { message }

    const result = await app.service('echo').create(data)
    assert.deepStrictEqual(result, data, 'Should contain the same data')
  })
});

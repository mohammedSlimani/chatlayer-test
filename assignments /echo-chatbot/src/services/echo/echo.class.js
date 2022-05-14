/* eslint-disable no-unused-vars */
exports.Echo = class Echo {
  constructor (options) {
    this.options = options || {};
  }

  /**
   * This one gets called when the user send something. Returns the same thing that the user sent
   * @param data
   * @param params
   * @returns {Promise<unknown>}
   */
  create (data, params) {
    return Promise.resolve(data);
  }

}

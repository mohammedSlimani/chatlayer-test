import ApiHandler from "./ApiHandler";

/**
 * This definition is duplicated here
 * @typedef messageObj
 * @type {object}
 * @property {"bot" | "user"} creator - the creator of the message
 * @property {string} message - the body of the message
 */

export class Api {
  /**
   *  Make an Api object that exposes the end points of the system
   * @param ApiHandler - the wrapper around the api.
   */
  constructor (ApiHandler) {
    this.ApiHandler = new ApiHandler()
  }

  /**
   *
   * Send a message to the bot api. If it fails then it replies with an error for the user
   * @param message
   * @returns {Promise<messageObj>}
   */
  async sendMessageToBot(message) {
    const result = await this.ApiHandler.post('/echo', { message }).catch(err => {
      console.log('Failed to send the message to the user')
      return {
        message: `Failed to send this message, reason: ${err.message}`
      }
    })

    return {
      message: result.message,
      creator: 'bot'
    }
  }

}

/**
 * By default, the ApiHandler is the same one that we defined
 * @returns {Api}
 */
export default () => {
  return new Api(ApiHandler)
}

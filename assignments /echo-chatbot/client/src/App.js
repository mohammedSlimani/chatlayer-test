import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Message from './Components/Message/Message'
import { useState } from 'react'
import Api from './Utility/Api'
import Input from './Components/Input/Input'

/**
 * @typedef messageObj
 * @type {object}
 * @property {"bot" | "user"} creator - the creator of the message
 * @property {string} message - the body of the message
 */


function App() {
  const myApi = Api()

  const customMessages = [
    {
      creator: 'bot',
      message: 'I am a parrot I repeat everything that you tell me!'
    }
  ]

  // a list of messageObj
  const [messages, setMessages] = useState(customMessages)
  // a flag of when the bot is responding, the user cannot send a message if the bot didn't respond yet
  const [loading, setLoading] = useState(false)

  /**
   * Adds a message to the list of messages
   * @param {messageObj} message
   */
  const pushMessage = (message) => {
    messages.push(message)
    setMessages(messages)
  }

  /**
   *Sends a message to the bot and gets back a response.
   * @param userMessage
   */
  const respondToMessage = async (userMessage) => {
    const result = await myApi.sendMessageToBot(userMessage)
    pushMessage(result)
  }

  /**
   * Send a message of the user to the bot and responds to it
   * @param userMessage
   * @returns {Promise<void>}
   */
  const sendMessage = async (userMessage) => {
    pushMessage({
      message: userMessage,
      creator: "user"
    })
    setLoading(true)
    await respondToMessage(userMessage)
    setLoading(false)
  }

  return (
    <div className="msger">
      <Header/>

      <main className="msger-chat">
        {messages.map(msg => <Message message={msg} />)}
      </main>

      <Input loading={loading} onSubmit={sendMessage}/>
    </div>

  );
}

export default App;

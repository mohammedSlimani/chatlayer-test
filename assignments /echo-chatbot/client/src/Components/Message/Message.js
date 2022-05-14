import './Message.css'

/**
 * This definition is duplicated here. Should handle it better
 * @typedef messageObj
 * @type {object}
 * @property {"bot" | "user"} creator - the creator of the message
 * @property {string} message - the body of the message
 */

/**
 *
 * @param props
 * @param {messageObj} props.message
 * @returns {JSX.Element}
 * @constructor
 */
export default function Message(props) {
  const messageObj = props.message
  const direction = messageObj.creator === "bot" ? "left" : "right"
  const name = messageObj.creator === "bot"? "BOT" : "YOU"
  return (
    <div className={`msg ${direction}-msg`}>
      <div
        className="msg-img"
        style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
      />

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{name}</div>
        </div>

        <div className="msg-text">{messageObj.message} </div>
      </div>
    </div>

  )
}

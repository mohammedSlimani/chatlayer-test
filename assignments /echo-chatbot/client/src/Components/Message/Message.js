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
  const bgImage = messageObj.creator === "bot"?
    "https://icons.iconarchive.com/icons/martin-berube/character/256/Robot-icon.png"
    : "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/256/User-blue-icon.png"
  return (
    <div className={`msg ${direction}-msg`}>
      <div
        className="msg-img"
        style={{backgroundImage: `url(${bgImage})`}}
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

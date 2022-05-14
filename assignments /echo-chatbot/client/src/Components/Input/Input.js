import './Input.css'
import {useState} from "react";

export default function (props) {
  const [userMessage, setUserMessage] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(userMessage)
    setUserMessage('')
  }

  const onChange = (e) => {
    setUserMessage(e.target.value)
  }

  const disabledStyle = {
    backgroundColor: 'grey'
  }

  const disabled = !userMessage || props.loading

  return (
    <form className="msger-inputarea">
      <input type="text" className="msger-input" onChange={onChange} value={userMessage} placeholder="Enter your message..."/>
      <button disabled={disabled} className="msger-send-btn" style={disabled? disabledStyle: {}} onClick={onSubmit}>Send </button>
    </form>
  )
}

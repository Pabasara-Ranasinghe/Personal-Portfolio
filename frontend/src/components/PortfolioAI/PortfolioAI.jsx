import { useState, useEffect, useRef } from 'react'
import './PortfolioAI.css'
import lyraImage from '../../assets/Lyra.jpeg'

function PortfolioAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const messagesEndRef = useRef(null)

  // =========================
  // AUTO SCROLL
  // =========================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, isLoading])


  // =========================
  // SEND MESSAGE
  // =========================

  const sendMessage = async (text = message) => {
    const userMessage = text.trim()

    if (!userMessage || isLoading) {
      return
    }

    // Add user message
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: 'user',
        text: userMessage
      }
    ])

    setMessage('')
    setIsLoading(true)

    try {
      const response = await fetch(
        'http://localhost:8082/api/portfolio/chat',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: userMessage
          })
        }
      )

      if (!response.ok) {
        throw new Error('Failed to connect to backend')
      }

      const data = await response.json()

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: 'lyra',
          text: data.reply
        }
      ])

    } catch (error) {

      console.error('Lyra API error:', error)

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          sender: 'lyra',
          text:
            'Sorry, I could not connect to my backend right now. Please make sure the Spring Boot server is running. 🌸'
        }
      ])

    } finally {
      setIsLoading(false)
    }
  }


  // =========================
  // ENTER KEY
  // =========================

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }


  // =========================
  // SUGGESTION
  // =========================

  const handleSuggestion = (question) => {
    sendMessage(question)
  }


  return (
    <>
      {/* =========================
          FLOATING LYRA BUTTON
      ========================= */}

      {!isOpen && (
        <button
          className="portfolio-ai-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open Lyra"
        >
          <img
            src={lyraImage}
            alt="Lyra"
            className="lyra-test-image"
          />

          <span className="ai-pulse"></span>
        </button>
      )}


      {/* =========================
          CHAT WINDOW
      ========================= */}

      {isOpen && (
        <div className="portfolio-ai-window">

          {/* =========================
              HEADER
          ========================= */}

          <div className="portfolio-ai-header">

            <div className="ai-header-info">

              <div className="lyra-header-wrapper">

                <img
                  src={lyraImage}
                  alt="Lyra"
                  className="lyra-header-image"
                />

                <span className="header-online-dot"></span>

              </div>

              <div>

                <h3>Lyra 🌸</h3>

                <span>
                  Pabasara's Portfolio Assistant
                </span>

              </div>

            </div>

            <button
              className="ai-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Lyra"
            >
              ×
            </button>

          </div>


          {/* =========================
              CHAT BODY
          ========================= */}

          <div className="portfolio-ai-body">

            {/* =========================
                WELCOME
            ========================= */}

            {messages.length === 0 && (

              <div className="ai-welcome">

                <div className="lyra-welcome-wrapper">

                  <img
                    src={lyraImage}
                    alt="Lyra"
                    className="lyra-large-image"
                  />

                  <span className="welcome-online-dot"></span>

                </div>

                <h4>
                  Hi! I'm Lyra 🌸
                </h4>

                <p>
                  I'm Pabasara's portfolio assistant.
                  Ask me about her skills, projects,
                  education, or achievements.
                </p>

              </div>

            )}


            {/* =========================
                SUGGESTIONS
            ========================= */}

            {messages.length === 0 && (

              <div className="ai-suggestions">

                <p className="suggestions-title">
                  You can ask me...
                </p>

                <button
                  onClick={() =>
                    handleSuggestion(
                      'What technologies does Pabasara know?'
                    )
                  }
                >
                  <span>💻</span>
                  What technologies does Pabasara know?
                </button>

                <button
                  onClick={() =>
                    handleSuggestion(
                      'Tell me about MilkGuard.'
                    )
                  }
                >
                  <span>🥛</span>
                  Tell me about MilkGuard.
                </button>

                <button
                  onClick={() =>
                    handleSuggestion(
                      'What projects has Pabasara built?'
                    )
                  }
                >
                  <span>🚀</span>
                  What projects has Pabasara built?
                </button>

                <button
                  onClick={() =>
                    handleSuggestion(
                      'Tell me about her education.'
                    )
                  }
                >
                  <span>🎓</span>
                  Tell me about her education.
                </button>

              </div>

            )}


            {/* =========================
                CHAT MESSAGES
            ========================= */}

            <div className="chat-messages">

              {messages.map((chatMessage, index) => (

                <div
                  key={index}
                  className={`chat-message-row ${
                    chatMessage.sender === 'user'
                      ? 'user-row'
                      : 'lyra-row'
                  }`}
                >

                  {/* LYRA AVATAR */}

                  {chatMessage.sender === 'lyra' && (

                    <img
                      src={lyraImage}
                      alt="Lyra"
                      className="message-avatar"
                    />

                  )}


                  <div
                    className={`chat-bubble ${
                      chatMessage.sender === 'user'
                        ? 'user-bubble'
                        : 'lyra-bubble'
                    }`}
                  >
                    {chatMessage.text}
                  </div>

                </div>

              ))}


              {/* =========================
                  TYPING INDICATOR
              ========================= */}

              {isLoading && (

                <div className="chat-message-row lyra-row">

                  <img
                    src={lyraImage}
                    alt="Lyra"
                    className="message-avatar"
                  />

                  <div className="typing-bubble">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              )}

              <div ref={messagesEndRef}></div>

            </div>

          </div>


          {/* =========================
              INPUT
          ========================= */}

          <div className="portfolio-ai-input">

            <input
              type="text"
              placeholder="Ask Lyra something..."
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />

            <button
              className="ai-send-button"
              onClick={() => sendMessage()}
              disabled={isLoading || !message.trim()}
              aria-label="Send message"
            >
              ↑
            </button>

          </div>

        </div>
      )}
    </>
  )
}

export default PortfolioAI

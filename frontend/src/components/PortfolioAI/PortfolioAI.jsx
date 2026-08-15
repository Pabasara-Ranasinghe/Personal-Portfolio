import { useState } from 'react'
import './PortfolioAI.css'
import lyraImage from '../../assets/Lyra.jpeg'

function PortfolioAI() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // =========================
  // SEND MESSAGE TO BACKEND
  // =========================
  
  const sendMessage = async (text = message) => {
    const userMessage = text.trim()

    if (!userMessage || isLoading) {
      return
    }

    // Add user's message to chat
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: 'user',
        text: userMessage
      }
    ])

    // Clear input
    setMessage('')

    // Show loading state
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
        throw new Error('Failed to connect to Lyra backend')
      }

      const data = await response.json()

      // Add Lyra's response
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
          text: 'Sorry, I could not connect to my backend right now. Please make sure the Spring Boot server is running. 🌸'
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
    if (event.key === 'Enter') {
      sendMessage()
    }
  }


  // =========================
  // SUGGESTED QUESTION
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

              <img
                src={lyraImage}
                alt="Lyra"
                className="lyra-header-image"
              />

              <div>

                <h3>
                  Lyra 🌸
                </h3>

                <span>
                  Pabasara's Portfolio Assistant
                </span>

              </div>

            </div>


            {/* CLOSE BUTTON */}

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

            {/* WELCOME MESSAGE */}

            {messages.length === 0 && (
              <>
                <div className="ai-welcome">

                  <img
                    src={lyraImage}
                    alt="Lyra"
                    className="lyra-large-image"
                  />

                  <h4>
                    Hi! I'm Lyra 🌸
                  </h4>

                  <p>
                    I'm Pabasara's portfolio assistant.
                    Ask me anything about her skills,
                    projects, education, or experience.
                  </p>

                </div>


                {/* =========================
                    SUGGESTED QUESTIONS
                ========================= */}

                <div className="ai-suggestions">

                  <button
                    onClick={() =>
                      handleSuggestion(
                        'What technologies does Pabasara know?'
                      )
                    }
                  >
                    What technologies does Pabasara know?
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion(
                        'Tell me about MilkGuard.'
                      )
                    }
                  >
                    Tell me about MilkGuard.
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion(
                        'What projects has Pabasara built?'
                      )
                    }
                  >
                    What projects has Pabasara built?
                  </button>

                  <button
                    onClick={() =>
                      handleSuggestion(
                        'Tell me about her education.'
                      )
                    }
                  >
                    Tell me about her education.
                  </button>

                </div>
              </>
            )}


            {/* =========================
                CHAT MESSAGES
            ========================= */}

            {messages.map((chatMessage, index) => (

              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent:
                    chatMessage.sender === 'user'
                      ? 'flex-end'
                      : 'flex-start',
                  marginBottom: '12px'
                }}
              >

                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: '14px',

                    background:
                      chatMessage.sender === 'user'
                        ? 'var(--accent)'
                        : 'var(--background)',

                    color:
                      chatMessage.sender === 'user'
                        ? 'white'
                        : 'var(--text-primary)',

                    border:
                      chatMessage.sender === 'lyra'
                        ? '1px solid var(--accent-light)'
                        : 'none',

                    fontSize: '13px',
                    lineHeight: '1.5'
                  }}
                >

                  {chatMessage.text}

                </div>

              </div>

            ))}


            {/* =========================
                LOADING
            ========================= */}

            {isLoading && (

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  marginBottom: '12px'
                }}
              >

                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '14px',
                    background: 'var(--background)',
                    border: '1px solid var(--accent-light)',
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                  }}
                >
                  Lyra is typing... 🌸
                </div>

              </div>

            )}

          </div>


          {/* =========================
              INPUT
          ========================= */}

          <div className="portfolio-ai-input">

            <input
              type="text"
              placeholder="Ask something..."
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
              disabled={isLoading}
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


import { useState } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    const newTheme = !isDark

    setIsDark(newTheme)

    document.documentElement.setAttribute(
      'data-theme',
      newTheme ? 'dark' : 'light'
    )
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}

export default ThemeToggle
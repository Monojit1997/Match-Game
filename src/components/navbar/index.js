import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="navbar-bg-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="navbar-logo"
        />
      </div>
      <ul className="navbar-score-container">
        <li>
          <p className="score-paragraph">
            Score <span className="score">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="sec-timer">{`${timer} sec`}</p>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar

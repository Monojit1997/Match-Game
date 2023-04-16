import './index.css'

const ScoreCard = props => {
  const {score, gameIsOn} = props
  const playAgain = event => {
    gameIsOn(event)
  }
  return (
    <div className="scoreCard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="your-score-paragraph">YOUR SCORE</p>
      <h1 className="your-score-paragraph">{score}</h1>
      <button type="button" className="button" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default ScoreCard

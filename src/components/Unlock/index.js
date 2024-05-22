import {useState} from 'react'
import {Container, Para} from './styledComponents'

const Unlock = () => {
  const [key, setLock] = useState(true)

  const onClickSubmit = () => setLock(prevState => !prevState)

  const isUnlock = () => (
    <Container>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
          className="Lock"
        />
      </div>
      <Para>Your Device is Locked</Para>
      <button type="submit" onClick={onClickSubmit}>
        Unlock
      </button>
    </Container>
  )

  const isLock = () => (
    <Container>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
          className="Lock"
        />
      </div>
      <Para>Your Device is Unlocked</Para>
      <button type="submit" onClick={onClickSubmit}>
        Lock
      </button>
    </Container>
  )

  return <div>{key ? isUnlock() : isLock()}</div>
}

export default Unlock

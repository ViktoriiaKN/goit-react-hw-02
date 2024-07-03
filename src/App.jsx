import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {
const [feedbacks, setFeedbacks] = useState({
	good: 0,
	neutral: 0,
	bad: 0
}

)

  return (
    <>
<Options/>
<Feedback/>
<Description/>
     </>
  )
}

export default App

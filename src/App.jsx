import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
setFeedbacks(prevFeedbacks =>  ({...prevFeedbacks, [feedbackType]: prevFeedbacks[feedbackType] + 1}
))
  }

 const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback > 0 ? (<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback}/>) : (<Notification/>) }
    </>
  );
}

export default App;

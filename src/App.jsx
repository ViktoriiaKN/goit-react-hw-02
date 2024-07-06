import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saveFeedbacks = window.localStorage.getItem('saved-feedbacks');
    return saveFeedbacks
      ? JSON.parse(saveFeedbacks)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedbacks={positiveFeedbacks}/>
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

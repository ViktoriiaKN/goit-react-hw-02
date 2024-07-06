
const Feedback = ({feedbacks: {good, neutral, bad}, totalFeedback, positiveFeedbacks}) => {
  return (
   <div>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedbacks}</li>
    </ul>
   </div>
  )
}

export default Feedback

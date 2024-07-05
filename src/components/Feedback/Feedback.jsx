
const Feedback = ({feedbacks: {good, neutral, bad}, totalFeedback}) => {
  return (
   <div>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {Math.round((good / totalFeedback) * 100)}</li>
    </ul>
   </div>
  )
}

export default Feedback


const Feedback = ({feedbacks}) => {
  return (
   <div>
    <ul>
      <li>Good: {feedbacks.good}</li>
      <li>Neutral: {feedbacks.neutral}</li>
      <li>Bad: {feedbacks.bad}</li>
      <li>Reset: </li>
    </ul>
   </div>
  )
}

export default Feedback

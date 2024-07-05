const Options = ({updateFeedback, totalFeedback, resetFeedbacks}) => {


  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good </button>
      <button onClick={() => updateFeedback('neutral')}>Neutral </button>
      <button onClick={() => updateFeedback('bad')}>Bad </button>
     {totalFeedback > 0 &&  <button onClick={resetFeedbacks}>Reset</button> }
    </div>
  );
};

export default Options;

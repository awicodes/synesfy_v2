import React from 'react';

import './Question.css';

class Question extends React.Component {
  render() {
    return (
      <div className="Question">
      <div className="questions">
        <form>
        <h2> I smell: </h2>
        <div className="answers">
        <label><input type="radio" value="answer" />Uncapped sharpie</label>
        <label><input type="radio" value="answer2" />Freshly popped buttery popcorn</label>
        <label><input type="radio" value="answer3" />Salty ocean breeze</label>
        <label><input type="radio" value="answer3" />Pages of a book in a library</label>
        </div>

        <h2> I see: </h2>
        <div className="answers">
        <label><input type="radio" value="answer" />Footsteps walking towards a crowded subway</label>
        <label><input type="radio" value="answer2" />Rain dripping down a window pane</label>
        <label><input type="radio" value="answer3" />A firey red-orange lava lamp</label>
        <label><input type="radio" value="answer3" />A dancer pirouetting across the stage</label>
        </div>


        <h2> I feel: </h2>
        <div className="answers">
        <label><input type="radio" value="answer" />Silky smooth shaved skin</label>
        <label><input type="radio" value="answer2" />Rush of cold water after jumping into a swimming pool</label>
        <label><input type="radio" value="answer3" />Petroleum jelly on my fingertips</label>
        <label><input type="radio" value="answer3" />Snow on my bare hands</label>
        </div>


        <h2> I taste: </h2>
        <div className="answers">
        <label><input type="radio" value="answer" />Spicy guacamole with a hardshell tortilla</label>
        <label><input type="radio" value="answer2" />Warm ginger tea</label>
        <label><input type="radio" value="answer3" />Perfectly steamed white rice</label>
        <label><input type="radio" value="answer3" />Mint gelato sandwiched between dark chocolate chip cookies</label>
        </div>

        </form>
        </div>
      </div>
    );
  }
}

export default Question;

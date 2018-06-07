import React, { Component } from 'react';
import { questions } from '../../questions.js'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0,
      yes: 0,
      no: 0
    }
    this.advance = this.advance.bind(this);
  }

  advance(bool) {
    if (this.state.slide === 0) {
      // this.props.makeHeaderVisible();
    }
    if (this.state.slide < questions.length + 1) {
      const nextSlide = this.state.slide + 1;
      const yes = bool ? this.state.yes + 1 : this.state.yes;
      const no = bool ? this.state.no : this.state.no + 1
      this.setState({ slide: nextSlide, yes, no })
    }
    if (this.state.slide === questions.length - 1) {
      console.log('final question');
    }
    if (this.state.slide === questions.length) {
      console.log('final slide')
    }
  }

  render() {
    return (
      <div>
        <span>Heading line 1</span>
        <span>Heading line 2</span>
        <p>Paragraph text</p>
        {/* {this.generateQuestions()} */}
        <button
          onClick={() => this.advance(false)}
        >
          Take the Quiz!
				</button>
      </div>
    );
  }
}

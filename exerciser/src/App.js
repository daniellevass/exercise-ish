import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

class App extends Component {

  constructor(props) {
    super();
    this.props = props;

    this.state = {
      exercises: [],
      index: 0,
      done: false
    }


  }

  exercise = (name, image, easy, medium, difficult) => {
    return {
      "name" : name,
      "image" : image,
      "easy" : easy,
      "medium" : medium,
      "difficult" : difficult
    }
  }

  generateExercises = () => {

      let abs = [
        this.exercise("sit ups", "https://media.giphy.com/media/FvfUDSqHruCDm/giphy.gif", "10", "20", "30"),
        this.exercise("bicycle crunches", "https://media.giphy.com/media/TMNCtgJGJnV8k/giphy.gif",  "20", "40", "60"),
        this.exercise("leg raises", "https://media.giphy.com/media/5EJHDSPpFhbG0/giphy.gif", "10 secs", "20 secs", "30 secs" ),
        this.exercise("elbow plank", "https://media.giphy.com/media/BeLPrrXzTcf7y/giphy.gif", "10 secs", "20 secs", "30 secs" )
      ]

      let quads = [
        this.exercise("lunges", "https://media.giphy.com/media/nQASBL1KBUEbC/giphy.gif", "10", "20", "30"),
        this.exercise("high knees", "https://media.giphy.com/media/l0HlNOsSRC0Bts7iU/giphy.gif", "10", "20", "30"),
        this.exercise("mountain climbers", "https://media.giphy.com/media/kzrev0zd1ScWOwbxJN/giphy.gif", "10", "20", "30")
      ]

      let glutes = [
        this.exercise("squats", "https://media.giphy.com/media/1qfKN8Dt0CRdCRxz9q/giphy.gif", "10", "20", "30"),
        this.exercise("donkey kicks", "https://media.giphy.com/media/FeKkg08Se3AXu/giphy.gif", "10", "20", "30"),
        this.exercise("bridges", "https://media.giphy.com/media/duatwzNErHFKw/giphy.gif", "10 secs", "20 secs", "30 secs"),
        this.exercise("side lunge", "https://media.giphy.com/media/ej7Igu4RKShRQ2l1az/giphy.gif", "10", "20", "30")
      ]

      let back = [
        this.exercise("superman", "https://media.giphy.com/media/10bKPDUM5H7m7u/giphy.gif", "10 secs", "20 secs", "30 secs")
      ]

      let chest = [
        this.exercise("push ups", "https://media.giphy.com/media/71EnBvrIr1Xji/giphy.gif", "10", "20", "30"),
        this.exercise("plank rotations", "https://media.giphy.com/media/yIv8U59Lhj2aQ/giphy.gif", "10", "20", "30"),
        this.exercise("shoulder taps", "https://media.giphy.com/media/ZiDnfvNB4PjVu/giphy.gif", "10", "20", "30")
      ]

      let exercises = [];

      exercises.push(abs[this.randomMax(abs.length)])
      exercises.push(quads[this.randomMax(quads.length)])
      exercises.push(glutes[this.randomMax(glutes.length)])
      exercises.push(back[this.randomMax(back.length)])
      exercises.push(chest[this.randomMax(chest.length)])

      this.shuffle(exercises)

      this.setState({"exercises" : exercises})

  }

  shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }

  randomMax = (max) => {
    return Math.floor(Math.random() * max)
  }


  start = () => {
    this.generateExercises();
  }

  next = () => {
    if (this.state.index < this.state.exercises.length -1){
      let index = this.state.index +1
      this.setState({"index" : index})
    } else {
       this.setState({"done": true})
    }
  }


render() {

  let actionButton = <Button color="primary" variant="contained" color="secondary" size="large"
      onClick={this.start}>Start</Button>;
  let title = <h1>Welcome to Exercise-ish</h1>
  let image = <p></p>

  if (this.state.done) {
    actionButton = <p></p>
    title = <h1>Congratulations 🎉</h1>
    image = <img src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif" width="500px" />
  } else if (this.state.exercises.length > 0) {
    actionButton = <Button color="primary" variant="contained" color="primary"  size="large"
        onClick={this.next}>Next</Button>;
    title = <div>
              <h1>{this.state.exercises[this.state.index].easy} {this.state.exercises[this.state.index].name}</h1>
              <h2>{this.state.index} / {this.state.exercises.length}</h2>
            </div>
    image = <img src={this.state.exercises[this.state.index].image} width="500px" max-height="500px" />
  }





  return (
    <div className="App">
      <header className="App-header">
        {title}
        {image}
        {actionButton}
      </header>
    </div>
  );
}

}


export default App;

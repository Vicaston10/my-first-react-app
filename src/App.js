import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from "radium";
import Person from  "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: "asdf", name: "Victor", age:28},
      {id: "zxcv", name: "Elijah", age:30},
      {id: "qwer", name: "Emmanuella", age:21}
    ],
    otherState: "some other value",
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked!!");
  //   // wrong !!this.state.persons[0].name = "Aston Victor";
  //   // rather use a special property to manipulate your this.state.
  //   this.setState({
  //     persons: [
  //     {name: newName, age:28},
  //     {name: "Elijah", age:30},
  //     {name: "Emmanuella", age:21}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    } );

  const person = {
    ...this.state.persons[personIndex]
  }; 

  // const person = object.assign({}, this.state.persons[personIndex]);
    
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
     this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            click={this.switchNameHandler.bind(this, "Vicky")}> My Hobbies : Football </Person>
          <Person 
             name={this.state.persons[1].name} 
             age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
          <Person 
             name={this.state.persons[2].name} 
             age={this.state.persons[2].age} /> */}
        </div>   
      );

      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    } 

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); 
    }
    // classes = ["red"]
    if (this.state.persons.length <= 1) {
      classes.push("bold"); 
    } 
    // classes = ["red" bold]


    return ( 
        <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(" ")}> This is really working !!!</p>
           {/* This can be inefficient, use the bind syntax */}
        <button
         style={style}
        onClick={this.togglePersonHandler}> Toggle Persons </button>
        {persons}
      </div>
    );
    // return React.createElement("div", {className: App}, React.createElement("h1", null, "Does this work now?"))
  }
}

export default App;

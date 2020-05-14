import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          sushis: res,
        })
      );
  }

  state = {
    sushis: [],
    eaten: [],
    money: 10000,
    displayIndex: 0,
  };

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4;
    if (newDisplayIndex >= this.state.sushis.length) {
      newDisplayIndex = 0;
    }
    this.setState({
      displayIndex: newDisplayIndex,
    });
  };

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price;

    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney,
      });
    }
  };

  chooseFourSushi = () => {
    return this.state.sushis.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );
  };

  addMoney = (event) => {
    event.preventDefault();
    let addedMoney = parseInt(event.currentTarget.children[0].value, 10);
    if (!addedMoney) {
      addedMoney = 0;
    }
    this.setState({
      money: this.state.money + addedMoney,
    });
  };

  render() {
    return (
      <div className="app">
        <form onSubmit={this.addMoney}>
          Add $ to Budget
          <input type="text" />
          <input type="submit" />
        </form>
        <SushiContainer
          sushis={this.chooseFourSushi()}
          more={this.more}
          eat={this.eat}
          eaten={this.state.eaten}
        />
        <Table remainingBudget={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;

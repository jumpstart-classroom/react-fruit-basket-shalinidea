const container = document.getElementById("app");

class FruitBasket extends React.Component {
  handleChange(event) {
    //this.setState({ value: event.target.value });
    console.log(event.target.value);
  }
  render() {
    const fruits = ["apple", "orange"];
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <ul>{}</ul>
      </div>
    );
  }
}

ReactDOM.render(h1, container);

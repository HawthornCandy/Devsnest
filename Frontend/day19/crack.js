class Counter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    // Use updater function when new state is derived from old
    this.setState(prev => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <button className="block" onClick={this.handleClick}>
        <div className="counter">{this.state.count}</div>
      </button>
    );
  }
}

// Now you can use it dynamically like this:
class Block extends React.Component {
  render() {
    return (
      <div>
        <div>There are 4 counter component instances that each manage their own state.</div>
        {[1,2,3,4].map(v => <Counter />)}
      </div>
    );
  }
}

ReactDOM.render(<Block />, document.getElementById('root'));
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
<div id="root"></div>

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button
        className="square"
        onClick = { () => this.props.onClick() }
      >{this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      isX: true
    }
  }
  handleClick(i)  {
    const squares = this.state.squares.slice()
    squares[i] = this.state.isX ? 'x': 'o'

    this.setState({
      squares: squares,
      isX: !this.state.isX
    })
  }
  renderSquare(i){
    return (
      <Square
        value={this.state.squares[i]}
        onClick={ () => this.handleClick(i) }
      />);
  }

  render() {
    const status = 'Next player: ' + (this.state.isX ? 'X' : 'O')

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

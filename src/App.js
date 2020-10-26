import logo from './logo.svg';
import './App.css';
import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["item1", "item2"],
      currentItem: {
        text: '',
        key: '',
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      }

    })
  }
  addItem(e) {
   
    let currentItem = this.state.items
    const newItem = this.state.currentItem;
    this.state.currentItem.push(this.state.text)
    this.setState({ items: currentItem })

  }


  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter list item"
              value={this.state.currentIt}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>

          </form>
        </header>
        <section>
          <div>
            <ul>

              {this.state.items.map((items, key) => {
                return (
                  <li>{items} <button>Delete</button></li>
                )
              })}
            </ul>

          </div>
        </section>

      </div>
    )

  }
}

export default App;

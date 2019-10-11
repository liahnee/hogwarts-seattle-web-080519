import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter'
import Sort from './Sort'
import Tile from './Tile'

class App extends Component {

  state = { listOfHogs: hogs }

  handleFilter = (arg) => {
    // console.log("make it to handleFilter")
    if (arg === 'all' ) {
      this.setState({
        listOfHogs: hogs
      })
    } else {
      // console.log("in filter state")
      // console.log(this.filteredHogs(arg))
      // console.log(hogs)
      this.setState({
        listOfHogs: this.filteredHogs(arg)
      })
    }
  };

  filteredHogs = (arg) => {
    return hogs.filter( hog =>  hog.greased.toString() === arg )
  }

  handlerSort = (arg) => {
    this.setState({
      listOfHogs: this.sortedHogs(arg)
    })
  };

  sortedHogs = (arg) => {
    let sortedHogsArray = [];
    if (arg === 'name') {
      sortedHogsArray = this.state.listOfHogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
        return 0; 
        }
      });
    } else if (arg === 'weight'){
      sortedHogsArray = this.state.listOfHogs.sort(function (a, b) {
        return a.weight - b.weight;
      });      
    } else {
      console.log()
      sortedHogsArray = this.state.listOfHogs;
    }

    return sortedHogsArray
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleFilter={this.handleFilter}/> 
          < Sort handleSort={this.handlerSort}/> 
          < Tile hogs={this.state.listOfHogs} /> 
          
      </div>
    )
  }
}

export default App;

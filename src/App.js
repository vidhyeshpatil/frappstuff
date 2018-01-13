import React, { Component } from 'react';
import './css/PageCss.css';
import List from './components/List.js';
import Favourites from './components/Favourites.js';
import Config from './data/config.json';

export default class App extends Component {
  
  constructor() {
	  super();
	  //
	  this.state = {
		  tabs: [{name: "List"}, {name: "Favourites"}],
		  currTab: 0,
		  favData: [],
		  currList: Config.data
	  }
  }
  
  onTabClick = (index) => {
	  
	this.setState({currTab: index});
  }
  
   addToFav = (currElem) => {
	
	let diffElem = this.state.favData.some(function(elem) {
		return elem.currElem.imageUrl === currElem.imageUrl
	});
	
	if(!diffElem) this.state.favData.push({currElem});
  }
  
  render() {
	
	let self = this, 
		currTab = self.state.currTab, isActive;
	  
    return (
      <div className="container">
		<div className="tabParent">
			{this.state.tabs.map(function(tab, i) {
				isActive = (currTab === i) ? "active" : "";
				return <div key = {i} className={"tab "+isActive+" "} onClick = {() => self.onTabClick(i)}> {tab.name} </div>
			})}
		</div>
		{currTab === 0 ? <List currList = {self.state.currList} addToFav = {self.addToFav} /> : <Favourites favData = {self.state.favData} />}
      </div>
    );
  }
}
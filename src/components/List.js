import React, { Component } from 'react';

export default class List extends Component {
   
  render() {
	let self = this, viewCount, listTypeColor,
		currList = this.props.currList;
	
    return (
      <div className = "containerList">
		<div className = "wrapperList">
			<h1>All Lists</h1>
			{currList.map((curr, i) => {
				
				viewCount = +(curr["view-count"]/1000).toFixed(1);
				listTypeColor = curr["type"] === "internship" ? "#f44336" : "#20b2aa";
				
				return <div key = {i} className = "box" style = {{background: listTypeColor}}>
							<div className = "tableLeftCol">
								<img className = "profileImg" src = {curr.imageUrl} alt = "profileImage" />
								<div className = "addButton" onClick = { () => self.props.addToFav(curr)}> + </div>
							</div>
							<div className = "tableData">  
								<div className = "tCell1">
									<div className = "tCellData1"> Title: </div>
									<div className = "tCellData1"> Desc: </div>
									<div className = "tCellData1"> Type: </div>
									<div className = "tCellData1"> ViewCount: </div>
								</div>
								<div className = "tCell2">
									<div className = "tCellData2"> {curr.title} </div>
									<div className = "tCellData2"> {curr.desc} </div>
									<div className = "tCellData2"> {curr.type} </div>
									<div className = "tCellData2"> {viewCount} </div>
								</div>
							</div>
					   </div>
			})}
		</div>
      </div>
    );
  }
}


import React, { Component } from 'react';

export default class Favourites extends Component {
  
  render() {
	
	let viewCount, listTypeColor, favList = this.props.favData;
	
    return (
      <div className="containerList">
		<h1>All Favourites</h1>
		<div className = "wrapperList">
			{favList.map((data, i) => {
				
				viewCount = +(data.currElem["view-count"]/1000).toFixed(1);
				listTypeColor = data.currElem["type"] === "internship" ? "#f44336" : "#20b2aa";
				
				return <div key = {i} className = "box" style = {{background: listTypeColor}}>
							<div className = "tableLeftCol">
								<img className = "profileImg" src = {data.currElem.imageUrl} alt = "profileImage" />
							</div>
							<div className = "tableData">  
								<div className = "tCell1">
									<div className = "tCellData1"> Title: </div>
									<div className = "tCellData1"> Desc: </div>
									<div className = "tCellData1"> Type: </div>
									<div className = "tCellData1"> ViewCount: </div>
								</div>
								<div className = "tCell2">
									<div className = "tCellData2"> {data.currElem.title} </div>
									<div className = "tCellData2"> {data.currElem.desc} </div>
									<div className = "tCellData2"> {data.currElem.type} </div>
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

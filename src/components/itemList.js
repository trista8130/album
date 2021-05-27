import React from "react";

class itemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { itemList } = this.props;
    return (
      itemList &&
      itemList.map((ele, i) => (
        <div className="card" key={ele.collectionId}>
          <img src={ele.artworkUrl100} alt="" />
          <h4 className="card__title">{ele.collectionName}</h4>
        </div>
      ))
    );
  }
}

export default itemList;

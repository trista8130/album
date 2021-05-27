import React from "react";
import ItemList from "./itemList";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.itemCount !== prevProps.itemCount) {
      this.setState({
        counter: this.state.counter + 1,
      });
      // this.setState((preState) => {
      //   return {
      //     counter: preState.counter + 1,
      //   };
      // });
    }
  };
  render() {
    const { itemList, itemCount, submitInput } = this.props;

    return (
      <main>
        <section className="results__container">
          <div className="results__container__search">
            {itemList ? (
              <h2>{`${itemCount} result for "${submitInput}"`}</h2>
            ) : (
              <h2>Search Albums by ArtistName: </h2>
            )}
            <p>check state update {this.state.counter}</p>
          </div>
          <div className="results__container__results">
            <ItemList itemList={itemList} />
          </div>
        </section>
      </main>
    );
  }
}

export default Search;

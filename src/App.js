import React from "react";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import getAllAlbums from "./Api/apiList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
      itemCount: null,
      input: "",
      submitInput: "",
    };
  }
  // componentWillUpdate = () => {
  //   console.log("componentWillUpdate");
  // };
  // componentDidUpdate = () => {
  //   console.log("componentDidUpdate");
  // };
  componentDidMount = () => {
    const search = window.sessionStorage.getItem("search");
    search &&
      getAllAlbums(search).then((data) => {
        this.setState({
          itemList: data.results,
          itemCount: data.resultCount,
          submitInput: search,
        });
      });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      getAllAlbums(this.state.input).then((data) => {
        //console.log(data);
        this.setState({
          itemList: data.results,
          itemCount: data.resultCount,
          submitInput: this.state.input,
        });
        window.sessionStorage.setItem("search", this.state.input);
      });
    }
  };

  handleOnChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <>
        <Header
          handleOnSubmit={this.handleOnSubmit}
          handleOnChange={this.handleOnChange}
          input={this.state.input}
        />
        <Search
          itemList={this.state.itemList}
          itemCount={this.state.itemCount}
          input={this.state.input}
          submitInput={this.state.submitInput}
        />
      </>
    );
  }
}

export default App;

import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    // Prevent the default refresh & submit behaviour from <form> when press enter key
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            ></input>
            {/* <input
              type="text"
              onChange={e => {
                console.log(e.target.value);
              }}
            ></input> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

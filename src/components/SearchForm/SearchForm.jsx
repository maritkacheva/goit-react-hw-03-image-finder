import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledSearchForm, StyledInput } from "./SearchForm.styles";

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    input: ""
  };

  handleInput = e => {
    // const { value } = target;
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { input } = this.state;

    onSubmit(input);
    this.setState({ input: "" });
  };

  render() {
    const { input } = this.state;
    return (
      <StyledSearchForm onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={input}
          onChange={this.handleInput}
        />
      </StyledSearchForm>
    );
  }
}

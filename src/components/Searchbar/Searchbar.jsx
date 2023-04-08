import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, SearchInput, SearchBtn } from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.target.query });
    console.log(this.state.query);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.submitSearchQuery(this.state.query);
    console.log(event);
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </Container>
    );
  }
}

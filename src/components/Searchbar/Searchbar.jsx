import React, { Component } from 'react';
import { Container, Form, SearchInput, SearchBtn } from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </Container>
    );
  }
}

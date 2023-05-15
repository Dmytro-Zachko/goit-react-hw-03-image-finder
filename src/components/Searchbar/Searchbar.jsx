import { Component } from "react";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchBar, SearchBarButton,SearchBarForm,SearchBarInput } from "./Searchbar.styled";
import { MdImageSearch } from 'react-icons/md';

export class Searchbar extends Component {
     state = {
    inputValue: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const value = event.currentTarget.value.toLowerCase();

    this.setState({ inputValue: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { inputValue } = this.state;

    if (inputValue.trim() === '') {
      toast.error(`Введіть текст для пошуку зображення`);
      return;
    }

    this.props.onSubmit(inputValue);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ inputValue: '' });
  };
  render() {
      const {inputValue} = this.state
        return (
    <SearchBar className="searchbar">
  <SearchBarForm onSubmit={this.handleSubmit}>
    <SearchBarButton type="submit" >
        <MdImageSearch size="30px" fill="violet" />
    </SearchBarButton>

    <SearchBarInput
            onChange={this.handleInputChange}
            value={inputValue}
            name="inputValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
    />
  </SearchBarForm>
            </SearchBar>
        )
    }
}
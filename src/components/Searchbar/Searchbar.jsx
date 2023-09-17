import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Searchbar.module.css';

const initState = {
  searchQuery: '',
};

class Searchbar extends Component {
  state = {
    ...initState,
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { searchQuery } = this.state;
    const { onSubmit } = this.props;
    onSubmit(searchQuery);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      ...initState,
    });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchQuery}
            name="searchQuery"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;

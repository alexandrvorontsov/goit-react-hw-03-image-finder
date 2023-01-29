import { Component } from 'react';
import Notiflix from 'notiflix';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';
import searchImages from '../Api/api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    console.log('componentDidMount');
    const { searchQuery } = this.state;
    this.request(searchQuery);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleSubmit(value) {
    console.log('handleSubmit');
    // this.setState(() => {
    //   return { ...this.state, searchQuery: value };
    // });
  }

  render() {
    console.log('render');
    const { images, totalHits, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
      </>
    );
  }
}

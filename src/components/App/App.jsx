import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Searchbar from '../Searchbar/Searchbar';
import searchImages from '../Api/api';

const initState = {
  searchQuery: '',
  images: [],
  page: 1,
  totalHits: 0,
  isLoading: false,
  error: null,
};

export class App extends Component {
  state = {
    ...initState,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || page !== prevState.page) {
      this.getImages();
    }
  }

  handleSubmit = value => {
    this.setState({
      ...initState,
      searchQuery: value,
    });
  };

  getImages = async () => {
    const { searchQuery, page } = this.state;
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { totalHits, hits } = await searchImages(searchQuery, page);

    this.setState(({ images }) => ({
      ...this.state,
      images: [...images, ...hits],
      totalHits,
      isLoading: false,
    }));
  };

  onBtnClick = () => {
    const { totalHits } = this.state;

    if (this.state.page <= totalHits / 12 + 1) {
      this.setState(prevState => ({
        ...this.state,
        page: prevState.page + 1,
      }));
    }
  };

  render() {
    const { images, isLoading, totalHits } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {images?.length > 0 && <ImageGallery data={images} />}
        {isLoading && <Loader />}
        {images.length < totalHits && !isLoading && (
          <Button onBtnClick={this.onBtnClick} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

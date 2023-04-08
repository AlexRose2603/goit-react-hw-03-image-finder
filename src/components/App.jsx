import { Component } from 'react';
import Notiflix from 'notiflix';
import { fetchImages } from 'httpRequest/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

// import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    isSpinnerLoading: false,
    isModalOpen: false,
  };
  submitSearchQuery = value => {
    this.setState({ value });
  };
  async componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const { totalHits, hits } = await fetchImages(value, page);
        if (totalHits === 0) {
          Notiflix.Notify.info('Nothing was found on your request');
          this.setState({ isLoading: false });
          return;
        }

        this.setState(prevState => ({
          images: page === 1 ? hits : [...prevState.images, ...hits],
          totalHits:
            page === 1
              ? totalHits - hits.length
              : totalHits - [...prevState.images, ...hits].length,
        }));
        this.setState({ isLoading: false });
      } catch (error) {
        Notiflix.Notify.failure(`Oops! Something went wrong! ${error}`);
      }
    }
  }
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };
  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar submitSearchQuery={this.submitSearchQuery} />
        {images && <ImageGallery images={images} />}
        <Button onloadMore={this.onLoadMore} />
        {isLoading && <Loader />}
        {/* <Modal /> */}
      </>
    );
  }
}

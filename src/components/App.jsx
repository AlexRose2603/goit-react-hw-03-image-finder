import { Component } from 'react';
import Notiflix from 'notiflix';
import { fetchImages } from 'httpRequest/fetch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isBtnVisible: false,

    isModalOpen: false,
    modalPicture: null,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.onGetImages(query, page);
    }
  }
  async onGetImages(query, page) {
    this.setState({ isLoading: true, isBtnVisible: false });
    try {
      const { totalHits, hits } = await fetchImages(query, page);
      if (this.state.query.trim() === '') {
        this.setState({ isLoading: false, isBtnVisible: false });
        Notiflix.Notify.info('Fill the search form');
        return;
      }
      if (totalHits === 0) {
        Notiflix.Notify.info('Nothing was found on your request');
        this.setState({ isLoading: false });
        this.setState({ isBtnVisible: false });
        return;
      } else if (hits === totalHits) {
        Notiflix.Notify.info('These are all the images we found');
        this.setState({ isBtnVisible: false });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
      this.setState({ isLoading: false });
      this.setState({ isBtnVisible: true });
    } catch (error) {
      Notiflix.Notify.failure(`Oops! Something went wrong! ${error}`);
    }
  }

  onSubmit = value => {
    this.setState({ query: value, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };
  modalImg = img => {
    this.setState({ modalPicture: img });
  };
  render() {
    const { images, isLoading, isBtnVisible, isModalOpen, modalPicture } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images && (
          <ImageGallery
            images={images}
            onEnlargingImage={this.modalImg}
            onClick={this.toggleModal}
          />
        )}
        {isBtnVisible && <Button onClick={this.onLoadMore}>Load more</Button>}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal onClose={this.toggleModal} onShowImg={modalPicture} />
        )}
      </>
    );
  }
}

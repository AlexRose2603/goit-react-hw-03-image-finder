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
    this.setState({ isLoading: true });
    try {
      const { totalHits, hits } = await fetchImages(query, page);
      console.log(totalHits);
      if (totalHits === 0) {
        Notiflix.Notify.info('Nothing was found on your request');
        this.setState({ isLoading: false });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      Notiflix.Notify.failure(`Oops! Something went wrong! ${error}`);
    } finally {
      this.setState({ isLoading: false });
      this.setState({ isBtnVisible: true });
    }
  }

  onSubmit = value => {
    this.setState({ query: value, page: 1, images: [] });
    if (this.state.query === '') {
      this.setState({ isLoading: false });
      Notiflix.Notify.info('Fill the search form');
    }
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

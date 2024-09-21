import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { useEffect, useState} from "react";
import axios from "axios";
import './App.css'
import { Image} from "./components/Types/types";


function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
	const [modalImage, setModalImage] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (search === null) return;
    async function fetchImagesByData() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=1FrxQdxZqIzEvaS9vHGUY2G62nXyYi7w7y_S4vo6_gg&query=${search.search}&per_page=12&page=${page}`
        );
        setImages((images) => [...images, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImagesByData();
  }, [search, page]);

  const onSubmit = (value: string) => {
    setImages([]);
    setSearch(value);
  };

  const loadMore = () => {
    setPage(page + 1)
  };

  const closeModal = () => {
		setIsOpen(false);
	};

	const onImageClick = (src:string) => {
    setModalImage(src);
    setIsOpen(true);
	};

  return (
    <div>
      <SearchBar onSubmit={onSubmit} setPage={setPage}/>
      {error !== null ? <ErrorMessage error={error} /> : <ImageGallery images={images} onImageClick={onImageClick} />}
      {loading && <Loader />}
      {totalPages > page &&<LoadMoreBtn loadMore={loadMore}/>}
      <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} src={modalImage}/>
    </div>
  );
}

export default App;

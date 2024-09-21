import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

type Props = {
  loadMore: () => void;
};

const LoadMoreBtn = ({loadMore}: Props) => {
  return (
    <button className={css.loadBnt} onClick={loadMore}>Load more</button>
  )
}

export default LoadMoreBtn
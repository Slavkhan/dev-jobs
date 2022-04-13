const Button = ({handleLoadMore, hasLoadMore}) => {
  if (!hasLoadMore) return null;
  return (
    <button onClick={handleLoadMore} className="button">
      Load More
    </button>
  );
};
export default Button;

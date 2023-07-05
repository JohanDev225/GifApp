const GifCard = ({ id, title, url }) => {
  return (
    <div key={id}>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifCard;

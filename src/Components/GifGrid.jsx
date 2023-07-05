
import { useFetchGifs } from "../Hooks/useFetchGifs";
import GifCard from "./GifCard";

const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="card-grid">
        {isLoading && <p>Loading...</p>}
        {images.map((img) => (
          <GifCard key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;

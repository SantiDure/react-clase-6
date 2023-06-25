import SearchBar from "./components/SearchBar";
import serchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [image, setImage] = useState([]);

  async function handleSubmit(term) {
    const resultado = await serchImages(term);
    setImage(resultado);
  }

  return (
    <div>
      <SearchBar enSubmit={handleSubmit} />
      <ImageList images={image} />
    </div>
  );
}

export default App;

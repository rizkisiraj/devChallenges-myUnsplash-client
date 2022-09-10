import Header from "./components/Header/header.component";
import PhotosWrapper from "./components/Photos Wrapper/photosWrapper.component";
import Modal from "./components/Modal/modal.component";
import { useContext } from "react";
import { PictsContext } from "./contexts/picts.context";

function App() {
  const { modal } = useContext(PictsContext);


  return (
    <>
      <Header />
      <PhotosWrapper  />
      {
      modal && <Modal />
      }
    </>
  );
}

export default App;


import { useContext } from "react";
import { PictsContext } from "../../contexts/picts.context";
import Photo from "../Photo/photo.component";


const PhotosWrapper = () => {
    const { filteredPicts } = useContext(PictsContext);

    return (
        <main className="px-8 md:px-16 lg:px-24 grid gap-11 grid-cols-1 md:grid-cols-gallery auto-rows-[250px] grid-flow-dense content-center justify-between sm:grid-cols-2">
            {
                filteredPicts && filteredPicts.map(pict => {
                    return <Photo pict={pict} key={pict._id} />
                })
            }
        </main>
    )
}

export default PhotosWrapper;
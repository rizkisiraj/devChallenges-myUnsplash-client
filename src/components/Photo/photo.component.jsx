import { useContext, useEffect } from "react";
import { useState } from "react";
import { PictsContext } from "../../contexts/picts.context";

const Photo = ({pict}) => {
    const [size, setSize] = useState('');
    const { setModal, setModalContent } = useContext(PictsContext)

    useEffect(()=> {
        const img = new Image();
        img.src = pict.url;
        
        img.onload = () => {
            if(img.height > img.width) {
                setSize('big');
            } else {
                setSize('small');
            }
        }
    },[pict.url])

    return (
        <div className={`rounded-2xl relative group cursor-pointer ${size === 'big' && 'row-span-2' }`}>
                <button className="opacity-0 group-hover:opacity-100 absolute top-3 right-4 hover:text-black hover:bg-red-500 hover:border-0 border border-[#EB5757] px-2 py-1 rounded-2xl text-[#EB5757] text-[10px] z-10" onClick={()=> {
                    setModalContent(pict._id);
                    setModal(true);
                }}>delete</button>
                <img className=" w-full h-full block rounded-2xl" src={pict.url} alt="big pict" />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.57)] rounded-2xl flex group-hover:opacity-100 items-end p-4 opacity-0 transition-all">
                    <h4 className="font-serrat text-white font-bold text-lg">{pict.label}</h4>
                </div>
        </div>
    )
}

export default Photo;
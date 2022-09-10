import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const PictsContext = createContext({
    modal: false,
    setModal: () => false,
    picts: null,
    setPicts: () => null,
    modalContent: null,
    setModalContent: () => null,
    filteredPicts: null,
    setFilteredPicts: () => null,
    keyword: "",
    setKeyword: () => ""
})

export const PictsProvider = ({children}) => {
    const [modal, setModal] = useState(false);
    const [picts, setPicts] = useState([]);
    const [modalContent, setModalContent] = useState(null);
    const [filteredPicts, setFilteredPicts] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const fetchPicts = async () => {
            const { data } = await axios.get('https://myunsplash-rizsijar.herokuapp.com/api/get');
            setPicts(data)
        }

        fetchPicts();
    },[]);

    useEffect(() => {
        const newFilteredData = picts.filter(pict => pict.label.toLowerCase().includes(keyword.toLowerCase()));
        
        setFilteredPicts(newFilteredData);
        
    },[keyword, picts])
    

    const value = {modal, setModal, picts, setPicts, modalContent, setModalContent,filteredPicts, setFilteredPicts, keyword, setKeyword};

    return <PictsContext.Provider value={value}>{children}</PictsContext.Provider>
}
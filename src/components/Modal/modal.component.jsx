import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { PictsContext } from "../../contexts/picts.context";
import axios from 'axios'

const formField = {
  label: '',
  url: ''
}

export default function Modal() {
  const { setModal, modalContent, setModalContent, setPicts } = useContext(PictsContext);
  const [field, setField] = useState(formField);
  const [password, setPassword] = useState('');
  const { label, url } = field;

  useEffect(() => {
    if(modalContent) {
      setPassword(modalContent);
    }
  },[modalContent])

  const handleClose = () => {
    setModal(false);
    setModalContent(null);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setField({
      ...field,
      [name] : value,
    })
  }

  const handleDelete = async (id) => {

    await axios.delete(`https://myunsplash-rizsijar.herokuapp.com/api/delete/${id}`);
    const { data } = await axios.get('https://myunsplash-rizsijar.herokuapp.com/api/get');
    setPicts(data);
    setModalContent(null);
    setModal(false);

  }

  const handleSubmit = async (label, url) => {

    await axios.post('https://myunsplash-rizsijar.herokuapp.com/api/post', {
      label,
      url
    })
    
    const { data } = await axios.get('https://myunsplash-rizsijar.herokuapp.com/api/get');
    setPicts(data);
    setModal(false);
  }
  
    return (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {modalContent ? "Delete Photo" : "Add new Photo"}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => handleClose()}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto w-[300px] md:w-[624px]">
                    {
                      password ? (
                        <>
                        <label>Password</label>
                        <input name="password" type="password" className="block w-full p-4 mt-2 mb-4 border-2 border-gray-500 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}  />
                        </>
                      ) : (
                        <>
                          <label>Label</label>
                          <input name="label" type="text" className="block w-full p-4 mt-2 mb-4 border-2 border-gray-500 rounded-lg" value={label} onChange={handleChange}  />
                          <label>Photo URL</label>
                          <input name="url" type="text" className="block w-full p-4 mt-2 border-2 border-gray-500 rounded-lg" value={url} onChange={handleChange} />
                        </>
                      )
                    }
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleClose()}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        if(modalContent) {
                          handleDelete(password)  
                          return;
                        }
                        handleSubmit(label, url)
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
    );
  }
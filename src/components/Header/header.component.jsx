import { useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/my_unsplash_logo.svg'
import { PictsContext } from '../../contexts/picts.context';

const Header = () => {
    const { setModal, setKeyword, keyword } = useContext(PictsContext);


    return (
        <header className='px-24 py-8 w-full flex items-center justify-between'>
            <div className='flex gap-2 items-center'>
                <Logo />
                <div className='border border-[#BDBDBD] flex items-center p-5 gap-3 rounded-2xl'>
                    <span className="material-symbols-outlined text-[#BDBDBD]">
                        search
                    </span>
                    <input className='focus:outline-none' type="text" placeholder='Search by name' value={keyword} onChange={e => setKeyword(e.target.value)} />
                </div>
            </div>
            <button className='bg-[#3DB46D] text-white py-5 px-3 rounded-2xl font-bold' onClick={()=>setModal(true)}>Add a photo</button>
        </header>
    )
}

export default Header;
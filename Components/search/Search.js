import {AiOutlineSearch} from "react-icons/ai";
import useTranslation from "next-translate/useTranslation";
import SearchPlace from "./SearchPlace";
import filterSearch from "../../utils/filterSearch";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Search = ({state}) => {

    const {t} = useTranslation()

    const [search, setSearch] = useState('')

    const [sort, setSort] = useState('')
    const [category, setCategory] = useState('')

    // const {categories} = state

    const router = useRouter()


    const handleCategory = (e) => {
        setCategory(e.target.value)
        filterSearch({router, category: e.target.value})
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearch({router, sort: e.target.value})
    }

    useEffect(() => {
        filterSearch({router, search: search ? search.toLowerCase() : 'all'})
    },[search])

    return (
        <div className='border-t border-gray-200 '>
            <div
                className='lg:border-none border-b  border-gray-300 border-t flex justify-center items-center z-40 relative text-gray-600 container mx-auto'>
                <div className='grid lg:grid-cols-9 grid-cols-3 lg:px-6 py-3 w-full '>
                    <div className='lg:flex hidden  items-center col-span-3'>
                        <SearchPlace/>
                    </div>
                    <form className='flex items-center border-l border-gray-300 lg:mr-20  lg:col-span-4 col-span-2'>
                        <AiOutlineSearch className='lg:text-2xl mx-2'/>
                        <input className='lg:text-xl outline-none lg:w-96 lg:px-10' type="text"
                               placeholder={`26840 ${t('объявлений')}`}
                               value={search.toLowerCase()} onChange={e => setSearch(e.target.value)}/>
                    </form>

                    <div
                        className='flex items-center cursor-pointer lg:ml-20 ml-5 lg:pl-5 lg:border-l border-gray-300 lg:col-span-2 col-span-1'>
                        <p className='lg:text-xl'>{t('Поиск')}</p>
                        <AiOutlineSearch className='lg:text-2xl mx-1'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
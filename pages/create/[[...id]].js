import React, {useContext, useEffect, useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import {DataContext} from "../../store/GlobalState";
import TextareaCounter from 'react-textarea-counter';
import {useRouter} from "next/router";
import SearchPlaceData from "../../Components/search/searchPlaceData";
import {getData, postData, putData} from "../../utils/fetchingData";
import {imageUpload} from "../../utils/imageUpload";
import {useStore} from "react-hookstore";
import {AiOutlineClose} from "react-icons/ai";
import Head from 'next/head'

const Id = () => {
    const {t, lang} = useTranslation()
    const [ city ] = useStore('cityStore');
    const [category, setCategory] = useState('')
    const [agree, setAgree] = useState(false)

    const {state, dispatch} = useContext(DataContext)
    const {categories, auth} = state

    const router = useRouter()
    const {id} = router.query
    const [onEdit, setOnEdit] = useState(false)

    console.log(category)


    const initialState = {
        user:auth.user,
        title: '',
        price: 0,
        description: '',
        maincategory: '',
        productcategory: '',
        location:'',
        phone: '',
        name:'',
    }

    const [product, setProduct] = useState(initialState)

    const {title, price, description,name, phone, maincategory,  productcategory, location} = product

    const [images, setImages] = useState([])




    useEffect(() => {
        if(id){
            setOnEdit(true)
            getData(`product/${id}`).then(res => {
                setProduct(res.product)
                setImages(res.product.images)
            })
        }else{
            setOnEdit(false)
            setProduct(initialState)
            setImages([])
        }
    },[id])

    const handleChangeInput = e => {
        const {name, value} = e.target
        setProduct({...product, [name]:value})
        dispatch({type: 'NOTIFY', payload: {}})
    }


    const handleUploadInput = e => {
        dispatch({type: 'NOTIFY', payload: {}})
        let newImages = []
        let num = 0
        let err = ''
        const files = [...e.target.files]

        if(files.length === 0)
            return dispatch({type: 'NOTIFY', payload: {error: 'Files does not exist.'}})

        files.forEach(file => {
            if(file.size > 1024 * 1024)
                return err = 'The largest image size is 1mb'

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return err = 'Image format is incorrect.'

            num += 1;
            if(num <= 5) newImages.push(file)
            return newImages;
        })

        if(err) dispatch({type: 'NOTIFY', payload: {error: err}})

        const imgCount = images.length
        if(imgCount + newImages.length > 5)
            return dispatch({type: 'NOTIFY', payload: {error: 'Select up to 5 images.'}})
        setImages([...images, ...newImages])
    }

    const deleteImage = index => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(auth.user.role !== 'user')
            return dispatch({type: 'NOTIFY', payload: {error: 'Authentication is not valid.'}})

        if(!title || !price || !description ||!location || !phone || !name || productcategory === 'all' || images.length === 0)
            return dispatch({type: 'NOTIFY', payload: {error: 'Please add all the fields.'}})


        dispatch({type: 'NOTIFY', payload: {loading: true}})

        let media = []
        const imgNewURL = images.filter(img => !img.url)
        const imgOldURL = images.filter(img => img.url)

        if(imgNewURL.length > 0) media = await imageUpload(imgNewURL)

        let res;
        if(onEdit){
            res = await putData(`product/${id}`, {...product, images: [...imgOldURL, ...media]}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }else{
            res = await postData('product', {...product, images: [...imgOldURL, ...media]}, auth.token)
            if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        }

        return dispatch({type: 'NOTIFY', payload: {success: res.msg}})

    }

    console.log(product)
    console.log(location)
    return (
        <div>
            <Head>
                <title>Products Manager</title>
            </Head>
            <div className="bg-gray-50">
                <form className="lg:w-3/4 mx-auto p-1" onSubmit={handleSubmit}>
                    <p className="text-gray-600 text-3xl font-bold">?????????????? ????????????????????</p>
                    <div className="bg-white mt-6 p-4">
                        <p className="text-xl font-bold">???????????????? ????????????????????</p>

                        <div>
                            <p className="text-lg mt-3">????????????????*</p>
                            <input className="outline-none mt-2 bg-gray-50 p-2 lg:w-3/4 w-full h-12"
                                   type="text"
                                   placeholder="????????????????, Galaxy S22"
                                   name="title"
                                   value={title}
                                   onChange={handleChangeInput}
                            />
                        </div>

                        <div className='lg:mt-10 mt-5'>
                            <p className="mt-4">??????????????????*</p>
                            <div className='py-5 lg:py-10 grid lg:grid-cols-4 grid-cols-3 text-smaller font-bold lg:text-sm text-center'>
                                <div className={category === 'electronic' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('electronic')}>
                                    <p>{t('??????????????????????')}</p>
                                </div>
                                <div className={category === 'children' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('children')}>
                                    <p>{t('????????')}</p>
                                </div>
                                <div className={category === 'transport' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('transport')}>
                                    <p>{t('??????????????????')}</p>
                                </div>
                                <div className={category === 'property' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('property')}>
                                    <p>{t('????????????????????????')}</p>
                                </div>
                                <div className={category === 'job' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('job')}>
                                    <p>{t('????????????')}</p>
                                </div>
                                <div className={category === 'services' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('services')}>
                                    <p>{t('????????????')}</p>
                                </div>
                                <div className={category === 'style' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('style')}>
                                    <p>{t('???????? ?? ??????????')}</p>
                                </div>
                                <div className={category === 'business' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('business')}>
                                    <p>{t('????????????')}</p>
                                </div>
                                <div className={category === 'house' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('house')}>
                                    <p>{t('?????? ?? ????????')}</p>
                                </div>
                                <div className={category === 'hobbies' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid ' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid '} onClick={() => setCategory('hobbies')}>
                                    <p>{t('?????????? ?? ??????????')}</p>
                                </div>
                                <div className={category === 'animals' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('animals')}>
                                    <p>{t('????????????????')}</p>
                                </div>
                                <div className={category === 'exchange' ? 'border-2 bg-green-400 text-white border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid  cursor-pointer' : 'border-2 border-green-400 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid  cursor-pointer'} onClick={() => setCategory('exchange')}>
                                    <p>{t('??????????, ??????????')}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-lg mt-3">?????????????? ??????????????????*</p>
                                <input className="outline-none mt-2 bg-gray-50 p-2 lg:w-3/4 w-full h-12"
                                       type="text"
                                       placeholder="????????????????, ????????"
                                       name="maincategory"
                                       value={maincategory}
                                       onChange={handleChangeInput}
                                />
                            </div>

                            <div className="input-group-prepend px-0 my-2 ">
                                <select name="productcategory" id="productcategory" value={productcategory}
                                        onChange={handleChangeInput} className="custom-select text-capitalize w-72">
                                    <option value="all">All Products</option>
                                    {
                                        category === 'electronic' &&
                                        categories[0].electronic.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'children' &&
                                        categories[0].children.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'transport' &&
                                        categories[0].transport.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'property' &&
                                        categories[0].property.map(item => (
                                            <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'job' &&
                                        categories[0].job.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'services' &&
                                        categories[0].services.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'style' &&
                                        categories[0].stylefashion.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'business' &&
                                        categories[0].business.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'house' &&
                                        categories[0].house.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'hobbies' &&
                                        categories[0].hobbies.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'animals' &&
                                        categories[0].animals.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                    {
                                        category === 'exchange' &&
                                        categories[0].charity.map(item => (
                                            <option value={item.id} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>





                        <div className='my-5 lg:my-20'>
                            <p className="mt-4 text-xl font-bold">????????</p>
                            <p className="text-sm text-gray-500"> ???????????? ???????? ?????????? ???? ??????????????. </p>

                            <div>
                                <div className="col-md-6 my-4 lg:text-base text-sm ">
                                    <div className="input-group mb-3 ">
                                        <div className="input-group-prepend my-5">
                                            <span className="text-base">{t('???????????????? ????????')}</span>
                                        </div>
                                        <div className="custom-file border rounded w-72 lg:w-96 text-line-cut">
                                            <input type="file" className="custom-file-input "
                                                   onChange={handleUploadInput} multiple accept="image/*" />
                                        </div>
                                    </div>

                                    <div className="row img-up mx-0 grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-2">
                                        {
                                            images.map((img, index) => (
                                                <div key={index} className="file_img my-1 relative ">
                                                    <img src={img.url ? img.url : URL.createObjectURL(img)}
                                                         alt="" className="img-thumbnail rounded lg:w-72   text-line-cut" />

                                                    <span onClick={() => deleteImage(index)} className='cursor-pointer absolute z-20 top-2 right-2 bg-gray-400 text-white rounded-md p-2'>
                                                       <AiOutlineClose size={20}/>
                                                   </span>
                                                </div>

                                            ))

                                        }


                                    </div>


                                </div>

                            </div>
                        </div>



                        {/*<div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-4">*/}
                        {/*    <button className="flex justify-center items-center p-14 bg-gray-100">*/}
                        {/*        <FcAddImage size={40}/>*/}
                        {/*    </button>*/}
                        {/*    <button className="flex justify-center items-center p-14 bg-gray-100">*/}
                        {/*        <FcAddImage size={40}/>*/}
                        {/*    </button>*/}
                        {/*    <button className="flex justify-center items-center p-14 bg-gray-100">*/}
                        {/*        <FcAddImage size={40}/>*/}
                        {/*    </button>*/}
                        {/*    <button className="flex justify-center items-center p-14 bg-gray-100">*/}
                        {/*        <FcAddImage size={40}/>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <div className='bg-gray-100'>
                            <p className="mt-3 px-5 py-2">????????????????*</p>
                            <TextareaCounter className=" p-2 lg:p-3  outline-none w-full focus:outline-none "
                                             count countLimit={10000}
                                             initialValue=""
                                             placeholder="??????????????????, ?????????? ?????????????????????? ???? ???????????? ???? ???????????? ???? ????????????????????. ?? ???????????????? ???? ?? ????????????????"
                                             value={description}
                                             onChange={handleChangeInput}
                                             name="description"/>

                            <div className='text-gray-600 px-5 py-2 flex'>
                                {
                                    description.length < 50 ? <p>{t('???????????????? ???? ?????????? 50 ????????????????')} </p> :
                                        <p>{t("???? 10 000 ????????????????")}</p>
                                }
                            </div>
                        </div>




                        {
                            category === 'electronic' &&
                            <div>
                                <div>
                                    <p className="text-base mt-2">????????*</p>
                                    <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                                           placeholder=""
                                           value={price}
                                           name="price"
                                           onChange={handleChangeInput}/>
                                </div>
                                {/*<div>*/}
                                {/*    */}
                                {/*    <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="button"*/}
                                {/*           value={isnew}*/}
                                {/*           name="price"*/}
                                {/*           onChange={handleChangeInput}/>*/}
                                {/*</div>*/}

                            </div>
                        }





                        <div className='lg:mt-20 mt-5'>
                            <p className="text-xl font-bold mt-3">???????????????????? ????????????????????</p>
                            <div>
                                <p className="text-base mt-2">????????????????????????????*</p>
                                <SearchPlaceData/>
                                <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                                       placeholder="???????? ????????????????????????????"
                                       value={location}
                                       name="location"
                                       onChange={handleChangeInput}/>
                            </div>

                            <div>
                                <p className="text-base mt-4">???????????????????? ????????*</p>
                                <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                                       placeholder={auth.user.name} defaultValue={auth.user.name} value={name}
                                       name='name'
                                       onChange={handleChangeInput}/>
                            </div>

                            <div>
                                <p className="text-base mt-4">?????????? ????????????????*</p>
                                <input className="p-3 w-80 bg-gray-50 mt-2 outline-none"
                                       placeholder="99 899  ***  ** **"
                                       type='number'
                                       name="phone"
                                    //defaultValue={auth.user.phone}
                                       value={phone}
                                       onChange={handleChangeInput}

                                />
                                {
                                    phone.length === 0 && <span className='text-red-500 text-sm'>
                                       {t('?????????????? ?????? ?????????? ????????????????')}
                                   </span>
                                    ||
                                    phone.length < 9 && <span className='text-red-500 text-sm'>
                                       {t('?????????? ???????????????? ???????????? ???????? ???? ?????????? 9 ????????????????')}
                                   </span>
                                    ||
                                    phone.length !== 12 &&  phone.length !== 9 && <span className='text-red-500 text-sm'>
                                       {t('???? ???????????????????? ?????????? ????????????????')}
                                   </span>
                                }

                            </div>
                        </div>


                        <div className="flex gap-2 mt-4">
                            <input type="checkbox"
                                   className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                                   onClick={() => setAgree(!agree)}/>
                            <p className="text-xs mt-2">
                                ?? ???????????????? ?? ?????? ???????????????? ???? ?????????????????? ???????????????????????? ?? ?????????????????????????? ?????????????????? (????????????????,
                                ?????????????????????????????? ??????????????????, SMS) ???? innoveder Group, ?????????????????? ?? ???????? ?????????????????????? ?? ????
                                ??????????????
                                ?????????????????? ?????????????????????? ?????????????????????? ?????????? ?? ???????????????????????????????? ???? ?????? ????????????????????.
                            </p>
                        </div>
                    </div>
                    {
                        agree ?
                            <div className="flex lg:justify-end justify-center items-center py-5 gap-3">
                                <button type="submit"
                                        className="p-3 font-bold hover:bg-green-400 hover:text-white border-green-400 text-green-400 border-2 focus:outline-none outline-none rounded-md">????????????????????????
                                </button>
                                <button type="submit"
                                        className="p-3 font-bold hover:bg-white bg-green-400 text-white hover:text-gray-700 border-green-400 border-2 focus:outline-none outline-none rounded-md">????????????????????????
                                </button>
                            </div> :
                            <div className="flex lg:justify-end justify-center items-center py-5 gap-3 opacity-20">
                                <button disabled={true}
                                        className="p-3 font-bold  border-green-400 border-2 focus:outline-none outline-none text-green-400 rounded-md">????????????????????????
                                </button>
                                <button disabled={true}
                                        className="p-3 font-bold bg-green-400 text-white  border-green-400 border-2 focus:outline-none outline-none rounded-md">????????????????????????
                                </button>
                            </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Id;
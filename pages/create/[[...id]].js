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

const Id = () => {
    const {t, lang} = useTranslation()
    const [ city ] = useStore('cityStore');
    const [category, setCategory] = useState('')
    const [agree, setAgree] = useState(false)
    console.log(category)

    const {state, dispatch} = useContext(DataContext)
    const {categories, auth} = state

    const initialState = {
        title: '',
        price: 0,
        description: '',
        productcategory: '',
        location:'',
        phone: '',
        name:'',
    }

    const [product, setProduct] = useState(initialState)

    const {title, price, description,name, phone, productcategory, location} = product

    const [images, setImages] = useState([])



    const router = useRouter()
    const {id} = router.query
    const [onEdit, setOnEdit] = useState(false)

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
            <div className="bg-gray-50">
                <form className="lg:w-3/4 mx-auto p-1" onSubmit={handleSubmit}>
                    <p className="text-gray-600 text-3xl font-bold">Создать объявление</p>
                    <div className="bg-white mt-6 p-4">
                        <p className="text-xl font-bold"> Описание объявления</p>

                        <div>
                            <p className="text-lg mt-3">Название*</p>
                            <input className="outline-none mt-2 bg-gray-50 p-2 lg:w-3/4 w-full h-12"
                                   type="text"
                                   placeholder="Например, Galaxy S22"
                                   name="title"
                                   value={title}
                                   onChange={handleChangeInput}
                            />
                        </div>

                      <div className='lg:mt-10 mt-5'>
                          <p className="mt-4">Категория*</p>
                          <div className='py-5 lg:py-10 grid lg:grid-cols-4 grid-cols-3 text-smaller font-bold lg:text-sm text-center'>
                              <div className={category === 'electronic' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('electronic')}>
                                  <p>{t('Электроника')}</p>
                              </div>
                              <div className={category === 'children' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('children')}>
                                  <p>{t('Дети')}</p>
                              </div>
                              <div className={category === 'transport' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('transport')}>
                                  <p>{t('Транспорт')}</p>
                              </div>
                              <div className={category === 'property' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('property')}>
                                  <p>{t('Недвижимость')}</p>
                              </div>
                              <div className={category === 'job' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('job')}>
                                  <p>{t('Работа')}</p>
                              </div>
                              <div className={category === 'services' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('services')}>
                                  <p>{t('Услуги')}</p>
                              </div>
                              <div className={category === 'style' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('style')}>
                                  <p>{t('Мода и стиль')}</p>
                              </div>
                              <div className={category === 'business' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('business')}>
                                  <p>{t('Бизнес')}</p>
                              </div>
                              <div className={category === 'house' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('house')}>
                                  <p>{t('Дом и дача')}</p>
                              </div>
                              <div className={category === 'hobbies' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid ' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid '} onClick={() => setCategory('hobbies')}>
                                  <p>{t('Хобби и отдых')}</p>
                              </div>
                              <div className={category === 'animals' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer'} onClick={() => setCategory('animals')}>
                                  <p>{t('Животные')}</p>
                              </div>
                              <div className={category === 'exchange' ? 'border-2 bg-gray-700 text-white border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid  cursor-pointer' : 'border-2 border-gray-700 rounded-md py-1 px-2 my-2 mx-1 lg:mx-5 cursor-pointer text-small lg:text-mid  cursor-pointer'} onClick={() => setCategory('exchange')}>
                                  <p>{t('Обмен, Даром')}</p>
                              </div>
                          </div>
                          <div>
                              { category === '' ? null :
                                  <div>
                                      <select className="w-80  lg:text-lg text-sm mt-3 p-2 outline-none bg-gray-50"
                                              id=""
                                              onChange={handleChangeInput}
                                              value={productcategory}
                                              name="productcategory">
                                          {
                                              category === 'electronic' &&
                                              categories[0].electronic.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'children' &&
                                              categories[0].children.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'transport' &&
                                              categories[0].transport.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
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
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'services' &&
                                              categories[0].services.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'style' &&
                                              categories[0].stylefashion.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'business' &&
                                              categories[0].business.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'house' &&
                                              categories[0].house.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'hobbies' &&
                                              categories[0].hobbies.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'animals' &&
                                              categories[0].animals.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                          {
                                              category === 'exchange' &&
                                              categories[0].charity.map(item => (
                                                  <option value={item.name_uz} key={item.id}>{lang === 'uz' ? `${item.name_uz}` : lang === 'ru' ?  `${item.name_ru}` : lang ==='oz'  && `${item.name_oz}` }</option>
                                              ))
                                          }
                                      </select>
                                  </div>
                              }
                          </div>
                      </div>

                       <div className='my-5 lg:my-20'>
                           <p className="mt-4 text-xl font-bold">Фото</p>
                           <p className="text-sm text-gray-500"> Первое фото будет на обложке. </p>

                           <div>
                               <div className="col-md-6 my-4 lg:text-base text-sm ">
                                   <div className="input-group mb-3 ">
                                       <div className="input-group-prepend my-5">
                                           <span className="text-base">{t('Выберите фото')}</span>
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
                           <p className="mt-3 px-5 py-2">Описание*</p>
                           <TextareaCounter className=" p-2 lg:p-3  outline-none w-full focus:outline-none "
                                            count countLimit={10000}
                                            initialValue=""
                                            placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"
                           value={description}
                                            onChange={handleChangeInput}
                           name="description"/>

                           <div className='text-gray-600 px-5 py-2 flex'>
                               {
                                   description.length < 50 ? <p>{t('Описание не менее 50 символов')} </p> :
                                       <p>{t("До 10 000 символов")}</p>
                               }
                           </div>
                       </div>




                        {
                            category === 'electronic' &&
                                <div>
                                    <div>
                                        <p className="text-base mt-2">Цена*</p>
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
                           <p className="text-xl font-bold mt-3">Контактная информация</p>

                           <div>
                               <p className="text-base mt-2">Местоположение*</p>
                               <SearchPlaceData/>
                               <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                                      placeholder="Ваше местополежение"
                                      value={location}
                                      name="location"
                                      onChange={handleChangeInput}/>
                           </div>

                           <div>
                               <p className="text-base mt-4">Контактное лицо*</p>
                               <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                                      placeholder={auth.user.name} defaultValue={auth.user.name} value={name}
                                      name='name'
                                      onChange={handleChangeInput}/>
                           </div>

                           <div>
                               <p className="text-base mt-4">Номер телефона*</p>
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
                                       {t('Введите ваш номер телефона')}
                                   </span>
                               ||
                                   phone.length < 9 && <span className='text-red-500 text-sm'>
                                       {t('Номер телефона должен быть не менее 9 символов')}
                                   </span>
                               ||
                                   phone.length !== 12 &&  phone.length !== 9 && <span className='text-red-500 text-sm'>
                                       {t('Не правильный номер телефона')}
                                   </span>
                               }

                           </div>
                       </div>


                        <div className="flex gap-2 mt-4">
                            <input type="checkbox"
                                   className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"
                            onClick={() => setAgree(!agree)}/>
                            <p className="text-xs mt-2">
                                Я согласен и даю согласие на получение коммерческих и маркетинговых сообщений (например,
                                информационного бюллетеня, SMS) от innoveder Group, связанных с ними организаций и их
                                деловых
                                партнеров посредством электронной связи и телекоммуникаций на мое устройство.
                            </p>
                        </div>
                    </div>
                    {
                        agree ?
                            <div className="flex lg:justify-end justify-center items-center py-5 gap-3">
                                <button type="submit"
                                        className="p-3 font-bold hover:bg-gray-600 hover:text-white border-gray-600 border-2 focus:outline-none outline-none rounded-md">Предпросмотр
                                </button>
                                <button type="submit"
                                        className="p-3 font-bold hover:bg-white bg-gray-700 text-white hover:text-gray-700 border-gray-600 border-2 focus:outline-none outline-none rounded-md">Опубликовать
                                </button>
                            </div> :
                            <div className="flex lg:justify-end justify-center items-center py-5 gap-3 opacity-20">
                                <button disabled={true}
                                        className="p-3 font-bold  border-gray-600 border-2 focus:outline-none outline-none rounded-md">Предпросмотр
                                </button>
                                <button disabled={true}
                                        className="p-3 font-bold bg-gray-700 text-white  border-gray-600 border-2 focus:outline-none outline-none rounded-md">Опубликовать
                                </button>
                            </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default Id;
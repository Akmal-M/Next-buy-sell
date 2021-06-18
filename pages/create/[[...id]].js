import React, {useContext, useState} from 'react';
import useTranslation from "next-translate/useTranslation";
import {FcAddImage} from "react-icons/fc";
import {DataContext} from "../../store/GlobalState";

const Id = () => {
    const {t, lang} = useTranslation()
    const {state,} = useContext(DataContext)
    const {auth,categories} = state
    const [category, setCategory] = useState('')
    console.log(category)

    return (
        <div>
            <div className="bg-gray-50">
                <form className="lg:w-2/3 mx-auto ">
                    <p className="text-gray-600 text-3xl font-bold">Создать объявление</p>
                    <div className="bg-white mt-6 p-4">
                        <p className="text-xl font-bold"> Описание объявления</p>
                        <p className="text-lg mt-3">Название*</p>
                        <input className="outline-none mt-2 bg-gray-50 p-2 lg:w-3/4 w-full h-12" type="text"
                               placeholder="Например, iPhone 8"/>
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
                               <p className="mt-4">Категория*</p>
                               <select className="w-80  lg:text-lg text-sm mt-3 p-2 outline-none bg-gray-50" name="" id="">
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

                        <p className="mt-4 text-xl font-bold">Фото
                        </p>
                        <p className="text-base"> Первое фото будет на обложке. </p>


                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-4">
                            <button className="flex justify-center items-center p-14 bg-gray-100">
                                <FcAddImage size={40}/>
                            </button>
                            <button className="flex justify-center items-center p-14 bg-gray-100">
                                <FcAddImage size={40}/>
                            </button>
                            <button className="flex justify-center items-center p-14 bg-gray-100">
                                <FcAddImage size={40}/>
                            </button>
                            <button className="flex justify-center items-center p-14 bg-gray-100">
                                <FcAddImage size={40}/>
                            </button>
                        </div>
                        <p className="mt-3">Описание*</p>
                        <textarea className="bg-gray-100 p-3 border outline-none w-full" rows="7"
                                  placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"/>

                        <p className="text-gray-500">Напишите еще 80 символов</p>
                        <p className="text-xl font-bold mt-3">Контактная информация</p>
                        <p className="text-base mt-2">Местоположение*</p>
                        <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                               placeholder="Название города или индекс"/>
                        <p className="text-base mt-4">Контактное лицо*</p>
                        <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                               placeholder={auth.user.name}/>
                        <p className="text-base mt-4">Контактное лицо*</p>
                        <input className="p-3 w-80 bg-gray-50 mt-2 outline-none" type="text"
                               placeholder="+998  ***  **"/>
                        <div className="flex gap-2 mt-4">
                            <input type="checkbox"
                                   className="block mt-3  bg-red-500 checked:bg-blue-600 checked:border-transparent"/>
                            <p className="text-xs mt-2">
                                Я согласен и даю согласие на получение коммерческих и маркетинговых сообщений (например,
                                информационного бюллетеня, SMS) от innoveder Group, связанных с ними организаций и их
                                деловых
                                партнеров посредством электронной связи и телекоммуникаций на мое устройство.
                            </p>
                        </div>
                    </div>
                    <div className="flex lg:justify-end justify-center items-center py-5 gap-3">
                        <button
                            className="p-3 font-bold hover:bg-gray-600 hover:text-white border-gray-600 border-2 focus:outline-none outline-none rounded-md">Предпросмотр
                        </button>
                        <button
                            className="p-3 font-bold hover:bg-white bg-gray-700 text-white hover:text-gray-700 border-gray-600 border-2 focus:outline-none outline-none rounded-md">Опубликовать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Id;
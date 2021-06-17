import React, {useContext} from 'react';
import useTranslation from "next-translate/useTranslation";
import {FcAddImage} from "react-icons/fc";
import {DataContext} from "../../store/GlobalState";

const Id = () => {
    const {t} = useTranslation()
    const {state, dispatch} = useContext(DataContext)
    const {auth, notify} = state

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
                        <p className="mt-4">Категория*</p>
                        <select className="max-w-80 text-lg mt-3 p-2 outline-none bg-gray-50" name="" id="">
                            <option value="">Выберите категорию</option>
                            <option value="">Выберите категорию</option>
                            <option value="">Выберите категорию</option>
                            <option value="">Выберите категорию</option>
                            <option value="">Выберите категорию</option>
                        </select>
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
                                  placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание">

  </textarea>
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
                                информационного бюллетеня, SMS) от innoveder Group, связанных с ними организаций и их деловых
                                партнеров посредством электронной связи и телекоммуникаций на мое устройство.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6 gap-3">
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
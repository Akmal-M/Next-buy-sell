import React from 'react';
import CategoryCard from "../category/CategoryCard";
import {createStore, useStore} from "react-hookstore";
import useTranslation from "next-translate/useTranslation";

const CategoryMain = () => {
    createStore('categoryStore', '');
    createStore('menuStore', false);
    createStore('menusStore', false);


    const {t, lang} = useTranslation();
    const [menus, setMenus] = useStore('menusStore')
    const [menu, setMenu] = useStore('menuStore')
    const [category, setCategory] = useStore('categoryStore')


    return (
        <div className='relative lg:block hidden mt-16 category-width mx-auto '>
            <div className=' mt-10 container mx-auto'>
                <div className='grid lg:grid-cols-6 grid-cols-3 '>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('electronic')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Электроника')}
                            />
                        </div>
                    </div>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('property')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081488/sold%20commerce/gotov_uh90qg.png'
                                name={t('Недвижимость')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('vehicle')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                name={t('Транспорт')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('children')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623082500/sold%20commerce/png-transparent-teddy-bear-gund-stuffed-toy-plush-plush-toy-blue-child-photography_b7qhv2.png'
                                name={t('Детский мир')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('job')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Работа')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('services')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081949/sold%20commerce/png-transparent-computer-software-computer-icons-wallet-wallet-saving-service-payment_y678iu.png'
                                name={t('Услуги')}/>
                        </div>
                    </div>
                </div>

                <div className={menu ? 'grid lg:grid-cols-6 grid-cols-3 ' : 'grid lg:grid-cols-6 grid-cols-3'}
                     onClick={() => setMenu(false)}>
                    <div onClick={() => setMenu(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('business')}>
                            <CategoryCard
                                img='https://res.cloudinary.com/bulutvoy/image/upload/v1623081048/sold%20commerce/lambo-transparent-yellow-5_prlo8m.png'
                                name={t('Бизнес')}/>
                        </div>
                    </div>

                    <div onClick={() => setMenus(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('style-fashion')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Мода и Стиль')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('house')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Дом и дача')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('hobbies')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Хобби и Отдых')}/>
                        </div>
                    </div>
                    <div onClick={() => setMenus(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('animals')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Животные')}/>
                        </div>
                    </div>

                    <div onClick={() => setMenus(true)}>
                        <div className='flex justify-center my-2' onClick={() => setCategory('exchange')}>
                            <CategoryCard
                                img='https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                                name={t('Обмен / даром')}/>
                        </div>
                    </div>


                </div>
            </div>
            <CategoryCard/>

        </div>
    );
};

export default CategoryMain;
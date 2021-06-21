import {IoMdHeartEmpty} from "react-icons/io";

const CardInfo = ({product}) => {
    return (
        <div className=' lg:px-0 lg:px-5 px-2 '>

        <div className='flex justify-center'>
          <div>
                  <div key={product._id} className='grid lg:mb-10 mb-5 lg:grid-cols-4  bg-white lg:max-w-7xl lg:px-0 pr-2 pl-1  grid-cols-6 lg:px-3 hover:smooth-hover py-1 mr-1 lg:max-h-96 lg:h-72 h-34 smooth-shadow cursor-pointer rounded-lg'>
                      <div className='col-span-2 lg:col-span-1 flex justify-center '>
                          <img src={product.images[0].url} alt="" className='w-full lg:h-64 lg:mt-3 lg:ml-2 md:h-36 info-img-h object-cover rounded-md'/>
                      </div>
                      <div className='col-span-4 lg:col-span-3 lg:px-5 px-2 lg:mt-4 '>
                          <p className='font-bold lg:text-md lg:text-lg text-sm lg:py-1 text-line-cut'>{product.title}</p>

                          <div className='h-14 lg:h-32 overflow-hidden'>
                              <p className='lg:text-sm text-mid-small lg:py-2  sm:text-cut '>{product.description}</p>
                          </div>
                          <div className='flex justify-between lg:text-sm lg:pt-5 pt-1 text-small'>
                              <p>{product.location}</p>
                              <p>{product.createdAt.replace( 'T',  ' / ').slice(0,-8)}</p>
                          </div>
                          <div className='flex justify-between lg:py-3 py-1 lg:px-3 px-1 '>
                              <p className='lg:text-xl text-sm font-bold'>${product.price}</p>
                              <div >
                                  <IoMdHeartEmpty className='lg:text-3xl text-xl'/>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
          </div>
      </div>
    );
};

export default CardInfo;
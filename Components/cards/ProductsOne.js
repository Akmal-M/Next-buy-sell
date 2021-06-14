import CardOne from "./CardOne";

const ProductsOne = () => {
    return (
        <div className=' lg:px-0 px-5 '>
            <div className= 'grid md:grid-cols-3  gap-5 lg:max-w-7xl  container mx-auto  lg:pb-52 pb-10'>
               <CardOne/>
            </div>
        </div>
    );
};

export default ProductsOne;
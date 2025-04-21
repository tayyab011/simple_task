import { useLocation } from "react-router-dom";

const SingleProduct = () => {

    const Location=useLocation();
    const data=Location.state || {}
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
         
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover  rounded"
              src={`https://admin.refabry.com/storage/product/${data.image}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data.name}
              </h1>

              <p className="leading-relaxed">{data.short_desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl ">
                  $<span>{data.price}</span>
                </span>

                <button className="btn flex ml-auto text-white btn-success border-0 py-2 px-6 focus:outline-none  rounded">
                  Button
                </button>
              </div>
              <div className="flex gap-3 mt-4">
                <div className="badge badge-lg badge-secondary gap-2 font-bold text-xs">
                  Buying Price:
                  {data.buying_price}
                </div>
                <div className="badge badge-lg text badge-secondary gap-2  font-bold text-xs">
                  Discount Price:
                  {data.discount_amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SingleProduct;
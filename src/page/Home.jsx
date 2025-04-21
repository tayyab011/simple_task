import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setAllitem } from "../redux/itemSlice";
const Home = () => {
  /* const [products, setProducts] = useState([]); */
  const navigate =useNavigate()
const { items } = useSelector((store) => store.item);
const dispatch =useDispatch()
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://admin.refabry.com/api/all/product/get"
        );
        dispatch(setAllitem(res.data.data.data)); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {items.map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={`https://admin.refabry.com/storage/product/${item.image}`}
              className="h-64 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="text-sm text-gray-600">
              {item.short_desc?.slice(0, 120)}...
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-info">${item.price}</span>

              

              <div className="badge badge-secondary"> stock {item.stock}</div>
            </div>
          </div>
          <div>
            <span
              onClick={() =>
                navigate(`/singleproduct/${item.id}`, { state: item })
              }
              className="btn btn-info"
            >
              see full details
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

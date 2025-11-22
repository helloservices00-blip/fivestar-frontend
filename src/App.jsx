import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { getShops, getShopProducts } from "./api";

// Home page: list all shops
function Home() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getShops().then(setShops);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Shops</h1>
      <ul>
        {shops.map(shop => (
          <li key={shop._id}>
            <Link to={`/shop/${shop._id}`}>{shop.shopName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Shop page: show categories and products
function Shop() {
  const { shopId } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getShopProducts(shopId).then(setCategories);
  }, [shopId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shop Products</h1>
      {categories.length === 0 && <p>No products available.</p>}
      {categories.map(cat => (
        <div key={cat.name} style={{ marginBottom: "20px" }}>
          <h2>{cat.name}</h2>
          <ul>
            {cat.items.map(item => (
              <li key={item.name}>
                {item.name} — ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// App Router
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:shopId" element={<Shop />} />
      </Routes>
    </Router>
  );
}

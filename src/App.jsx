import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  const addToCart = (item) => {
    const newArray = [...cart];
    newArray.push(item);
    setCart(newArray);
    alert(item);
  };

  return (
    <main>
      <nav className="p-3 container text-center sticky-top bg-black text-white mb-4 rounded">
        <h2>MY SHOP</h2>
        <h4>items in cart {cart.length}</h4>
      </nav>
      <section className="container px-3">
        <div className="row">
          {products.map((e, i) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 align-items-stretch"
                key={i}
              >
                <ProductCard
                  addToCart={addToCart}
                  img={e.image}
                  title={e.title}
                  price={e.price}
                  description={e.description}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

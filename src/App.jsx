import { useState } from "react";
import products from "./../data/products";
import ProductCard from "./components/ProductCard/ProductCard";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  const [productsList, setProductsList] = useState(products);
  const [shoppingCardsList, setShoppingCardsList] = useState([]);

  const addToShoppingCard = (productId) => {
    const foundProduct = productsList.find((product) => {
      return product.id == productId;
    });

    setShoppingCardsList([...shoppingCardsList, foundProduct]);
  };

  return (
    <div className="site">
      <header className="header">
        <span className="header-note">THE LITTLE THINGS MATTER</span>
        <div className="brand">
          sidelna <em>gallery</em>
        </div>
        <span className="header-note">JEWELRY & ACCESSORIES</span>
      </header>

      <main>
        <section className="hero">
          <span className="eyebrow">A COLLECTION TO KEEP CLOSE</span>
          <h1>
            Everyday pieces, <em>beautifully yours.</em>
          </h1>
          <p>Thoughtful little details for every version of you.</p>
        </section>

        <section className="collection">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CURATED FOR YOU</span>
              <h2>The Collection</h2>
            </div>
          </div>

          <div className="product-grid">
            {productsList.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  {...product}
                  addToShoppingCard={addToShoppingCard}
                ></ProductCard>
              );
            })}
          </div>
        </section>

        <footer className="footer">
          <strong>Made for the little moments.</strong>
          <span>About sidelna gallery · Jewelry with a personal touch.</span>
        </footer>
      </main>

      <Navigation shoppingCardsList={shoppingCardsList}></Navigation>
    </div>
  );
}

export default App;

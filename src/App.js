import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "./AppStyle";
import { StyledText } from "./components/styles/typography";

function App() {
  const localStorageCart = localStorage.getItem("@cart-burguerkenzie");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localStorageCart ? JSON.parse(localStorageCart) : []
  );
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("@cart-burguerkenzie", JSON.stringify(currentSale));
  }, [currentSale]);

  function showProducts(event) {
    event.preventDefault();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        product.category.toLowerCase().includes(search.trim().toLowerCase())
      );
    });
    setFilteredProducts(filtered);
  }

  function addCart(productId) {
    let currentProduct = products.find((product) => {
      return product.id === productId;
    });
    if (!currentSale.some((product) => product.id === productId)) {
      currentProduct.amount = 1;
      setCurrentSale([...currentSale, currentProduct]);
      toast.success("Item adicionado no carrinho");
    } else {
      currentProduct.amount++;
      setCurrentSale([...currentSale]);
      toast.success("Item adicionado no carrinho");
    }
  }

  function removeCart(productId) {
    const newList = currentSale.filter((product) => {
      return product.id !== productId;
    });
    setCurrentSale(newList);
    toast.error("Item removido do carrinho");
  }

  function removeAll() {
    setCurrentSale([]);
    localStorage.removeItem("@cart-burguerkenzie");
  }

  function clickLogo() {
    setFilteredProducts(products);
  }

  return (
    <div className="App">
      {loading ? (
        <>
          <Header
            showProducts={showProducts}
            search={search}
            setSearch={setSearch}
          />
          <Loading />
        </>
      ) : (
        <>
          <Header
            showProducts={showProducts}
            search={search}
            setSearch={setSearch}
            clickLogo={clickLogo}
          />
          <StyledContainer>
            <div className="products">
              {filteredProducts.length ? (
                <ProductsList products={filteredProducts} addCart={addCart} />
              ) : (
                <div className="container">
                  <StyledText tag="h3" font="heading3" color="#828282">
                    Nenhum item foi encontrado
                  </StyledText>
                </div>
              )}
            </div>
            <div className="cart">
              <Cart
                currentSale={currentSale}
                removeCart={removeCart}
                removeAll={removeAll}
              />
            </div>
          </StyledContainer>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      )}
    </div>
  );
}

export default App;

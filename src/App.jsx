import "./App.css";
function App() {
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
            
          </div>
        </section>

        <footer className="footer">
          <strong>Made for the little moments.</strong>
          <span>About sidelna gallery · Jewelry with a personal touch.</span>
        </footer>
      </main>

      <nav className="bottom-nav" aria-label="Main navigation">
        <div className="nav-item active">
          <span>⌂</span>
          <small>Home</small>
        </div>

        <div className="nav-item nav-item-preview">
          <div className="preview-panel cart-preview">
            <div className="preview-header">
              <span>Your Bag</span>
              <span>2 items</span>
            </div>

            <div className="preview-product">
              <div className="preview-jewel mini-ring" />
              <div>
                <strong>Solstice Ring</strong>
                <small>Gold · $24</small>
              </div>
              <div className="preview-item-actions">
                <b>$24</b>
                <button type="button" className="remove-item" aria-label="Remove item">
                  🗑
                </button>
              </div>
            </div>

            <div className="preview-product">
              <div className="preview-jewel mini-earrings" />
              <div>
                <strong>Rosie Drop Earrings</strong>
                <small>Rose gold · $26</small>
              </div>
              <div className="preview-item-actions">
                <b>$26</b>
                <button type="button" className="remove-item" aria-label="Remove item">
                  🗑
                </button>
              </div>
            </div>

            <div className="preview-total">
              <span>Total</span>
              <strong>$50</strong>
            </div>

            <div className="preview-button">View Bag</div>
          </div>

          <span>♧</span>
          <small>Cart</small>
        </div>

        <div className="nav-item nav-item-preview">
          <div className="preview-panel wishlist-preview">
            <div className="preview-header">
              <span>Saved Pieces</span>
              <span>3 items</span>
            </div>

            <div className="preview-product">
              <div className="preview-jewel mini-bracelet" />
              <div>
                <strong>Pearl Hour Bracelet</strong>
                <small>Soft ivory · $32</small>
              </div>
              <div className="preview-item-actions">
                <span className="heart-mark">♡</span>
                <button type="button" className="remove-item" aria-label="Remove item">
                  🗑
                </button>
              </div>
            </div>

            <div className="preview-product">
              <div className="preview-jewel mini-ring silver-ring" />
              <div>
                <strong>Silver Moon Ring</strong>
                <small>Silver · $22</small>
              </div>
              <div className="preview-item-actions">
                <span className="heart-mark">♡</span>
                <button type="button" className="remove-item" aria-label="Remove item">
                  🗑
                </button>
              </div>
            </div>

            <div className="preview-product">
              <div className="preview-jewel mini-earrings" />
              <div>
                <strong>Petal Pearl Earrings</strong>
                <small>Warm pearl · $25</small>
              </div>
              <div className="preview-item-actions">
                <span className="heart-mark">♡</span>
                <button type="button" className="remove-item" aria-label="Remove item">
                  🗑
                </button>
              </div>
            </div>

            <div className="preview-button">View Wishlist</div>
          </div>

          <span>♡</span>
          <small>Wishlist</small>
        </div>

        <div className="nav-item">
          <span>ⓘ</span>
          <small>About</small>
        </div>
      </nav>
    </div>
  );
}



export default App;
import styles from "./Navigation.module.css";

function Navigation({ shoppingCardsList, favoriteCardsList }) {
  return (
    <nav className={styles.bottomNav} aria-label="Main navigation">
      <div className={`${styles.navItem} ${styles.active}`}>
        <span className={styles.navIcon}>⌂</span>
        <small>Home</small>
      </div>

      <div
        className={`${styles.navItem} ${styles.navItemPreview} ${styles.cartNavItem}`}
      >
        <div className={`${styles.previewPanel} ${styles.cartPreview}`}>
          <div className={styles.previewHeader}>
            <span>Your Bag</span>
            <span>
              {shoppingCardsList.length}{" "}
              {shoppingCardsList.length > 0 ? "ITEMS" : "ITEM"}
            </span>
          </div>

          {shoppingCardsList.map((product) => {
            return (
              <div key={product.id} className={styles.previewProduct}>
                <img
                  src={product.img}
                  alt={product.title}
                  className={styles.previewImage}
                />
                <div>
                  <strong>{product.title}</strong>
                </div>
                <div className={styles.previewItemActions}>
                  <b>${product.price?.toLocaleString()}</b>
                  <button
                    type="button"
                    className={styles.removeItem}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>
                </div>
              </div>
            );
          })}

          <div className={styles.previewTotal}>
            <span>Total</span>
            <strong>
              $
              {shoppingCardsList
                .reduce((total, product) => {
                  return total + product.price;
                }, 0)
                .toLocaleString()}
            </strong>
          </div>
        </div>

        <span className={styles.navIcon}>♧</span>
        <small>Cart</small>
      </div>

      <div
        className={`${styles.navItem} ${styles.navItemPreview} ${styles.wishlistNavItem}`}
      >
        <div className={`${styles.previewPanel} ${styles.wishlistPreview}`}>
          <div className={styles.previewHeader}>
            <span>Saved Pieces</span>
            <span>{favoriteCardsList.length} {favoriteCardsList.length>0?"ITEMS":"ITEM"}</span>
          </div>

              {favoriteCardsList.map((product)=>{
                return (          <div className={styles.previewProduct}>
            <img
              src={product.img}
              alt="product image"
              className={styles.previewImage}
            />
            <div>
              <strong>{product.title}</strong>
            </div>
            <div className={styles.previewItemActions}>
              <span className={styles.heartMark}>♡</span>
              <button
                type="button"
                className={styles.removeItem}
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>)
              })}
        </div>

        <span className={styles.navIcon}>♡</span>
        <small>Favorites</small>
      </div>

      <div className={styles.navItem}>
        <span className={styles.navIcon}>ⓘ</span>
        <small>About</small>
      </div>
    </nav>
  );
}

export default Navigation;

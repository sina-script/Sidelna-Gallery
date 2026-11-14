import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.bottomNav} aria-label="Main navigation">

      <div className={`${styles.navItem} ${styles.active}`}>
        <span className={styles.navIcon}>⌂</span>
        <small>Home</small>
      </div>


      <div className={`${styles.navItem} ${styles.navItemPreview} ${styles.cartNavItem}`}>
        <div className={`${styles.previewPanel} ${styles.cartPreview}`}>
          <div className={styles.previewHeader}>
            <span>Your Bag</span>
            <span>2 items</span>
          </div>

          <div className={styles.previewProduct}>
            <div className={`${styles.previewJewel} ${styles.miniRing}`} />
            <div>
              <strong>Solstice Ring</strong>
              <small>Gold · $24</small>
            </div>
            <div className={styles.previewItemActions}>
              <b>$24</b>
              <button
                type="button"
                className={styles.removeItem}
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>

          <div className={styles.previewProduct}>
            <div className={`${styles.previewJewel} ${styles.miniEarrings}`} />
            <div>
              <strong>Rosie Drop Earrings</strong>
              <small>Rose gold · $26</small>
            </div>
            <div className={styles.previewItemActions}>
              <b>$26</b>
              <button
                type="button"
                className={styles.removeItem}
                aria-label="Remove item"
              >
                🗑
              </button>
            </div>
          </div>

          <div className={styles.previewTotal}>
            <span>Total</span>
            <strong>$50</strong>
          </div>

          <div className={styles.previewButton}>View Bag</div>
        </div>

        <span className={styles.navIcon}>♧</span>
        <small>Cart</small>
      </div>


      <div className={`${styles.navItem} ${styles.navItemPreview} ${styles.wishlistNavItem}`}>
        <div className={`${styles.previewPanel} ${styles.wishlistPreview}`}>
          <div className={styles.previewHeader}>
            <span>Saved Pieces</span>
            <span>3 items</span>
          </div>

          <div className={styles.previewProduct}>
            <div className={`${styles.previewJewel} ${styles.miniBracelet}`} />
            <div>
              <strong>Pearl Hour Bracelet</strong>
              <small>Soft ivory · $32</small>
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
          </div>

          <div className={styles.previewProduct}>
            <div className={`${styles.previewJewel} ${styles.miniRing} ${styles.silverRing}`} />
            <div>
              <strong>Silver Moon Ring</strong>
              <small>Silver · $22</small>
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
          </div>

          <div className={styles.previewProduct}>
            <div className={`${styles.previewJewel} ${styles.miniEarrings}`} />
            <div>
              <strong>Petal Pearl Earrings</strong>
              <small>Warm pearl · $25</small>
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
          </div>

          <div className={styles.previewButton}>View Wishlist</div>
        </div>

        <span className={styles.navIcon}>♡</span>
        <small>Wishlist</small>
      </div>


      <div className={styles.navItem}>
        <span className={styles.navIcon}>ⓘ</span>
        <small>About</small>
      </div>
    </nav>
  );
}

export default Navigation;

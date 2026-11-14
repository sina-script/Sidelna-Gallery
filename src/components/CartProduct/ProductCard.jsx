import styles from "./productCart.module.css";

 function ProductCard({ id, title, category, price }) {
  return (
    <article className={`${styles.productCard} ${styles[theme] || ""}`}>
      <div className={styles.productArt}>
        <span className={`${styles.jewel} ${styles[jewelType] || ""}`} />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productMeta}>
          <span>{category}</span>
          <span>{price}</span>
        </div>

        <h3>{title}</h3>

        <div className={styles.productActions}>
          <button type="button">Add to Bag</button>
          <button type="button" className={styles.save}>
            ♡ Save
          </button>
        </div>
      </div>
    </article>
  );
}



export default ProductCard;

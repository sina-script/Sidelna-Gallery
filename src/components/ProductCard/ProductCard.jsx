import styles from "./ProductCard.module.css";

function ProductCard({
  id,
  title,
  category,
  price,
  img,
  addToShoppingCard,
}) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productArt}>
        <img src={img} alt="product image" className={styles.productImage} />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.productMeta}>
          <span>{category}</span>
          <span>${price?.toLocaleString()}</span>
        </div>

        <h3>{title}</h3>

        <div className={styles.productActions}>
          <button type="button" onClick={() => addToShoppingCard(id)}>
            Add to Bag
          </button>
          <button type="button" className={styles.save}>
            ♡ Save
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

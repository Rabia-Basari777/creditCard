import styles from "./CreditCard.module.css";

export const CardData = ({cardNumber, handleDelete}) => {
    return (
        <div className={styles.detailDiv}>
            <p>{cardNumber}</p>
            <p onClick={handleDelete} className={styles.delete}>Delete</p>
        </div>
    )
}
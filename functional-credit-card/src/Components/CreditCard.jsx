import { useState, useRef } from "react";
import { CardData } from "./CardData";
import styles from "./CreditCard.module.css";

export const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    const handleChange1 = (e) => {
      let num = e.target.value;
      if (num.length > 4) {
        inputRef1.current.value = num.slice(0, 4);
        inputRef2.current.value = num.slice(4, 8);
        inputRef3.current.value = num.slice(8, 12);
        inputRef4.current.value = num.slice(12, 16);
        inputRef4.current.focus();
      }
        if (num.length < 4) {
            setInput1(num);
        }
        else if (num.length === 4) {
            setInput1(num);
            inputRef2.current.focus();
        }
    }
    const handleChange2 = (e) => {
        let num = e.target.value;
        if (num.length < 4) {
          setInput2(num);
        } else if (num.length === 4) {
             setInput2(num);
          inputRef3.current.focus();
        }
    }
    const handleChange3 = (e) => {
      let num = e.target.value;
      if (num.length < 4) {
        setInput3(num);
      } else if (num.length === 4) {
        setInput3(num);
        inputRef4.current.focus();
      }
    }
    const handleChange4 = (e) => {
      let num = e.target.value;
      if (num.length <= 4) {
        setInput4(num);
      }
      else if (num.length > 4) {
        inputRef4.current.value = num.slice(0, 4);
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      let num1 = inputRef1.current.value.trim().split("").join("");
      let num2 = inputRef2.current.value.trim().split("").join("");
      let num3 = inputRef3.current.value.trim().split("").join("");
      let num4 = inputRef4.current.value.trim().split("").join("");
      setCardNumber(num1 + " " + num2 + " " + num3 + " " + num4);
    }
    // const handleEnter = (e) => {
    //     if (e.key === "Enter") {
    //         let cardNum = input1 + " " + input2 + " " + input3 + " " + input4;
    //         console.log(cardNum);
    //     }
    // }
  const handleDelete = () => {
    setCardNumber("");
    inputRef1.current.value = "";
    inputRef2.current.value = "";
    inputRef3.current.value = "";
    inputRef4.current.value = "";
  }

    return (
      <div>
        <form onSubmit={handleSubmit} className={styles.formDiv}>
          <input
            type="text"
            placeholder="0000"
            onChange={handleChange1}
            ref={inputRef1}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="0000"
            onChange={handleChange2}
            ref={inputRef2}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="0000"
            onChange={handleChange3}
            ref={inputRef3}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="0000"
            onChange={handleChange4}
            ref={inputRef4}
            className={styles.input}
          />
          <br />
          <input type="submit" value="Submit" className={styles.submit} />
        </form>
        {cardNumber.length === 19 ? (
          <CardData handleDelete={handleDelete} cardNumber={cardNumber} />
        ) : cardNumber.length ? (
          <p className={`${styles.detailDiv} ${styles.text}`}>
            Inavalid Card Number
          </p>
        ) : (
          <p className={`${styles.detailDiv} ${styles.text}`}>
            Please Enter your Card Details
          </p>
        )}
      </div>
    );
}
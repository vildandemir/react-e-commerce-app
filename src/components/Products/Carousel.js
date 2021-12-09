import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styles from "./styles.module.css";

const fadeIn = keyframes`
0% { opacity:0.5; }
100% { opacity:1; }
`;

const arr = [
  {
    show: "block",
    url: "https://shoppolly.com/public/uploads/all/LgbZLRIyhehkYbqu5nwRi9MVqpZPQPmkhxSSs4B8.jpg",
  },
  {
    show: "none",
    url: "https://www.hofstatt.info/wp-content/uploads/2016/09/shop-banner.jpg",
  },
  {
    show: "none",
    url: "https://st3.depositphotos.com/1001169/31933/v/1600/depositphotos_319339972-stock-illustration-christmas-banner-background-xmas-design.jpg",
  },
  {
    show: "none",
    url: "https://www.firstclasswatches.co.uk/blog/wp-content/uploads/2017/11/black-friday-banner.jpg",
  },
  {
    show: "none",
    url: "https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w",
  },
];

function Carousel() {
  const [value, setValue] = React.useState(1);
  const [delay, setDelay] = React.useState(5000);

  const handleChange = (e) => {
    if (e.target.id === "+") {
      value === 4 ? setValue(0) : setValue(value + 1);
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    } else {
      console.log(value - 1);
      if (value - 1 === -1) {
        setValue(4);
      } else {
        setValue(value - 1);
      }
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    }
  };
  useInterval(() => {
    // Your custom logic here
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map((i) => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);
  return (
    <>
      <div className={styles.section}>
        <div className={styles.marqueeStart}>
          <div class={styles.marqueeContainer}>
            <div class={styles.marquee}>
              <span class={styles.marqueeEnd}>
                MINT DATE: TBA ~ MINT PRICE: TBA ~ TOTAL SUPPLY: 8888 ~ PRE SALE
                DATE: TBA
              </span>
            </div>
            <div class={styles.marquee}>
              <span class={styles.marqueeEnd}>
                MINT DATE: TBA ~ MINT PRICE: TBA ~ TOTAL SUPPLY: 8888 ~ PRE SALE
                DATE: TBA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "0px" }}>
        {arr.map((item, key) => {
          return (
            <Box
              backgroundColor="#222"
              backgroundImage={`url(${item.url})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="100vw"
              height="80vh"
              animation={`${fadeIn} ease 2s`}
              display={item.show}
              key={key}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "contrast(.8)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "inherit",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "#fff" }}>hola</div>
                  <div style={{ color: "#fff" }}>hola</div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>

      <div>
        <button onClick={handleChange} id="-">{`<<<`}</button>
        <button onClick={handleChange} id="+">
          {`>>>`}{" "}
        </button>
      </div>
    </>
  );
}
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Carousel;

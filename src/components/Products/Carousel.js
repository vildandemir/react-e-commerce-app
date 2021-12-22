import React, { useRef, useEffect } from "react";
import { Box, Button, Circle, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
0% { opacity:0.5; }
100% { opacity:1; }
`;

const arr = [
  {
    show: "block",
    url: "https://shoppolly.com/public/uploads/all/LgbZLRIyhehkYbqu5nwRi9MVqpZPQPmkhxSSs4B8.jpg",
    get: "/pants",
  },
  {
    show: "none",
    url: "https://www.hofstatt.info/wp-content/uploads/2016/09/shop-banner.jpg",
    get: "/dresses",
  },
  {
    show: "none",
    url: "https://st3.depositphotos.com/1001169/31933/v/1600/depositphotos_319339972-stock-illustration-christmas-banner-background-xmas-design.jpg",
    get: "/dressshirts",
  },
  {
    show: "none",
    url: "https://www.firstclasswatches.co.uk/blog/wp-content/uploads/2017/11/black-friday-banner.jpg",
    get: "/sunglasses",
  },
  {
    show: "none",
    url: "https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w",
    get: "/jackets",
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
                Only Till Midnight ! UP TO %90 OF ALL SALE ! Free Worldwide
                Shipping
              </span>
            </div>
            <div class={styles.marquee}>
              <span class={styles.marqueeEnd}>
                Only Till Midnight ! UP TO %90 OF ALL SALE ! Free Worldwide
                Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "0px" }} w={[300, 400, 500]}>
        {arr.map((item, key) => {
          return (
            <Link to={item.get} key={key}>
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
                  ></div>
                </div>
              </Box>
            </Link>
          );
        })}
      </div>

      <div class={styles.turn}>
        <Button
          class={styles.btn}
          size="sm"
          onClick={handleChange}
          id="-"
        >{`<<<`}</Button>

        <Button class={styles.btn} size="sm" onClick={handleChange} id="+">
          {`>>>`}
        </Button>
      </div>
      <HStack mt={10} mb={2} backgroundColor="#fffff">
        <Circle
          className={styles.circle}
          size="40px"
          // backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundColor={"red"}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        >
          %50 Sale
        </Circle>
        <Circle
          ml={100}
          className={styles.circle}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          mt={10}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
        <Circle
          className={styles.circle}
          size="40px"
          backgroundImage={`https://images.squarespace-cdn.com/content/v1/532313ece4b08487acaec7a2/1463066669231-HF9IJNDUTLMUK4RCBPCY/unnamed+%281%29.jpg?format=1000w`}
          backgroundSize="cover"
          color="white"
          width="7vw"
          height="14vh"
        ></Circle>
      </HStack>
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

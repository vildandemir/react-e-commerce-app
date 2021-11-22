import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
0% { opacity:0.6; }
100% { opacity:1; }
`;

const arr = [
  { show: "block", url: "https://source.unsplash.com/WLUHO9A_xik/1440x960" },
  { show: "none", url: "https://source.unsplash.com/DNE9iZ1Kqzk/1440x960" },
  { show: "none", url: "https://source.unsplash.com/6ccJQ5qPFvY/1440x960" },
  { show: "none", url: "https://source.unsplash.com/qTLyiHW1nIc/1440x960" },
  { show: "none", url: "https://source.unsplash.com/fxX__3GRtsg/1440x960" },
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
      <div style={{ marginTop: "3px" }}>
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

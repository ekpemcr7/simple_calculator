import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useState } from "react";

function App() {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: ["Inconsolata"].join(","),
    },
  });

  // creating states[4]
  const [result, setResult] = useState(0);
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);

  const principalHandler = (e) => {
    setPrincipal(e.target.value);
  };
  const rateHandler = (e) => {
    setRate(e.target.value);
  };
  const timePeriodHandler = (e) => {
    setTimePeriod(e.target.value);
  };

  // calculate and reset
  const calculateHandler = () => {
    const check = principal || rate || timePeriod;
    if (!isNaN(check) || check === "") {
      setResult((principal * rate * timePeriod) / 100);
    } else {
      alert("enter a valid number");
      // resetHandler();
    }
  };
  const resetHandler = () => {
    setPrincipal(""), setRate(""), setTimePeriod(""), setResult(0);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="app">
        <div className="container">
          <div className="heading">
            <h1>Simple Interest Calculator</h1>
            <h3 style={{ marginTop: "-15px" }}>
              Calculate your Simple Interest easily here..
            </h3>
          </div>
          <div className="result_card">
            <h2>₹ {result}</h2>
            <h4>Total Simple Interest</h4>
          </div>
          <form>
            <div className="form-container">
              <div className="input-field">
                <TextField
                  id="outlined-basic"
                  label={"Principal Amount"}
                  variant="outlined"
                  InputProps={{
                    style: {
                      borderRadius: "5px",
                      width: "385px", // custom border radius
                    },
                  }}
                  value={principal || ""}
                  onChange={principalHandler}
                />
              </div>
              <div className="input-field">
                <TextField
                  id="outlined-basic"
                  label="Rate of Interest (p.a)"
                  variant="outlined"
                  InputProps={{
                    style: {
                      borderRadius: "5px",
                      width: "385px", // custom border radius
                    },
                  }}
                  value={rate || ""}
                  onChange={rateHandler}
                />
              </div>
              <div className="input-field">
                <TextField
                  id="outlined-basic"
                  label="Time period (in years)"
                  variant="outlined"
                  InputProps={{
                    style: {
                      borderRadius: "5px",
                      width: "385px",
                      fontFamily: "Inconsolata", // custom border radius
                    },
                  }}
                  value={timePeriod || ""}
                  onChange={timePeriodHandler}
                />
              </div>
            </div>
            <Stack className="stack-edit" direction="row" spacing={8}>
              <Button
                color="success"
                variant="contained"
                style={{
                  width: "130px",
                  height: "50px",
                  fontSize: "20px",
                }}
                onClick={calculateHandler}
              >
                Calculate
              </Button>
              <Button
                variant="contained"
                style={{
                  fontSize: "20px",
                  width: "130px",
                  height: "50px",
                }}
                onClick={resetHandler}
              >
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

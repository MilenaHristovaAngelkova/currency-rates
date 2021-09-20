import { useEffect, useState } from 'react';
import ConversionsData from './ConversionData';

function App() {
  const currs = ["usd", "eur", "aud", "cad", "chf", "nzd", "bgn"];
  const [selectedOption, setSelectedOption] = useState("usd");
  const [isPending, setIsPending] = useState(true);
  const [errorM, setErrorM] = useState("");
  const [currencyRates, setCurrencyRates] = useState({});
  let date = new Date();
  let currentDate = date.toLocaleString("az-AZ", {  
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
  })
  
  let urlsData = async () => {
    for await (let i of currs) {
        for await (let j of currs) {
            if (i !== j) {
                let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${i}/${j}.json`;
                await fetch(url)
                .then(res => {
                    if (!res.ok) {
                        setIsPending(false);
                        setErrorM("Could not peform the current fetch request.");
                        throw new Error ("Could not peform the current fetch request.")
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setCurrencyRates((d) => {
                        return {
                        ...d, 
                        [`${i}-${j}`]: Object.values(data)[1]
                        }
                    })
                })
                .catch(err => {
                    setIsPending(false);
                    setErrorM(err.message);
                    return err.message;
                })
            }
        }
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`${selectedOption}-${currentDate}`)) {
        setCurrencyRates(JSON.parse(localStorage.getItem(`${selectedOption}-${currentDate}`)));
        setIsPending(false);
    } else {
        urlsData();
        localStorage.setItem(currentDate, JSON.stringify(currencyRates));
    }
  }, []);

  return (
      <section className="home">
          <h1>Exchange Rates Information</h1>    
          <form>
              <label htmlFor="currency">See currency rates for: </label>
              <select name="currency" id="currency" defaultValue="usd" onChange={(e) => setSelectedOption(e.target.value)}>
              {currs.map(curr => {
                  return(
                  <option value={curr} key={curr} id={curr}>{curr.toUpperCase()}</option>
                  )
              })}
              </select>
          </form>
          {isPending && <p className="state-info">Loading...</p>}
          {errorM && <p className="state-info">{ errorM }</p>}
          {currencyRates && selectedOption ? 
          <ConversionsData selectedOption={selectedOption} currencyRates={currencyRates} /> : 
          <p className="state-info">Something went wrong.</p>}
      </section>
  );
}

export default App;

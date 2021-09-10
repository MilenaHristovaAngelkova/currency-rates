import { useEffect, useState } from 'react';
import ConversionsData from './ConversionData';

const Home = () => {
    const currs = ["usd", "eur", "aud", "cad", "chf", "nzd", "bgn"];
    const [selectedOption, setSelectedOption] = useState("usd");
    const [isPending, setIsPending] = useState(true);
    const [errorM, setErrorM] = useState("");
    const [status, setStatus] = useState("");
    const [currencyRates, setCurrencyRates] = useState({});
    let ratesDetails = {};
    let date = new Date();
    let currentDate = date.toLocaleString("az-AZ", {  
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })

    useEffect(() => { 
        if (localStorage.getItem(`${selectedOption}-${currentDate}`)) {
            setCurrencyRates(JSON.parse(localStorage.getItem(`${selectedOption}-${currentDate}`)));
            setIsPending(false);
            setStatus('success');
        }

        for (let i = 0; i < currs.length; i++) {
            for (let j = 0; j < currs.length; j++) {
                if (currs[i] !== currs[j]) {
                    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currs[i]}/${currs[j]}.json`)
                    .then(res => {
                    if (!res.ok) {
                        setIsPending(false);
                        setErrorM("Could not peform the current fetch request.");
                        throw new Error ("Could not peform the current fetch request.")
                    }
                    return res.json();
                    })
                    .then(data => {
                        let currKey = `${currs[i].toUpperCase()}-${currs[j].toUpperCase()}`;
                        let value = data[currs[j]];
                        ratesDetails[currKey] = value;
            
                        setIsPending(false);
                    })
                    .catch(err => {
                        setIsPending(false);
                        setErrorM(err.message);
                    })  
                }
            }
        }
        setCurrencyRates(ratesDetails);
        setStatus("success");
        localStorage.setItem(currentDate, JSON.stringify(currencyRates));
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
            {status === "success" ? <ConversionsData selectedOption={selectedOption} currencyRates={currencyRates} /> : 
            <p className="state-info">Something went wrong.</p>}
        </section>
    );
}
 
export default Home;
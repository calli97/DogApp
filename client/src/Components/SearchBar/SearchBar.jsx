import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import SearchResults from "../SearchResults/SearchResults";

function SearchBar() {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    useEffect(() => {
        if (input.length > 0) {
            //Proxy
            fetch(`/dogs?name=${input}`)
                .then((res) => res.json())
                .then((dogs) => setData(dogs));
        } else {
            setData([]);
        }
    }, [input]);

    return (
        <div>
            <form className={styles.form}>
                <label htmlFor="">🔎 Search: </label>
                <input
                    type="text"
                    className={styles.input}
                    value={input}
                    onChange={changeHandler}
                />
                {input.length > 0 ? (
                    <SearchResults results={data} inputSetter={setInput} />
                ) : (
                    ""
                )}
            </form>
        </div>
    );
}

export default SearchBar;

import React, { useEffect, useState } from "react";
import styles from "./TemperamentsNewDog.module.css";
import NewDogTemperamentPick from "../NewDogTemperamentPick/NewDogTemperamentPick";
import NewDogTemperamentSelector from "../NewDogTemperamentsSelector/NewDogTemperamentSelector";

function TemperamentsNewDog({ form, formSetter }) {
    const [input, setInput] = useState("");
    const [allTemperaments, setAllTemperaments] = useState([]);
    const [searchedTemperaments, setSearchedTemperaments] = useState([]);
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    useEffect(() => {
        const search = async () => {
            //Proxy
            const response = await fetch("/temperaments");
            const data = await response.json();
            setAllTemperaments(data);
        };
        search();
    }, []);

    useEffect(() => {
        if (input.length > 0) {
            let aux = [];
            for (let i = 0; i < allTemperaments.length; i++) {
                if (
                    allTemperaments[i].name
                        .toLowerCase()
                        .includes(input.toLowerCase())
                ) {
                    aux.push(allTemperaments[i]);
                }
            }
            setSearchedTemperaments(aux);
        } else {
            setSearchedTemperaments([]);
        }
    }, [input, allTemperaments]);

    return (
        <div className={styles.container}>
            <label htmlFor="">Temperaments: </label>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                className={styles.input}
            />
            {input.length > 0 ? (
                <NewDogTemperamentSelector
                    search={searchedTemperaments}
                    form={form}
                    formSetter={formSetter}
                    selected={selectedTemperaments}
                    selectedSetter={setSelectedTemperaments}
                    all={allTemperaments}
                    allSetter={setAllTemperaments}
                    inputSetter={setInput}
                />
            ) : (
                ""
            )}
            <div>
                {selectedTemperaments.map((el) => (
                    <NewDogTemperamentPick
                        key={`${el.name}-pickeado`}
                        temperament={el}
                        form={form}
                        formSetter={formSetter}
                        selected={selectedTemperaments}
                        selectedSetter={setSelectedTemperaments}
                        all={allTemperaments}
                        allSetter={setAllTemperaments}
                    />
                ))}
            </div>
        </div>
    );
}

export default TemperamentsNewDog;

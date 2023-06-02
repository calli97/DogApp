import React from "react";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
    // useEffect(() => {
    //   fetch('http://localhost:3001/dogs',{

    //   })
    //   .then(response=>response.json())
    //   .then(data=>console.log(data))

    // }, [])

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>The Dog App</h1>
                <div className={styles.options}>
                    <div className={styles.option}>
                        <h4>See the all the breeds avaible!!</h4>
                        <Link
                            to="home"
                            className={`${styles.link} ${styles.buttonLink}`}
                        >
                            Home
                        </Link>
                    </div>
                    <div className={styles.option}>
                        <h4> Or create a new one!!</h4>
                        <Link
                            to="form"
                            className={`${styles.link} ${styles.buttonLink}`}
                        >
                            Form
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

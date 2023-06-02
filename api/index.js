//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const temperamentControllers = require("./src/controllers/temperamentControllers/index.js");
const { conn } = require("./src/db.js");
// const { Client } = require("pg");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// // Syncing all the models at once.
// console.log(DB_USER);
// console.log(DB_PASSWORD);
// console.log(DB_HOST);

// const client = new Client({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port: 5455,
// });

// const createDatabase = async () => {
//     try {
//         console.log("INICIA LA CONEXION");
//         await client.connect(); // gets connection
//         console.log("CONECTADO");
//         //await client.query("CREATE DATABASE dogs_api"); // sends queries
//         ///////Docker user
//         //await client.query("CREATE ROLE postgres WITH LOGIN PASSWORD admin;");
//         /////
//         const checkIfExists = await client.query(
//             "SELECT 1 FROM pg_database WHERE datname = $1",
//             ["dogs_api"]
//         );
//         console.log("CONECTADO");
//         if (checkIfExists.rowCount > 0) {
//             // Eliminar la base de datos existente
//             await client.query("DROP DATABASE dogs_api");
//             console.log("ELIMINO SI EXISTE");
//         }
//         await client.query("CREATE DATABASE dogs_api");
//         console.log("CREADAA");
//         //docker
//         // await client.query("CREATE DATABASE dogs_api WITH OWNER postgres");

//         return true;
//     } catch (error) {
//         console.error(error.stack);
//         console.log("cacaaaa");
//         return false;
//     } finally {
//         await client.end(); // closes connection
//     }
// };

function main() {
    // createDatabase().then((result) => {
    //     if (result) {
    //         console.log("Database created");
    conn.sync({ force: true }).then(() => {
        server.listen(3001, () => {
            console.log("%s listening at 3001"); // eslint-disable-line no-console
            temperamentControllers.initTemperaments();
        });
    });
    //     }
    // });
}

main();

let db = openDatabase('mydb', '1.0', 'DB', 2 * 1024 * 1024);

queryToDB('DROP TABLE TEAM');
queryToDB('CREATE TABLE IF NOT EXISTS TEAM (name, inst)');

let names = ['Анна Анастасиевна', 'Жора Шварцнегер', 'Анатолий Тарасов', 'Пауль Газмясочка', 'Паулина Чиж'];
let insts = ['https://www.instagram.com/Анастасиевна', 'https://www.instagram.com/Шварцнегер', 'https://www.instagram.com/Тарасов', 'https://www.instagram.com/', 'https://www.instagram.com/'];

names.forEach((el,i, arr)=>{
let insertQuery = 'INSERT INTO TEAM (name, inst) VALUES (?,?)';
let arrayForQuery = [el, insts[i]];

queryToDB(insertQuery, arrayForQuery);
});

function queryToDB(...args) {
    db.transaction(function(tx) {
        tx.executeSql(...args);
    });
}
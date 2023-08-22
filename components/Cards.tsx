import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import Card from '../components/Card'

export default async function Cards({name}:any) {
    let db = null;
    db = await open({
        filename: '/components/AndroPokemon.db',
        driver: sqlite3.Database
    });

    const items = await db.all('SELECT * FROM POKEMONS WHERE NAMELOW LIKE \''+name+'%\' LIMIT 5')
    const json = JSON.stringify(items)

    return <>
        <div className="row">
            {items.map((item) => <div className="col-4"><Card json={item}></Card></div>)}
        </div>
    </>
}
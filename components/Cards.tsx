import Card from '../components/Card'
import jsonData from '../public/AndroPokemon.json'

export default function Cards({name}:any) {
     if (!name){
        return<></>
     }
    const pokemons = jsonData.filter(pokemon =>
        pokemon.NAMELOW.startsWith(name)
    )

    return <>
        <div className="row">
            {pokemons.map((item) => <div className="col-4"><Card json={item}></Card></div>)}
        </div>
    </>
}
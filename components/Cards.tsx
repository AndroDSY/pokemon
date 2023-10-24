import Card from '../components/Card'
import jsonData from '../public/AndroPokemon.json'

export default function Cards({name, count}:{name:string, count:string}) {
     if (!name){
        return<></>
     }

     let realCount = 5
     if (count.startsWith('-')){
        realCount = -1
     } else if (isNaN(Number.parseInt(count)) == false){
        realCount = Number.parseInt(count)
     }

    const pokemons = jsonData.filter(pokemon =>
        pokemon.nameLow.startsWith(name)
    )

    return <>

        <div className="row">
            {pokemons.map((item, index) => {
                if(realCount > index || realCount == -1){
                    if((index + 1) % 3 == 0){
                        return <>
                        <div className="col-12 col-md-6 col-xl-4"><Card json={item}></Card></div>
                        <br className='invis vis-xl'></br>
                        </>
                    }
                    if((index + 1) % 2 == 0){
                        return <>
                        <div className="col-12 col-md-6 col-xl-3"><Card json={item}></Card></div>
                        <br className='invis vis-md invis-xl'></br>
                        </>
                    }
                    return <>
                    <div className="col-12 col-md-6 col-xl-3"><Card json={item}></Card></div>
                        <br className='invis-md'></br>
                    </>
                }
            })}
        </div>
    </>
}
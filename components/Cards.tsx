import Card from '@/components/Card'
import jsonData from '@/public/AndroPokemon.json'

export default function Cards({ name, count, imgType }: { name: string, count: string, imgType: any }) {
    if (!name) {
        return <></>
    }

    let realCount = 5
    if (count.startsWith('-')) {
        realCount = -1
    } else if (isNaN(Number.parseInt(count)) == false) {
        realCount = Number.parseInt(count)
    }

    const pokemons = jsonData.filter(pokemon =>
        pokemon.nameLow.startsWith(name.toLowerCase())
    )

    return (<>
        <div className="row">
            {pokemons.map((item, index) => {
                if (realCount > index || realCount == -1) {
                    if ((index + 1) % 3 == 0) {
                        return <span key={index}>
                            <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                            <br className='invis vis-xl'></br>
                        </span>
                    }
                    if ((index + 1) % 2 == 0) {
                        return <span key={index}>
                            <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                            <br className='invis vis-md invis-xl'></br>
                        </span>
                    }
                    return <span key={index}>
                        <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                        <br className='invis-md'></br>
                    </span>
                }
            })}
        </div>
    </>)
}
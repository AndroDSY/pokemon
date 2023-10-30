// zuständig für das Filtern nach Pokémon
import Card from '@/components/Card'
import jsonData from '@/public/AndroPokemon.json'

export default function Cards({ name, count, imgType }: { name: string, count: string, imgType: any }) {

    // wenn kein Name eingegeben ist, wird auch nicht angezeigt
    if (!name) {
        return <></>
    }

    // Sicherheit, für den Fall eines nicht brauchbaren Inputs für die Anzahl
    let realCount = 5
    // alle negativen Zahlen erkennen
    if (count.startsWith('-')) {
        realCount = -1
    // den Rest darauf überprüfen, ob es sich um ganze Zahl handelt
    } else if (isNaN(Number.parseInt(count)) == false) {
        realCount = Number.parseInt(count)
    }

    // alle Pokémon danach filtern, ob der Name mit dem eingegebenen Text beginnt
    const pokemons = jsonData.filter(pokemon =>
        // .namelow und .toLowerCase um Gross- und Kleinschreibung zu ignorieren
        pokemon.nameLow.startsWith(name.toLowerCase())
    )

    return (<>
        <div className="row">

            {/* Daten aller gültigen Pokemon in eine Card-Komponente verpacken */}
            {pokemons.map((item, index) => {
                {/* Kontrolle, ob bereits die gewünsschte Anzahl geladen ist */}
                if (realCount > index || realCount == -1) {
                    {/* einen Zeilenumbruch einfügen, um einzelne Reihen vertikal zu trennen */}
                    {/* um verschiedene Bildschirmgrössen zu unterstützen, muss Umbruch an verschiedenen Orten geladen sein oder nicht  */}
                    if ((index + 1) % 3 == 0) {
                        return <>
                            <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                            <br className='invis vis-xl'></br>
                        </>
                    }
                    if ((index + 1) % 2 == 0) {
                        return <>
                            <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                            <br className='invis vis-md invis-xl'></br>
                        </>
                    }
                    return <>
                        <div className="col-12 col-md-6 col-xl-4"><Card json={item} imgType={imgType}></Card></div>
                        <br className='invis-md'></br>
                    </>
                }
            })}
        </div>
    </>)
}
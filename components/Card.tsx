// die Tatsächliche Anzeige für einzelne Pokémon
import style from '@/components/css/card.module.css'

export default function Card({ json, imgType }: { json: any, imgType: any }) {

    // einzelne Variabeln aus Daten auslesen, die von der Cards-Komponente übertragen wurden
    const name = json.name
    const typesArray: Array<string> = json.typeNames

    const dmgMultiplicators = json.dmgMultiplicators

    const stats = json.stats

    function filteredImgType(): string[] {
        if (imgType == 'shiny') {
            return ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/' + json.nr + '.png']
        }
        if (imgType == 'both') {
            return ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + json.nr + '.png', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/' + json.nr + '.png']
        }
        if (imgType == 'none') {
            return []
        }
        return ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + json.nr + '.png']
    }

    function imgClass() {
        if (imgType == 'both') {
            return 'col-6'
        }
        return 'col-6 shift-3'
    }

    return (<>
        <h1>{name}</h1>

        <div>
            {
                filteredImgType().map((src, index) => {
                    return <img key={index} src={src} className={imgClass()} />
                })
            }
        </div>


        {/* alle Typen (1 oder 2) anzeigen */}
        <div className="row">
            {
                typesArray.map(
                    (type: string, index: number) => <span key={index} className={`${style[type]} ${style.typeContainer} col-2`}>{type}</span>
                )
            }
        </div>

        {/* Überschriften für Statuswerte */}
        <div className="row">
            <div className="col-2"><h4 className={style.statName}>HP</h4></div>
            <div className="col-2"><h4 className={style.statName}>Att</h4></div>
            <div className="col-2"><h4 className={style.statName}>SpAtt</h4></div>
            <div className="col-2"><h4 className={style.statName}>Def</h4></div>
            <div className="col-2"><h4 className={style.statName}>SpDef</h4></div>
            <div className="col-2"><h4 className={style.statName}>Speed</h4></div>
        </div>
        {/* Statuswerte */}
        <div className="row">
            <div className="col-2">{stats.hp}</div>
            <div className="col-2">{stats.att}</div>
            <div className="col-2">{stats.spAtt}</div>
            <div className="col-2">{stats.def}</div>
            <div className="col-2">{stats.spDef}</div>
            <div className="col-2">{stats.speed}</div>
        </div>

        <h3>Typ-Schwächen</h3>
        <div className="row">
            <div className={`col-2 ${style.dmgMultiplicator}`}>x0</div>
            <div className={`col-2 ${style.dmgMultiplicator}`}>x0.25</div>
            <div className={`col-2 ${style.dmgMultiplicator}`}>x0.5</div>
            <div className={`col-2 ${style.dmgMultiplicator}`}>x1</div>
            <div className={`col-2 ${style.dmgMultiplicator}`}>x2</div>
            <div className={`col-2 ${style.dmgMultiplicator}`}>x4</div>
        </div>
        {/* alle Typen werden in dazugehörige Schadenskategorie geladen */}
        <div className="row">
            <div className="col-2">
                {dmgMultiplicators.null.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
            <div className="col-2">
                {dmgMultiplicators.viertel.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
            <div className="col-2">
                {dmgMultiplicators.halb.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
            <div className="col-2">
                {dmgMultiplicators.normal.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
            <div className="col-2">
                {dmgMultiplicators.doppelt.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
            <div className="col-2">
                {dmgMultiplicators.vierfach.map((type: string, index: number) => <div key={index} className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
            </div>
        </div>
    </>)
}
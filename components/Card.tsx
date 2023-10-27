import style from '@/components/css/card.module.css'

export default function Card({json}:any) {
    const name = json.name
    const typesArray:Array<string> = json.typeNames

    const dmgMultiplicators = json.dmgMultiplicators

    const stats = json.stats

    return <>
    <h1>{name}</h1>
    <div className="row">
        {
            typesArray.map(
                (type:string) => <span className={`${style[type]} ${style.typeContainer} col-2`}>{type}</span>
            )
        }
    </div>

    <div className="row">
        <div className="col-2"><h4 className={style.statName}>HP</h4></div>
        <div className="col-2"><h4 className={style.statName}>Att</h4></div>
        <div className="col-2"><h4 className={style.statName}>SpAtt</h4></div>
        <div className="col-2"><h4 className={style.statName}>Def</h4></div>
        <div className="col-2"><h4 className={style.statName}>SpDef</h4></div>
        <div className="col-2"><h4 className={style.statName}>Speed</h4></div>
    </div>
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
    <div className="row">
        <div className="col-2">
            {dmgMultiplicators.null.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.viertel.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.halb.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.normal.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.doppelt.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.vierfach.map((type:string) => <div className={`${style[type]} ${style.typeContainer}`}>{type}</div>)}
        </div>
    </div>
    </>
}
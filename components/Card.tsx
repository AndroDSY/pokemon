export default function Card({json}:any) {
    const name = json.name
    const typesArray:Array<string> = json.typeNames.de
    let types = ''

    if (typesArray.length == 1){
        types = typesArray[0]
    } else{
        types = typesArray[0] + ' ' + typesArray[1]
    }

    const dmgMultiplicators = json.dmgMultiplicators

    return <>
    <h1>{name}</h1>
    <h4>{types}</h4>
    <h3>Typ-Schwächen</h3>
    <div className="row">
        <div className="col-2">0</div>
        <div className="col-2">0.25</div>
        <div className="col-2">0.5</div>
        <div className="col-2">1</div>
        <div className="col-2">2</div>
        <div className="col-2">4</div>
    </div>
    <div className="row">
        <div className="col-2">
            {dmgMultiplicators.null.map((type:string) => <div>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.viertel.map((type:string) => <div>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.halb.map((type:string) => <div>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.normal.map((type:string) => <div>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.doppelt.map((type:string) => <div>{type}</div>)}
        </div>
        <div className="col-2">
            {dmgMultiplicators.vierfach.map((type:string) => <div>{type}</div>)}
        </div>
    </div>
    </>
}
// zuständig für Verwaltung von Inputs und URL Variabeln
'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/Cards'
import style from '@/components/css/mainPage.module.css'
import TextRecognition from '@/components/TextRecognition'

export default function Page() {

    // wenn in URL die Variabel "Anzahl" gesetzt ist, wird count = diese Variable gesetzt
    const search = useSearchParams()
    let initialCount: any = null
    if (search.get('anzahl')) {
        initialCount = search.get('anzahl')
    } else {
        initialCount = 5
    }

    // useState hooks, um Inhalt von Eingabefeldern bei neuem rendern zu behalten
    const [name, setName]: [name: string, setName: any] = useState('')
    const [count, setCount]: [count: number, setCount: any] = useState(initialCount)

    // Funktion für untergestellte Komponenten, um den Inhalt des Eingabefeldes "Pokémon Name" zu ändern
    const changeName = (name: string) => {
        setName(name)
    }

    // Funktion um auf Knopfdruck  den Namen zu markieren
    const onKeyPress = (event: any) => {
        if (event.key == 'Enter') {
            selectInput()
        }
    }

    // Funktion um Namen effektiv zu markieren
    // damit direkt neuer Name eingegeben werden kann
    const selectInput = () => {
        //@ts-ignore
        document.getElementById('nameInput').select()
    }

    return (<>
        {/* Eingabefelder */}
        <input value={name} placeholder='Pokémon Name' id='nameInput' onInput={e => { setName(e.currentTarget.value) }} onKeyDown={onKeyPress}></input>
        <input type='number' value={count} placeholder='Anzahl Pokémon' onInput={e => { setCount(e.currentTarget.value) }}></input>

        {/* Modul zur Bilderkennung */}
        <TextRecognition setName={changeName} />

        <br />
        <button className={style.inputSelector} onClick={selectInput}>Neue Eingabe</button>
        
        {/* einbetten der Komponente, die die Pokémon filtert */}
        {/* der Name des Pokémons und die Anzahl Pokémon die angezeigt werden, werden weitergegeben, um sie in der Komponente verwenden zu können */}
        <Cards name={name} count={count.toString()}></Cards>

        {/* GitHub Logo mit Link zur Beschreibung einiger Funktionen */}
        <div className={style.gitLogoContainer}><a href='https://github.com/AndroDSY/pokemon#readme' target='_blank'>
            <img src='/GitHubLogo.png' alt='GitHub Logo' className={style.gitLogo} />
        </a></div>
    </>)
}
// zuständig für Verwaltung von Inputs und URL Variabeln
'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/Cards'
import style from '@/components/css/mainPage.module.css'
import TextRecognition from '@/components/TextRecognition'

export default function Page() {

    const search = useSearchParams()

    // wenn in der URL die Variabel "Anzahl" gesetzt ist, wird count = diese Variable gesetzt
    let initialCount: any = 5
    if (search.get('anzahl')) {
        initialCount = search.get('anzahl')
    }

    // wenn in der URL die Variabel "pokemon" gesetzt ist, wird anfangs nach diesem Text gesucht
    let initialName: any = 'Tragosso'
    if (search.get('pokemon')) {
        initialName = search.get('pokemon')
    }

    // wenn in der URL die Variabel "bild" gesetzt ist, werden die dementsprechenden Bilder angezeigt (siehe: components/Card.tsx)
    let imgType: any = 'normal'
    if (search.get('bild')) {
        imgType = search.get('bild')
    }

    // useState hooks, um Inhalt von Eingabefeldern bei neuem rendern zu behalten
    const [name, setName]: [name: string, setName: any] = useState(initialName)
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
        <input value={name} placeholder='Pokémon Name' id='nameInput' onInput={e => { setName(e.currentTarget.value) }} onKeyDown={onKeyPress} className={style.mainInputs}></input>
        <input type='number' value={count} placeholder='Anzahl Pokémon' onInput={e => { setCount(e.currentTarget.value) }} className={style.mainInputs}></input>

        {/* Modul zur Bilderkennung */}
        <TextRecognition setName={changeName} />

        <br />
        
        {/* einbetten der Komponente, die die Pokémon filtert */}
        {/* der Name des Pokémons und die Anzahl Pokémon die angezeigt werden, werden weitergegeben, um sie in der Komponente verwenden zu können */}
        <Cards name={name} count={count.toString()} imgType={imgType}></Cards>

        {/* GitHub Logo mit Link zur Beschreibung einiger Funktionen */}
        <div className={style.gitLogoContainer}><a href='https://github.com/AndroDSY/pokemon#readme' target='_blank'>
            <img src='/GitHubLogo.png' alt='GitHub Logo' className={style.gitLogo} />
        </a></div>
    </>)
}
'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/Cards'
import style from '@/components/css/mainPage.module.css'

export default function Page() {

    const search = useSearchParams()
    let initialCount: any = null
    if (search.get('anzahl')) {
        initialCount = search.get('anzahl')
    } else {
        initialCount = 5
    }

    const [name, setName]: [name: string, setName: any] = useState('')
    const [count, setCount]: [count: number, setCount: any] = useState(initialCount)

    const onKeyPress = (event: any) => {
        if (event.key == 'Enter') {
            selectInput()
        }
    }

    const selectInput = () => {
        //@ts-ignore
        document.getElementById('nameInput').select()
    }

    return (<>
        <input value={name} placeholder='Pokémon Name' id='nameInput' onInput={e => { setName(e.currentTarget.value) }} onKeyDown={onKeyPress} className={style.mainInputs}></input>
        <input type='number' value={count} placeholder='Anzahl Pokémon' onInput={e => { setCount(e.currentTarget.value) }}className={style.mainInputs}></input>
        <br />
        <Cards name={name} count={count.toString()}></Cards>
        <div className={style.gitLogoContainer}><a href='https://github.com/AndroDSY/pokemon#readme' target='_blank'>
            <img src='/GitHubLogo.png' alt='GitHub Logo' className={style.gitLogo} />
        </a></div>
    </>)
}
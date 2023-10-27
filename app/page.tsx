'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/Cards'
import style from '@/components/css/mainPage.module.css'
import TextRecognition from '@/components/TextRecognition'

export default function Page() {
  
  const search = useSearchParams()
  let initialCount:any = null
  if(search.get('anzahl')) {
    initialCount = search.get('anzahl')
  } else {
    initialCount = 5
  }
  
  const [name, setName]:[name:string, setName:any] = useState('')
  const [count, setCount]:[count:number, setCount:any] = useState(initialCount)

  const changeName = (name:string) => {
    setName(name)
  }

  return(
  <>
  <input value={name} placeholder='Pokemon Name' id='nameInput' onInput={e => {setName(e.currentTarget.value)}}></input>
  <input type='number' value={count} placeholder='Anzahl Pokemon' onInput={e => {setCount(e.currentTarget.value)}}></input>
  <TextRecognition setName={changeName}/>
  <br/>
  {/*@ts-ignore*/}
  <button className={style.inputSelector} onClick={() => {document.getElementById('nameInput').select()}}>Neue Eingabe</button>
  <Cards name={name} count={count.toString()}></Cards>
  </>
  )
  }
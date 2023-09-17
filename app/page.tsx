'use client'
import { useState } from 'react'
import Cards from '../components/Cards'

export default function Page() {
  const [name, setName]:[name:string, setName:any] = useState('')
  const [count, setCount]:[count:number, setCount:any] = useState(5)

  return(<>
  <input placeholder='Pokemon Name' onInput={e => {setName(e.currentTarget.value)}}></input>
  <input type='number' value={count} placeholder='Anzahl Pokemon' onInput={e => {setCount(e.currentTarget.value)}}></input>
  <Cards name={name} count={count.toString()}></Cards>
  </>
  )
  }
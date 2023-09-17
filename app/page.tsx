'use client'
import { useState } from 'react'
import Cards from '../components/Cards'

export default function Page() {
  const [name, setName] = useState('')

  return(<>
  <input onInput={e => {setName(e.currentTarget.value)}}></input>
  <Cards name={name}></Cards>
  </>
  )
  }
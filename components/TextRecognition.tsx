import { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import Tesseract from 'tesseract.js'
import style from '@/components/css/textRecognition.module.css'

export default function TextRecognition({setName}:{setName:any}){

    const webcamRef = useRef(null)
    const [imgSrc, setImgSrc] = useState(null)

    const detectName = () => {
        // @ts-ignore
        const imageSrc = webcamRef.current.getScreenshot();
        Tesseract.recognize(
            imageSrc,
            'eng'
        ).then(({ data: { text } }) => {
            let nameArray = text.split('')
            let filteredNameArray = nameArray.filter((character) => 
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').includes(character)
            )
            let name = filteredNameArray.join('')
            setName(name)
        })
    }

    return(
        <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className={style.webcam}
        />

        <button onClick={detectName}>Erkenne Pokémon</button>
        </>
    )
}
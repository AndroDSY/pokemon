// Komponente zur Texterkennung
import { useState, useRef } from 'react'
import Webcam from 'react-webcam'
import Tesseract from 'tesseract.js'
import style from '@/components/css/textRecognition.module.css'

// die setName Funktion muss von der Hauptseite übertragen werden, um den Namen aus dieser Komponente heraus ändern zu können
export default function TextRecognition({ setName }: { setName: any }) {

    // useRef hook wird verwendet um auf Element auf Webseite verweisen zu können
    const webcamRef = useRef(null)

    // Funktion wird auf Knopfdruck audgelöst
    const detectName = () => {
        // @ts-ignore --- ein Screenshot der Kamera wird lokal erstellt
        const imageSrc = webcamRef.current.getScreenshot();
        Tesseract.recognize(
            // setzt den Screenshot als zu verwendendes Bild
            imageSrc,
            // Sprache Englisch, weil das Modul mit dieser Sprache besser trainiert ist
            //und es nur ein einziges Pokémon mit nicht-englischen Zeichen im Namen gibt
            'eng'

        // .then = nachdem die Bilderkennung gelungen ist
        ).then(({ data: { text } }) => {
            // den Text in Liste einzelner Zeichen umwandeln
            let nameArray = text.split('')
            // die Liste filtern, sodass nur noch Buchstaben des Alphabets erhalten bleiben
            let filteredNameArray = nameArray.filter((character) =>
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').includes(character)
            )
            // die Liste wieder zu einem Text zusammenführen
            let name = filteredNameArray.join('')
            // den ermittelten Namen setzen
            setName(name)
        })
    }

    return (<>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className={style.webcam}
        />

        <button onClick={detectName}>Erkenne Pokémon</button>
    </>)
}
import {useState, useEffect} from 'react'

export default function Kanye() {
    const [quote, setQuote] = useState()
    useEffect(() => {
        fetch('https://api.kanye.rest')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setQuote(data)
            })
    }, [])

    return null
}

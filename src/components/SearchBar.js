import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [term, setTerm] = useState("")
    useEffect(() => {
        const searchTerm = async () => {
            await Axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch: term
                }
            })
        }
        searchTerm()
    }, [term])
    return (
        <div>
            <input type="text" onChange={(e) => setTerm(e.target.value)} />
        </div>
    )
}

export default SearchBar

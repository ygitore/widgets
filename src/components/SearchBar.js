import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])
    useEffect(() => {
        const searchTerm = async () => {
           const {data} = await Axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list:'search',
                    format:'json',
                    origin:'*',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }
        const timeoutId = setTimeout(() => {
            if(term){
                searchTerm()
            }
        }, 1000);
        return () => {
            clearTimeout(timeoutId)
        }
    }, [term])
    const renderedResults = () => {
        const wikiResults = results.map(result => {
            return (
                <div key={result.pageid}>
                    <h5>{result.title}</h5>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                </div>
            )
        })
        return wikiResults
    }
    return (
        <div>
            <input type="text" onChange={(e) => setTerm(e.target.value)} />
            {renderedResults()}
        </div>
    )
}

export default SearchBar

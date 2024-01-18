import { useState } from 'react'
import { Input } from '../ui/input'

export default function SearchInput() 
{
    const [term, setTerm] = useState('')

    return (
        <Input value={term} onChange={(e) => setTerm(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && term.length > 2 ? window.location.href = `http://localhost:4321/search/${term}` : () => ({})} />
    )
}

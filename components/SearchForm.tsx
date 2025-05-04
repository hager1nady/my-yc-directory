import React from 'react'
import SearchformReset from './SearchFormReset'
import { Search } from 'lucide-react'

export default function SearchForm({ query }: { query?: string }) {

    return (
        <form action="/" className='search-form'>
            <input name='query' defaultValue={query} className='search-input' placeholder='Search Startups' />
            <div className='flex gap-2'>
                {query && <SearchformReset />}
                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5' />
                </button>
            </div>
        </form>
    )
}

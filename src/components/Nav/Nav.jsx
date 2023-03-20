import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Nav = ({searchCharacter}) => {
  return (
    <div>
        <SearchBar searchCharacter={searchCharacter}/>
    </div>
  )
}

export default Nav
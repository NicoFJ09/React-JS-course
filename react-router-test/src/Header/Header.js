import React from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from 'react-icons/fa'
import {useContext} from 'react'
import DataContext from '../Context/DataContext'


const Header = ({title}) => {
const {width} = useContext(DataContext);
  return (
    <header className= "Header">
        <h1>{title}</h1>
        {width > 768 ? (
            <FaLaptop/>
        ): width > 576 ? (
            <FaTabletAlt/>
        ): (
            <FaMobileAlt/>
        )}
    </header>
  )
}

export default Header
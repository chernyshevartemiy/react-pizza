import React from 'react';
import styles from './search.module.scss'
import searchLogo from '../../assets/img/pizza-search.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {SearchContext} from "../../App";

const Search = () => {
  
  const {searchValue, setSearchValue} = React.useContext(SearchContext);
  return (
    <div className = {styles.root}>
      <img src = {searchLogo} className = {styles.icon}/>
      <input onChange = {(event) => setSearchValue(event.target.value)} value = {searchValue} className = {styles.input} placeholder={'поиск пиццы..'}/>
      {searchValue && <img onClick = {() => setSearchValue("")} src={closeIcon} className = {styles.closeIcon}/>}
    </div>
  );
};

export default Search;
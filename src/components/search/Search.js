import React from 'react';
import styles from './search.module.scss'
import searchLogo from '../../assets/img/pizza-search.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce'


const Search = () => {
  const {setSearchValue} = React.useContext(SearchContext);
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef();
  const onClickClear = () => {
    setValue('');
    setSearchValue('')
    inputRef.current.focus();
  }
  const updateSearchValue = React.useCallback(
    debounce((event) => {
      setSearchValue(event)
    }, 500),
    []
  )
  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }
  return (
    <div className = {styles.root}>
      <img alt={'#'} src = {searchLogo} className = {styles.icon}/>
      <input ref={inputRef} onChange = {(event) => onChangeInput(event)} value = {value} className = {styles.input} placeholder={'поиск пиццы..'}/>
      {value &&
        <img alt={'#'} onClick={() => onClickClear("")} src={closeIcon} className={styles.closeIcon}/>
      }
    </div>
  );
};

export default Search;
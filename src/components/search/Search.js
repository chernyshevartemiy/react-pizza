import React from 'react';
import styles from './search.module.scss'
import searchLogo from '../../assets/img/pizza-search.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {setSearchValue} from "../../redux/slices/filterSlice";
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";


const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef();
  const onClickClear = () => {
    setValue('');
    dispatch(setSearchValue(''))
    inputRef.current.focus();
  }
  const updateSearchValue = React.useCallback(
    debounce((event) => {
      dispatch(setSearchValue(event))
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
import React, { useState, useEffect } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CachedIcon from '@mui/icons-material/Cached';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 } from "uuid";
import './App.css'
function App() {

  const [state, setstate] = useState({
    itmes: [{ count: 0, id: 'u28unsksn', name: 'Orange' }, { count: 0, id: 'knih8iwhkj', name: 'Apple' }, { count: 0, id: 'kjsiosj3', name: 'Banana' }, { count: 0, id: 'lknsis8uh', name: 'Mango' }],
    countItems: 1
  })

  useEffect(() => {

  }, [null])


  const onAdditems = (id) => {
    let findidex = state.itmes.findIndex(i => i.id === id)
    state.itmes[findidex].count ++
    let itmes = state.itmes
    setstate((prevstate) => {
      return ({
        ...prevstate, itmes: itmes
      })
    })
  }
  const onRemoveItems = (id) => {
    let findidex = state.itmes.findIndex(i => i.id === id)
    state.itmes[findidex].count --
    let itmes = state.itmes
    setstate((prevstate) => {
      return ({
        ...prevstate, itmes: itmes
      })
    })
  }

  const onDeleteItems = (id) => {
    let filteritem = state.itmes.filter(i => i.id !== id)
    setstate((prevstate) => {
      return ({
        ...prevstate, itmes: filteritem
      })
    })
  }
  const onRefreshItmes = () => {
    let itmes =[{ count: 0, id: 'u28unsksn', name: 'Orange' }, { count: 0, id: 'knih8iwhkj', name: 'Apple' }, { count: 0, id: 'kjsiosj3', name: 'Banana' }, { count: 0, id: 'lknsis8uh', name: 'Mango' }]
    setstate((prevstate) => {
      return ({
        ...prevstate, itmes: itmes, countItems: 0
      })
    })
  }

  let filterCount = state.itmes.filter(i => i.count > 0)

  let ListOfitmes = state.itmes.map((i, k) => {
    return <>
      <div className="col">
        <p style={{ marginRight: '10px' }} >{i.name}</p>
        <Button variant="contained" style={{ marginRight: '10px' }}>{i.count > 0 ? i.count : 'Zero'}</Button>
        <Button variant="contained" onClick={() => onAdditems(i.id)} style={{ marginRight: '10px' }}><AddIcon /></Button>
        {i.count > 0 ? <>
          <Button variant="contained" onClick={() => onRemoveItems(i.id)} style={{ marginRight: '10px' }} ><RemoveIcon /></Button>
        </> : <>
          <Button variant="contained" style={{ marginRight: '10px' }} disabled><RemoveIcon /></Button>

        </>}
        <Button variant="outlined" onClick={() => onDeleteItems(i.id)} style={{ marginRight: '10px' }} color="error"><DeleteIcon /></Button>
      </div>
    </>
  })

  return (
    <div className='back'>
      <div className="container">
        <div className="col">
          <ShoppingCartIcon />
          <div className="pil">{filterCount.length}</div>
          <p>items</p>
        </div>
        <div className="col">
          <button onClick={onRefreshItmes} style={{ backgroundColor: 'green', border: 'none', outline: 'none' }} > <CachedIcon style={{ color: "#fff" }} /></button>
        </div>
        {ListOfitmes}
      </div>
    </div>
  )
}

export default App
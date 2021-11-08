import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/Board.css'
import TextField from '@mui/material/TextField';
import Side from './Side';
import Content from './Content';
function Board() {
  const [persons, setPersons] = useState([])
  const [isEdit,setIsEdit] = useState("")

  const deletePerson = async (index) => {
    console.log(index);
    let personsTemp = persons
    setIsEdit("")
    await setPersons(personsTemp.filter((o, i) => i !== index))
  }
  const getDetails = async (person) => {
    let personsTemp = persons
    if(isEdit === "")
    setPersons([...persons, person])
    else
    {
      let personsTemp = [...persons]
      personsTemp[isEdit] = person
      setPersons(personsTemp)
      
    }
  setIsEdit("")
  }
  const editPerson = async(index) => {
    console.log(index);
  await  setIsEdit(index)

  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <Box  >
        <AppBar sx={{ backgroundColor: 'rgb(78,113,255)' }} position="static">
          <Toolbar>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img id="delaw_logo" alt="logo" src="/photos/logo.png" />
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

      </Box>

      <div className="content-wrapper">
        <Side editPerson={editPerson} deletePerson={deletePerson} persons={persons} />
        <Content isEdit={isEdit} persons={persons} sendDetails={(e) => {
          getDetails(e)
          
          
        }} />
      </div>

    </div>
  )
}
export default Board
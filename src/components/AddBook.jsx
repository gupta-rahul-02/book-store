import React, { useState } from "react";
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from "@mui/material";
function AddBook() {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    author:'',
    price:'',
    available:false,
    imageUrl:''
  })
  const [checked,setChecked] = useState(false)
  
  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const sendRequest = async() =>{
    await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      imageUrl:String(inputs.imageUrl),
      availale:Boolean(checked)
    }).then(res=>res.data)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    sendRequest().then(()=>history('/books'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={8}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        ></TextField>
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
          value={inputs.author}
          onChange={handleChange}
        ></TextField>
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        ></TextField>
        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          value={inputs.price}
          onChange={handleChange}
        ></TextField>
        <FormLabel>ImageUrl</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          variant="outlined"
          name="imageUrl"
          value={inputs.imageUrl}
          onChange={handleChange}
          
        ></TextField>
        <FormControlLabel control={<Checkbox checked={checked} onChange={() =>setChecked(!checked)}/>} label='Available'/>
        <Button variant="contained" type="submit">Add Book</Button>
      </Box>
    </form>
  );
}

export default AddBook;

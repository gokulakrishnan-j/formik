import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function Dasnboard() {
  const navigate = useNavigate()
    const [values,setvalues]=useState([])
    const getData = () =>{
    fetch('https://632161eafd698dfa29f6a0c4.mockapi.io/library')
    .then((data)=>data.json())
    .then((value)=>setvalues(value))
    }
    useEffect(()=>{
      getData()
},[])

const handleDelete = (id)=>{
fetch(`https://632161eafd698dfa29f6a0c4.mockapi.io/library/${id}`,{
  method:"DELETE"
})
.then(()=>getData())
}
  return (
    <div>
       
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Edition</TableCell>
            <TableCell align="right">Publisher</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        {values.map((n,i)=>( 
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={i} >


              <TableCell ><strong>{n.name}</strong></TableCell>
              <TableCell align="right">{n.author}</TableCell>
              <TableCell align="right">{n.edition}</TableCell>
              <TableCell align="right">{n.publisher}</TableCell>
            
              <Button onClick={()=>navigate(`/edit/${n.id}`)} endIcon={ <EditIcon color='primary' />}/>
      <Button onClick={()=>handleDelete(n.id)} endIcon={ <DeleteIcon color="error" />}/>
      </TableRow>

          
        ))}
        </TableBody>
      </Table>
    </TableContainer>
   
    </div>
  )
}

export default Dasnboard
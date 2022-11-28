import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import {useFormik} from "formik"
import * as yup from "yup"
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';



const yupvalidation = yup.object({
    name:yup
    .string()
    .required("fill the name"),
author:yup
.string()
.required("fill the author"),
edition:yup
.string()
.required("fill the edition"),
publisher:yup
.string()
.required("fill the publisher"),
})

function Edit() {
    const [editValue,seteditValue] = useState(null)
const {id} = useParams()


useEffect(()=>{
    fetch(`https://632161eafd698dfa29f6a0c4.mockapi.io/library/${id}`)
    .then((data)=>data.json())
    .then((particularValue)=>seteditValue(particularValue))
    
},[])


return editValue ? <Editform data={editValue}/> : "loading...." ;

}

 
function Editform({data}){
    const navigate = useNavigate()
    const {id}=useParams()

    const{handleSubmit,values,handleBlur,handleChange,touched,errors}=
        useFormik({
initialValues:{
name:data.name,
author:data.author,
edition:data.edition,
publisher:data.publisher,
},
validationSchema : yupvalidation ,
onSubmit:(values)=>{
add(values)
}
        })
        function add (values){
        fetch(`https://632161eafd698dfa29f6a0c4.mockapi.io/library/${id}`,{
            method:"PUT",
            body:JSON.stringify(
              values

            ),
            headers:{"content-type":"application/json"}
        })
        .then(()=>navigate('/'))
    }

  return (
    <div>
 <form onSubmit={handleSubmit}>
   
   <div className='addInput'>
           <TextField
           error={touched.name && errors.name}
           className="editInput"
           value={values.name}
             label="Name"
             name='name'
             helperText={touched.name && errors.name ? errors.name : null}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           </div>
   
   <div className='addInput'>
   <TextField
   error={touched.author && errors.author}
   className="editInput"
   value={values.author}
             label="Author"
             name='author'
             helperText={touched.author && errors.author ? errors.author : null}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           </div>
   
   <div className='addInput'>
   <TextField
   error={touched.edition && errors.edition}
   className="editInput"
   value={values.edition}
             label="Edition"
             name='edition'
             helperText={touched.edition && errors.edition ? errors.edition : null}
             onChange={handleChange}
             onBlur={handleBlur}
           />
           </div>
   
   <div className='addInput'>
   <TextField
   error={touched.publisher && errors.publisher}
   className="editInput"
   value={values.publisher}
             label="Publisher"
             name='publisher'
             helperText={touched.publisher && errors.publisher ? errors.publisher : null}
             onChange={handleChange}
             onBlur={handleBlur}
           />
         </div>
     
           <button type='submit' className="editButton" >Save</button>
   
       </form>
       <div className='bs_button'>
       <button type="button" class="btn btn-dark" onClick={()=>navigate(-1)}>Back</button>
       </div>
    </div>
  )
}

export default Edit
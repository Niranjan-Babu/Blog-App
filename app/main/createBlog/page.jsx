"use client"
import {React,useState,useRef,useMemo } from 'react'
import { addBlog } from '@/app/lib/action'
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import '@/app/globals.css'
import styles from '@/app/ui/createBlog/createblog.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [category, setCategory] = useState('general');
  const [creatername, setCreatername] = useState('');
  const [createremail, setCreateremail] = useState('');
  const quillRef = useRef(null);
  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

  const handleEditorChange = (value) => {
    setEditorValue(value);
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBlog({
        title,
        content: editorValue,
        category,
        creatername,
        createremail,
      });
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };
  
  return (
    <div className={styles.container}> 
        <form onSubmit={handleSubmit} className={styles.form}>
          
            
              <TextField id="outlined-basic" 
              label="Title" 
              name="title"
              variant="outlined"
              value={title}
                onChange={(e) => setTitle(e.target.value)}
               />
              
              <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Category</option>
                <option value="general">General</option>
                <option value="ittech">IT & Tech</option>
                <option value="others">Others</option>
                </select>
              
              <TextField id="outlined-basic" 
              label="Username" 
              variant="outlined"
              name="creatername"
              value={creatername}
              onChange={(e) => setCreatername(e.target.value)}
                required/>
            
              
              <TextField id="outlined-basic" 
              label="User Email" 
              type='email'
              variant="outlined"
              name="useremail"
              value={createremail}
              onChange={(e) => setCreateremail(e.target.value)}
              required/>
              
        
        <ReactQuill 
        name="content" 
        ref={quillRef}
         value={editorValue}
          onChange={handleEditorChange}
           className={styles.incontent}
           
            />
        
        <button type="submit" className={styles.button}>Save</button>

        </form>
        <div>
        
      
    </div>
    </div>
  )
}

export default CreateBlog
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import styles from '@/app/ui/createBlog/createblog.module.css';
import TextField from '@mui/material/TextField';
import { addBlog } from '@/app/lib/action';

// Dynamic import for ReactQuill to avoid SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState('');
  const [creatername, setCreatername] = useState('');
  const [createremail, setCreateremail] = useState('');

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBlog({
        title,
        content: editorState,
        creatername,
        createremail,
      });
      // Clear form fields after successful submission
      setTitle('');
      setEditorState('');
      setCreatername('');
      setCreateremail('');
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="Title"
          name="title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="creatername"
          value={creatername}
          onChange={(e) => setCreatername(e.target.value)}
          required
        />

        <TextField
          id="outlined-basic"
          label="User Email(must be unique)"
          type="email"
          variant="outlined"
          name="createremail"
          value={createremail}
          onChange={(e) => setCreateremail(e.target.value)}
          required
        />

        {/* Use ReactQuill for the rich text editor */}
        <ReactQuill
          value={editorState}
          onChange={handleEditorStateChange}
          placeholder="Write your content here"
          className={styles.incontent}
        />

        <button type="submit" className={styles.button}>
          Save
        </button>
      </form>
      
    </div>
  );
};

export default CreateBlog;

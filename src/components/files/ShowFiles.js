import React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { AiFillFolder } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../API/context/AuthContext';
import FetchFiles from '../../API/FileAPI/FetchFiles';
import { doc, deleteDoc, collection } from "firebase/firestore";
import { database } from '../../config/firebase';



const ShowFiles = ({parentId}) => {
    const navigate = useNavigate();
    const {user} = UserAuth();
    const {fileList} = FetchFiles(parentId, user.email);
    //  console.log(fileList);

    const files = collection(database, "files");
    

    const openFile = (fileLink) => {
        window.open(fileLink);
      };

      const handleDelete = async (file) =>{
        // console.log(file)
        // const storageRef = ref(storage, `files/${file.imageName}`);
        // await deleteObject(storageRef).then(() => {
        //    alert("File Deteted Successfully")
        //  }).catch((error) => {
        //    alert(error)
        //  });
         await deleteDoc(doc(files, file.id)).catch((error) => {alert(error)});
      }

      return (
        <Grid container spacing={4} >
        {fileList.map((file, index) => (
          <Grid item key={file.id}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<MdDeleteOutline />}
              className="absolute mt-5 ml-4 text-white"
              onClick={() => { handleDelete(file) }}
            >
              Delete
            </Button>
            <Paper elevation={3} className='bg-[#b0cdf5] flex items-center justify-center rounded' style={{ width: '200px', height: '200px', cursor: "pointer", color: "white" }} onClick={() => { file.isFolder ? navigate(`/folder/${file.id}`) : openFile(file.imageLink) }}>
              {file.isFolder ? <AiFillFolder fontSize="large" /> : <img
                src={file.imageLink}
                alt={`Img ${index + 1}`}
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />}
            </Paper>
            <Typography variant="body2" color="textSecondary" align="center">
              {file.isFolder ? file.folderName : file.imageName}
            </Typography>
          </Grid>
        ))}
      </Grid>
  
      )
        }
        export default ShowFiles;

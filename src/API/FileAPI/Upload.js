import React from 'react'
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { storage } from '../../config/firebase';
import { addFiles } from '../FireApi/Firestore';

const FileUpload = (file, setProgress, parentId, userEmail) => {
    const storageRef = ref(storage, `files/${file.name}`);
    // console.log(storageRef);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addFiles(downloadURL, file.name, parentId, userEmail);
        });
      }
    );
}

export default FileUpload
// import React, { useState } from 'react';
// import { Button, LinearProgress } from '@material-ui/core';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { storage } from '../../config/firebase';
// import { addFiles } from '../FireApi/Firestore';

// const FileUpload = ({ file, parentId, userEmail }) => {
//   const [progress, setProgress] = useState(0);

//   const handleUpload = () => {
//     const storageRef = ref(storage, `files/${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const newProgress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(newProgress);
//       },
//       (error) => {
//         alert(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           addFiles(downloadURL, file.name, parentId, userEmail);
//         });
//       }
//     );
//   };

//   return (
//     <div>
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<CloudUploadIcon />}
//         onClick={handleUpload}
//       >
//         Upload File
//       </Button>
//       {progress > 0 && progress < 100 && (
//         <LinearProgress variant="determinate" value={progress} />
//       )}
//     </div>
//   );
// };

// export default FileUpload;

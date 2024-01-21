import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../Navbar';
import UploadFiles from '../files/UpoadFiles';
import ShowFiles from '../files/ShowFiles';

const FolderPage = () => {
  const parentId = useParams().id;
  // console.log(id);
return (
  <>
  <div>
  <NavBar />
  </div>
  <div className='mt-20'>
  <UploadFiles parentId={parentId} />
  </div>
  <div>
      <ShowFiles parentId={parentId} />
  </div>
  </>
)
}

export default FolderPage
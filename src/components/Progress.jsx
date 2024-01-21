import React from 'react'
import { LinearProgress } from '@material-ui/core';

const Progress = ({progress}) => {
  return (
    <>
     <div style={{ padding: '16px' }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: '100%' }}
        />
      </div>

    </>
  )
}

export default Progress
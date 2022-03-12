import { Grid, Box, Stack, Button, Typography } from '@mui/material';
import Nav from '../component/Layout/Nav';
import Planet from '../component/container/Planets';
import People from '../component/container/Peoples';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('planets');

  return (
    <>
      <Typography mt={3} textAlign="center" variant="h4" component="h4">
        STAR WARS
      </Typography>
      <Nav setPage={setPage} />

      <Box mt={3} sx={{ flexGrow: 1 }}>
        <Typography textAlign="left" variant="h5" component="h5">
          {page.toUpperCase()}
        </Typography>
        {page === 'planets' ? <Planet /> : <People />}
      </Box>
    </>
  )
}

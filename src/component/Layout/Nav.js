import { Box, Stack, Button } from '@mui/material';

const Nav = ({ setPage }) => {
    return (
        <nav>
            <Box mt={2}>
                <Stack direction="row" spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button onClick={() => setPage('people')} variant="contained">People</Button>
                    <Button onClick={() => setPage('planets')} variant="contained">Planet</Button>
                </Stack>
            </Box>
        </nav>
    )
}

export default Nav
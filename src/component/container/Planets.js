import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from '../container/Planet';
import { Grid, Box, Stack, Button } from '@mui/material';
// import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
//const queryClient = new QueryClient();

const fetchPlanets = async ({ queryKey }) => {
    const greeting = queryKey[1];
    const page = queryKey[2];

    console.log(greeting[1])
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page
        }`);
    return res.json();
}

const Planets = () => {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery(['planets', 'hello ninjas', page], fetchPlanets);
    // const { data, status } = useQuery('planets', fetchPlanets, {
    //     staleTime: 0,
    //     //cacheTime: 10,
    //     onSuccess: () => console.log('No problem in data fetch.')
    // });
    // const { data, status } = useQuery({
    //     queryKey: ['planets', 'hello ninjas'],
    //     queryFn: fetchPlanets
    // })

    // useState({

    // }, []);

    return (
        <>
            <Box my={2}>
                <Stack direction="row" spacing={2} sx={{
                    display: 'flex',
                    justifyContent: 'start',
                }}>
                    <Button onClick={() => setPage(1)} variant="contained">Next</Button>
                    <h3>{page}</h3>
                    <Button onClick={() => setPage(2)} variant="contained">Previous</Button>
                </Stack>
            </Box>
            <Grid container spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                {status === 'error' && (<div> Error Fetching Data</div>)}
                <div>
                    {status === 'loading' && (<div> Loading...</div>)}
                </div>
                {status === 'success' && (
                    data.results.map(planet => <Planet key={planet.name} planet={planet} />)
                )}
            </Grid>
        </>
    )
}

export default Planets;

// export default function Wraped() {
//     return (<QueryClientProvider client={queryClient}>
//         <Planet />
//     </QueryClientProvider>);
// };

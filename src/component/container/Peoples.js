import React from 'react';
import { useQuery } from 'react-query';
import People from '../container/People';
// import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
//const queryClient = new QueryClient();

const fetchPeople = async () => {
    const res = await fetch(`https://swapi.dev/api/people`);
    return res.json()
}

const Peoples = () => {
    const { data, status } = useQuery('people', fetchPeople);

    return (
        <>
            {status === 'error' && (<div> Error Fetching Data</div>)}

            <div>
                {status === 'loading' && (<div> Loading...</div>)}
            </div>

            {status === 'success' && (
                data.results.map(person => <People key={person.name} person={person} />)
            )}

        </>
    )
}

export default Peoples;

// export default function Wraped() {
//     return (<QueryClientProvider client={queryClient}>
//         <Planet />
//     </QueryClientProvider>);
// };

import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const People = ({ person }) => {
    const { name, gender, birth_year } = person;
    return (
        <Grid item xs={12}>
            <Item>
                <Typography textAlign="left" variant="h6" component="h6">
                    {name || 'asd'}
                </Typography>
                <Typography textAlign="left" variant="p" component="p">
                    Gender - {gender}
                </Typography>
                <Typography textAlign="left" variant="p" component="p">
                    Bithdate - {birth_year}
                </Typography>
            </Item>
        </Grid>
    );
}

export default People;
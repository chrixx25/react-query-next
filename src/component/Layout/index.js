import { Container } from '@mui/material';
import Meta from './Meta'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout;


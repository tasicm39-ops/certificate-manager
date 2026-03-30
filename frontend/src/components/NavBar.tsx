import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'

function NavBar() {
    const { pathname } = useLocation()
    const isUpload = pathname === '/upload' || pathname === '/'
    const isList = pathname === '/list'

    const btnSx = (active: boolean) => ({
        color: 'inherit',
        fontWeight: active ? 700 : 500,
        borderRadius: 0,
        px: 1.5,
        py: 1,
        borderBottom: '3px solid',
        borderColor: active ? 'common.white' : 'transparent',
        '&:hover': {
            borderColor: active ? 'common.white' : 'rgba(255,255,255,0.35)',
            backgroundColor: 'rgba(255,255,255,0.08)',
        },
    })

    return (
        <AppBar position="sticky" color="primary" elevation={2}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 }, gap: 2, py: 0.5 }}>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/upload"
                        sx={{
                            flexGrow: { xs: 1, sm: 0 },
                            mr: { sm: 4 },
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 700,
                            letterSpacing: 0.3,
                        }}
                    >
                        Certificate Manager
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
                        <Button component={RouterLink} to="/upload" sx={btnSx(isUpload)}>
                            Upload
                        </Button>
                        <Button component={RouterLink} to="/list" sx={btnSx(isList)}>
                            Certificate List
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar

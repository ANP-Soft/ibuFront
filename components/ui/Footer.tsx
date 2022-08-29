import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Box, Grid, Link, Container, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {

    const contactANP = () => {
        window.open('mailto:na.huertaf@gmail.com', '_blank');
    }


    return (
        <footer>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Contacto</Box>
                            <Box>
                                <NextLink href={`/`} passHref>
                                    <Link color="inherit">
                                        <Typography variant="body1" color="inherit" sx={{mt: 2}} > Inicio </Typography>
                                    </Link>
                                </NextLink>
                            </Box>
                            <Box>
                                <NextLink href={`https://www.google.com/maps/place/PUEBLITO+PE%C3%91UELAS/@-29.9491864,-71.2919292,15z/data=!4m5!3m4!1s0x0:0xdd932f7677ffd02d!8m2!3d-29.9491864!4d-71.2919292`} passHref>
                                    <Link color="inherit">
                                        <Typography variant="body1" color="inherit" sx={{mt: 1}} > Donde encontrarnos </Typography>
                                    </Link>
                                </NextLink>
                            </Box>
                            <Box>
                                <NextLink href={`/contact`} passHref>
                                    <Link color="inherit">
                                        <Typography variant="body1" color="inherit" sx={{mt: 1}} > Escríbenos </Typography>
                                    </Link>
                                </NextLink>
                            </Box>
                            <Box>
                                <NextLink href={`mailto:tiendaibu@gmail.com`} passHref >
                                    <Link color="inherit">
                                        <Typography variant="body1" color="inherit" sx={{mt: 1}} > Correo electrónico </Typography>
                                    </Link>
                                </NextLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Redes Sociales</Box>
                            <Box>
                                <NextLink href={`https://www.instagram.com/ibu.tienda`} passHref>
                                    <Link color="inherit">
                                        <InstagramIcon sx={{ my: 2 }} />
                                    </Link>
                                </NextLink>
                            </Box>
                        </Grid>
                        {/* <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid> */}
                    </Grid>
                        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }} onClick={ contactANP } sx={{ cursor: 'pointer' }}>
                            <Typography>Pueblito Peñuelas Local 13, La Serena, Chile</Typography>
                            <Typography>Powered By: ANP Software &copy; {new Date().getFullYear()}</Typography>
                            
                        </Box>
                </Container>
            </Box>
        </footer>
    );
}

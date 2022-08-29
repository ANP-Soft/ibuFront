import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { Box, Button, Chip, Grid, Link, TextField, Typography, Divider, CircularProgress } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';


import { FormLayout } from '../../components/layouts';
import { validations } from '../../utils';
import axios from 'axios';

type FormData = {
    
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export const ContactScreen = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>();
    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const resp = await axios.post('/api/email', data);
        // console.log(resp);
        if (resp.status === 200) {
            enqueueSnackbar('Mensaje enviado!', { variant: 'success' });
            reset();
        } 
        else {
            enqueueSnackbar('Error al enviar el mensaje', { variant: 'error' });
        }
        setIsSubmitting(false);
    }
    return (
        <FormLayout title='Contacto'>
            <Image src="https://res.cloudinary.com/nhf/image/upload/v1661804507/ibu/erh0j30n2rkda9k7xilx.jpg" alt="IBU" width={'500%'} height={'500%'} />
            <form onSubmit={ handleSubmit( onSubmit ) } noValidate>
                <Box sx={{ width: 700, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component='h1' sx={{ mb: 2 }}>Queremos saber de ti</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Nombre'
                                {...register('firstName', {
                                    required: 'El nombre es requerido',
                                    minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
                                })}
                                error={ !!errors.firstName }
                                helperText={ errors.firstName?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Apellido'
                                {...register('lastName', {
                                    required: 'El apellido es requerido',
                                    minLength: { value: 3, message: 'El apellido debe tener al menos 3 caracteres' },
                                })}
                                error={ !!errors.lastName }
                                helperText={ errors.lastName?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Email'
                                {... register('email', {
                                    required: 'El email es requerido',
                                    validate: validations.isEmail,

                                })}
                                error={ !!errors.email }
                                helperText={ errors.email?.message }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Mensaje'
                                {...register('message', {
                                    required: 'El mensaje es requerido',
                                    minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres' },
                                })}
                                error={!!errors.message}
                                helperText={errors.message?.message}
                                multiline
                                rows={5}
                            />
                        </Grid>
                    </Grid>
                    <Box display='flex' justifyContent='flex-end' mt={2}>
                        <Button type='submit' variant='contained' color='primary' disabled={isSubmitting}>
                            {isSubmitting ? <CircularProgress /> : 'Enviar'}
                        </Button>
                    </Box>
                </Box>
                
            </form>
        </FormLayout>
    )
}

export default ContactScreen;
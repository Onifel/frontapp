import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo-mndpt.jpeg';
import Leftside from './Leftside';
import { useForm } from "react-hook-form";
import { TextField, Stack, Button, Grid, Box, FormControlLabel, Checkbox } from "@mui/material";

const Form = () => {

    const form = useForm({
        defaultValues: {
            login: "",
            password: "",
        },
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Grid
            className='fond'
            container
            spacing={0}
            direction='row'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh' }}
        >
            <Box
                className="milieu"
                display="flex"
                justifyContent="center"
                alignItems="center"
                maxWidth={710}
                maxHeight={505}
            >
                <Leftside />
                <Box
                    className='connex'
                    width={350}
                    height={500}
                    bgcolor='white'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems="center"
                >
                    <img src={logo} className='logo' alt='logo' />
                    <h4 className="welcome">Bienvenue</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            spacing={3}
                            maxWidth={275}
                        >
                            <TextField
                                autoComplete='none'
                                size='small'
                                label="Login"
                                type="text"
                                id="lgn"
                                variant='standard'
                                {...register("login", { required: "Le login est obligatoire", })}
                                error={!!errors.login}
                                helpText={errors.login?.message}
                            />
                            <TextField
                                autoComplete='none'
                                size='small'
                                label="Mot de passe"
                                type="password"
                                id="pwd"
                                variant='standard'
                                {...register("password", { required: "Le mot de passe est obligatoire", })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                            <Box>
                                <Button
                                    variant='contained'
                                    type='submit'
                                    maxWidth={75}
                                    sx={{
                                        backgroundColor: '#1cb799',
                                        color: 'white',
                                        borderRadius: '20px',
                                        float: 'right',
                                        mt: '15px'
                                    }}
                                >
                                    Se connecter
                                </Button>
                            </Box>
                            <Box
                                display='flex'
                                justifyContent='space-between'
                            >
                                <FormControlLabel
                                    value='end'
                                    control={<Checkbox />}
                                    label='Restez connecter'
                                    labelPlacement='end'
                                    className='chb'
                                />
                                <NavLink to='/change' className='changer'>Mot de passe oublié?</NavLink>
                            </Box>
                        </Stack>
                    </form>
                </Box >
            </Box>
        </Grid >
    );
}

export default Form;
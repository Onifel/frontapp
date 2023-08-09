import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo-mndpt.jpeg';
import Leftside from './Leftside';
import { useForm } from "react-hook-form";
import { TextField, Stack, Button, Grid, Box, InputBase } from "@mui/material";

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
                width={700}
                height={500}
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
                    <h4 className="welcome">Bienvenu</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            spacing={2}
                            width={275}
                        >
                            <Box>
                                <span id="user"><i className="fa fa-user"></i></span>
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
                            </Box>
                            <Box>
                                <span id="lock"><i className="fa fa-lock"></i></span>
                                <TextField
                                    autoComplete='none'
                                    size='small'
                                    label="Password"
                                    type="password"
                                    id="pwd"
                                    variant='standard'
                                    {...register("password", { required: "Le mot de passe est obligatoire", })}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            </Box>

                            <Button
                                variant='contained'
                                type='submit'
                            >
                                Se connecter
                            </Button>

                            <Box>
                                <InputBase
                                    autoComplete='none'
                                    type="checkbox"
                                    {...register("checkbox")} /> {" "}
                                <label className='chb' for='check'>Restez connecter</label>
                                <NavLink to='/change' className='changer'>Mot de passe oublié?</NavLink>
                            </Box>
                        </Stack>
                    </form>
                </Box >
            </Box>
        </Grid>
    );
}

export default Form;
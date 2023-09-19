import React from 'react';
import { TextField, Select, Button, Grid, Box, FormControl, FormControlLabel, InputLabel, MenuItem, Checkbox } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const DemandeAbs = () => {
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

    const [statut, setStatut] = useState('');

    const [state, setState] = useState('')

    const handleChange = (e: SelectChangeEvent) => {
        setStatut(e.target.value);
        setState({ textAreaValue: e.target.value });
    };

    return (
        <Grid
            display='flex'
            justifyContent='center'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    display='flex'
                    sx={{ my: '50px' }}
                >
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Matricule</InputLabel>
                        <TextField
                            autoComplete='none'
                            placeholder='462 158'
                            size='small'
                            type="text"
                            variant="standard"
                            className="textf"
                            {...register("matric", { required: "Le matricule est obligatoire", })}
                            error={!!errors.matric}
                            helpText={errors.matric?.message}
                        />
                    </Box>
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Nom</InputLabel>
                        <TextField
                            autoComplete='none'
                            placeholder='RAHOLIARIFETRA'
                            size='small'
                            type="text"
                            variant="standard"
                            className="textf"
                            {...register("nm", { required: "Le nom est obligatoire", })}
                            error={!!errors.nm}
                            helpText={errors.nm?.message}
                        />
                    </Box>
                    <Box>
                        <InputLabel>Prénom</InputLabel>
                        <TextField
                            autoComplete='none'
                            placeholder='FALIHARISOA'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("pnm", { required: "Le prénom est obligatoire", })}
                            error={!!errors.pnm}
                            helpText={errors.pnm?.message}
                        />
                    </Box>
                </Box>
                <Box
                    display='flex'
                    sx={{ my: '50px' }}
                >
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Grade</InputLabel>
                        <TextField
                            autoComplete='none'
                            placeholder='AGENT'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("grade", { required: "La grade est obligatoire", })}
                            error={!!errors.grade}
                            helpText={errors.grade?.message}
                        />
                    </Box>
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Emploi</InputLabel>
                        <TextField
                            autoComplete='none'
                            placeholder='Femme de menage'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("emploi", { required: "L'emploi est obligatoire", })}
                            error={!!errors.emploi}
                            helpText={errors.emploi?.message}
                        />
                    </Box>
                    <Box>
                        <InputLabel>Indice</InputLabel>
                        <TextField
                            autoComplete='none'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("indice", { required: "L'indice' est obligatoire", })}
                            error={!!errors.indice}
                            helpText={errors.indice?.message}
                        />
                    </Box>
                </Box>
                <Box
                    display='flex'
                    sx={{ my: '50px' }}
                >
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Date de début</InputLabel>
                        <TextField
                            autoComplete='none'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("ddd", { required: "La date de début est obligatoire", })}
                            error={!!errors.ddd}
                            helpText={errors.ddd?.message}
                        />
                    </Box>
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Date de fin</InputLabel>
                        <TextField
                            autoComplete='none'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("ddf", { required: "La date de fin est obligatoire", })}
                            error={!!errors.ddf}
                            helpText={errors.ddf?.message}
                        />
                    </Box>
                    <Box>
                        <FormControlLabel
                            value='end'
                            control={<Checkbox />}
                            label='0,5 jour'
                            labelPlacement='end'
                            className='chb'
                        />
                        <FormControl
                            variant='outlined'
                            sx={{ m: 1, minWidth: 120 }}
                        >
                            <Select
                                className="statut"
                                autoComplete='none'
                                size='small'
                                id="select"
                                variant='standard'
                                value={statut}
                                onChange={handleChange}
                            >
                                <MenuItem value="adminrh">Matin</MenuItem>
                                <MenuItem value="adminsi">Après-midi</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box
                    display='flex'
                    sx={{ my: '50px' }}
                >
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Type d'absence</InputLabel>
                        <TextField
                            autoComplete='none'
                            size='small'
                            type="text"
                            className="textf"
                            variant='standard'
                            {...register("tpabs", { required: "Le type d'absence est obligatoire", })}
                            error={!!errors.tpabs}
                            helpText={errors.tpabs?.message}
                        />
                    </Box>
                    <Box sx={{ marginRight: '150px' }}>
                        <InputLabel>Justification</InputLabel>
                        <textarea
                            autoComplete='none'
                            size='small'
                            type="text"
                            className="textf"
                            value={state}
                            onChange={handleChange}
                            rows={5}
                            cols={35}
                            {...register("jft", { required: "La justification est obligatoire", })}
                            error={!!errors.jft}
                            helpText={errors.jft?.message}
                        />
                    </Box>
                    <Box>
                        <InputLabel>Lieu de jouisssance</InputLabel>
                        <TextField
                            autoComplete='none'
                            size='small'
                            type="text"
                            className='textf'
                            variant='standard'
                            {...register("ldj", { required: "Le lieu de jouisssance est obligatoire", })}
                            error={!!errors.ldj}
                            helpText={errors.ldj?.message}
                        />
                    </Box>
                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    sx={{ my: '50px' }}
                >
                    <Button
                        variant='contained'
                        type='submit'
                        maxWidth={75}
                        sx={{
                            backgroundColor: '#1cb799',
                            color: 'white',
                            borderRadius: '15px',
                            mt: '15px',
                            maxWidth: '275px',
                            maxHeight: '50px'
                        }}
                    >
                        ENVOYER
                    </Button>
                </Box>
            </form>
        </Grid>
    )
}

export default DemandeAbs;
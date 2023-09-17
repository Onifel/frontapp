import React from 'react';
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

const HeaderPage = () => {
    return (
        <Grid className='header'>
            <Card
                className='head'
                maxHeight={150}
            >
                <CardHeader
                    avatar={
                        <Avatar type="file" accept="image/" id="select-image" src="/broken-image.jpg" />
                    }
                    action={
                        <NavLink className='deconnecter'>
                            Se Déconnecter
                        </NavLink>
                    }
                    title="Name"
                    subheader="Firstname"
                />
            </Card>
        </Grid>

    );
}

export default HeaderPage;
import { Box, Button, FormControlLabel, Grid, Slider, Switch, Typography } from "@mui/material";
import cakeLayer from "../../assets/cake_layer.svg";
import { AlignVerticalCenter, VerticalAlignCenter } from "@mui/icons-material";



function CakeConfigurator(){
    return(
        <>
        <Box sx={{flexGrow: 1}}>
            <Grid container rowSpacing={2} style={{marginTop: "50px"}} >
            <Grid item xs={2}>
                <img src={cakeLayer} width="100px" alt=""/>
            </Grid>
            <Grid item xs={10} md={0}>    
                <Typography variant="h3">
                    How many layers tall will your cake be?
                </Typography>
                <Slider
                sx={{marginTop:"2rem", width: "250px"}}
                aria-label="Layers"
                defaultValue={1}
                valueLabelDisplay="auto"
                marks
                step={1}
                min={1}
                max={10}
                />
                <Typography variant="h3" sx={{marginTop:"2rem"}}>
                    Will the layers be different?
                </Typography>
                <FormControlLabel sx={{marginTop:"1rem"}} control={<Switch/>} label="Yes"/>
                <br/>
                <Button sx={{marginTop:"1.5rem"}} variant="contained">Step 2</Button>
            </Grid>
                {/* 
                ->Layer wählen
                ->Same/Different picken
                ->Form wählen
                --> Entweder alle Ebenen gleich machen oder alle Layer konfigurieren
                --> Rezepte für Layer wählen        
                */}
                {/* Cake */}
            
                {/* Buttons */}
            </Grid>
        </Box>
        </>
    );
}

export default CakeConfigurator;
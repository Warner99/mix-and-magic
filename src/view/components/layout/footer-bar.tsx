import { Card} from "@mui/material";

export function FooterBar(){
    return(
        <Card sx={{ position: 'fixed',
            width: '99%',
            bottom: '0px',
            border: '1px'}}>
            <h1> Footer</h1>
        </Card>
    );
}

export default FooterBar;
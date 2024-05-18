import { Button, Card} from "@mui/material";
import { useNavigate } from "react-router-dom";
export function HeaderBar(){
    const navigate= useNavigate();
    return(
        <Card sx={{width: '99%', position: 'fixed', top:'0px', display: 'flex'}}>
             <h1> Header</h1>
             <Button onClick={() => {navigate("/home")}}> ZURÜCK</Button>
        </Card> 
        
    );

}

export default HeaderBar;
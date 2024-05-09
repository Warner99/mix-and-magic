import HeaderBar from "./header-bar";
import FooterBar from "./footer-bar";
import { PropsWithChildren } from "react";
import { Paper } from "@mui/material";
import './layout.css';

export type LayoutProps = PropsWithChildren<{
    
}>;

export function Layout({children}:LayoutProps){
    return(
            <Paper className="frame">
                <HeaderBar/>
                <main className="main">{children}</main>  
                <FooterBar/>
            </Paper>
    );
}

export default Layout;
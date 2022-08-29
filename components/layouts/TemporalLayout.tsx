import { Box } from "@mui/material";
import Head from "next/head"
import { FC, ReactNode } from "react";
import { Footer } from "../ui/Footer";
// import { Navbar, SideMenu } from "../ui";

interface Props {
    children: ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const TemporalLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ pageDescription } />
                <meta name='og:title' content={ title } />
                <meta name='og:description' content={ pageDescription } />
                { imageFullUrl && <meta property="og:image" content={imageFullUrl} /> }
            </Head>
            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px',
            }}>
                <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: "column" }} >
                    { children }
                </Box>
            </main>
            <Footer/>
        </>
    )
}
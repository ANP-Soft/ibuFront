import { FC, ReactNode } from "react"
import Head from "next/head"
import { Box } from "@mui/material";
import { Footer } from "../ui/Footer";

interface Props{
    title: string;
    children: ReactNode;
}

export const FormLayout:FC<Props> = ({ children, title }) => {
    return (
      <>
          <Head>
              <title>{ title }</title>
          </Head>
  
          <main>
              <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' >
                  { children }
              </Box>
          </main>
          <Footer/>
      </>
    )
  }
  
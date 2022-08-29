import type { NextPage } from 'next'
import Image from 'next/image'

import { Typography } from '@mui/material'
import { TemporalLayout } from '../components/layouts'
import { FullScreenLoading } from '../components/ui/FullScreenLoading'

const Home: NextPage = () => {
  return (
    <TemporalLayout title={'Ibu-Shop - Home'} pageDescription={'Encuentra los mejores articulos para tu bebé aqui'} >
        <Image src="https://res.cloudinary.com/nhf/image/upload/v1661804507/ibu/erh0j30n2rkda9k7xilx.jpg" alt="IBU" width={'500%'} height={'500%'} />
        <Typography variant='h1' component='h1' sx={{ mx: 2, fontStyle: 'italic' }}>Pensado por mamás</Typography>
        <FullScreenLoading/>
    </TemporalLayout>
  )
}

export default Home

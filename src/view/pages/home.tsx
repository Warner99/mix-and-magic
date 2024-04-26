import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
    const navigate= useNavigate();
    const {t} = useTranslation()
    
  return (
    <div>
      <h1>Mix and Magic </h1>
        <Button variant='outlined' onClick={() => navigate('/cake-configurator')}>{t('cakeConfigurator')}</Button>
        <Button variant='outlined' onClick={() => navigate('/flavor-finder')}>Flavor Finder</Button>
        <Button variant='outlined' >Personal Projects</Button>
        <Button variant='outlined'>Refined Recipes</Button>
    </div>
  );
}

export default Home;
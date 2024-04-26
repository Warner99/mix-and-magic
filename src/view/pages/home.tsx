import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate= useNavigate();
  return (
    <div>
      <h1>Mix and Magic</h1>
        <Button variant='outlined' onClick={() => navigate('/cake-configurator')}>Cake Configurator</Button>
        <Button variant='outlined' onClick={() => navigate('/flavor-finder')}>Flavor Finder</Button>
        <Button variant='outlined' >Personal Projects</Button>
        <Button variant='outlined'>Refined Recipes</Button>
    </div>
  );
}

export default Home;
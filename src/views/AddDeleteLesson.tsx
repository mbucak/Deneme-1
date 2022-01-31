import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

export default function AddDeleteLesson() {

  const nav = useNavigate();

  return (
    <div>
      <Button onClick={() => { nav('/yenisayfa') }} variant="contained">Contained</Button>
    </div>
  )
}

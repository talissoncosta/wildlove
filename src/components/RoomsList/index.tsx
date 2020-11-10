import React from 'react';
import { Box } from '@material-ui/core';
import RoomCard from '../RoomCard';

const rooms = [
  {
    number: 1,
    type: 'LUXO',
  },
  {
    number: 2,
    type: 'LUXO',
  },  
  {
    number: 3,
    type: 'LUXO',
  },
  {
    number: 4,
    type: 'LUXO',
  },
  {
    number: 5,
    type: 'LUXO',
  },  
  {
    number: 6,
    type: 'LUXO',
  }
]

export default function RoomsList() {
  return (
    <Box display="flex" flexDirection="row" p={1} m={1} flexWrap="wrap" bgcolor="background.paper">
      {rooms.map(room => (<RoomCard number={room.number} type={room.type} />))}
    </Box>
  );
}

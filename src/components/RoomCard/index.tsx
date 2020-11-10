import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import useStyles from './styles';
import { KingBed } from '@material-ui/icons';
import Swal from 'sweetalert2'

interface RoomCardProps {
  number: number,
  type: string,
}
const openRoom = (number: number, type: string) => {
  Swal.fire({
    title: 'Abrir comanda',
    text: `Suíte ${number} - ${type}`,
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar abertura',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("quarto inicializado");
    }
  })
}
export default function RoomCard({ number, type }: RoomCardProps) {
  const classes = useStyles();
  return (
    <Box p={1} width={1/4}>
      <Card onClick={() => openRoom(number, type)} >
        <CardHeader
          title={number}
          subheader={<KingBed fontSize={'large'} />}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Typography component="h2" variant="subtitle1" align="center" >
              {type}
            </Typography>
          </CardContent>
      </Card>
    </Box>
  );
}

import Image from "next/image";
import { Orbitron } from 'next/font/google';
import { Box, TextField, Button, CircularProgress, Typography, Card, CardContent, CardMedia } from '@mui/material';

// Load the Handjet font
const handjet = Orbitron({ subsets: ['latin'] });

export const Navigation = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center items-stretch justify-between">
            <div className="flex flex-shrink-0 items-center">
            <Typography
                variant="h2"
                className={handjet.className}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  color: 'white',
                  transition: 'all 0.5s ease',
                  mb: 2,
                }}
              >
                GRID
              </Typography>
              <Typography
                variant="h2"
                className={handjet.className}
                sx={{
                  position: 'absolute',
                  top: 38,
                  left: 180,
                  color: 'white',
                  transition: 'all 0.5s ease',
                  mb: 2,
                  fontSize: 20,
                }}
              >
                AI Rating Tool
              </Typography>
              
            </div>
            <div className="flex ">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Image from "next/image";
import { Orbitron } from 'next/font/google';
import { Box, Typography } from '@mui/material';

// Load the Orbitron font
const orbitron = Orbitron({ subsets: ['latin'] });

export const Navigation = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'gray.800',
        paddingX: { xs: 2, sm: 6, lg: 8 },
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
        mx: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="h2"
          className={orbitron.className}
          sx={{
            color: 'white',
            transition: 'all 0.5s ease',
            mb: 2,
            fontSize: '1.8rem',
          }}
        >
          GRID
        </Typography>

        <Typography
          variant="h2"
          className={orbitron.className}
          sx={{
            color: 'white',
            transition: 'all 0.5s ease',
            mb: 2,
            fontSize: '1.2rem',
            marginLeft: '20px', // Adjust this value to control spacing between titles
          }}
        >
          AI Rating Tool
        </Typography>
      </Box>

      {/* Add any additional elements or buttons here if needed */}
      <Box sx={{ display: 'flex' }}>
        {/* Future navigation buttons or links can be added here */}
      </Box>
    </Box>
  );
};

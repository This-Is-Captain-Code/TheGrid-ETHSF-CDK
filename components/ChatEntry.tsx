import React from 'react';
import { Box, Typography, Avatar, useTheme } from '@mui/material';

type ChatEntryProps = {
  message?: string;
  children?: React.ReactNode;
};

export const ChatEntry = ({ message = "", children }: ChatEntryProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        mb: 4,
        gap: '10px',
        // '&:hover': {
        //   boxShadow: `0px 0px 20px ${theme.palette.primary.main}`, // Glowing hover effect
        // },
      }}
    >
      <img
          src="https://noun-api.com/beta/pfp"
          alt="Profile"
          style={{
            width: '50px',
            height: '50px',
          }}
        />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          padding: '16px',
          backgroundColor: 'black',
          color: 'white',
          boxShadow: '0 0 15px rgba(0, 255, 0, 0.7)', // Green neon glow for the chat box
        }}
      >
        <Typography
          variant="body2"
          sx={{
            wordBreak: 'break-word',
            color: 'white',
            textShadow: '0 0 8px rgba(0, 255, 0, 0.7)', // Glowing text effect
          }}
        >
          {message}
        </Typography>

        <Box>{children || ""}</Box>
      </Box>
    </Box>
  );
};

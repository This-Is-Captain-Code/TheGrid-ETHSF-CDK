"use client";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { Navigation } from "@/components/Navigation";

// Dynamic imports for components that don't require SSR
const ChatScreen = dynamic(() => import("@/components/ChatScreen"), { ssr: false });
const WalletProviders = dynamic(() => import("@/components/WalletProviders"), { ssr: false });

export default function Home() {
  const random = Math.random();
  const isImageRanking = random > 0.5;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minHeight: '100vh',
        background: 'radial-gradient(circle at center, #000000, #0a0a0a 70%)',
        color: '#fff',
        padding: '16px',
        boxShadow: 'inset 0px 0px 100px rgba(0, 255, 0, 0.2)',
      }}
    >
      <Navigation />

      <WalletProviders>
        <ChatScreen showImageRanking={isImageRanking} />
      </WalletProviders>
    </Box>
  );
}

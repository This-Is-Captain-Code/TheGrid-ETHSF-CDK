import Image from "next/image";
import { useState } from "react";
import { Box, Card, CardMedia } from "@mui/material";

type ImageListProps = {
  onClick: () => void;
};

const images = [
  "https://media.sketchfab.com/models/2579674bf17a42278a166fe33b90c0d7/thumbnails/c4cd223f7adf45fdaedcd66d98a25e3f/4952ea45514f414abfab23f2ad134d78.jpeg",
  "https://media.sketchfab.com/models/5a99c05a56ff4bb9b045581444590d34/thumbnails/66336900ad9b4f9ba3f2dd34850a3396/9c75d1fcdf0243a6b214f0f7a4635ea8.jpeg",
  "https://media.sketchfab.com/models/b11221e0e12244cf85f540e6a2a74b7b/thumbnails/8703717c11c6412fab07fee8c6a2195b/8907a20bb6ec4a8899fc2d693570b70c.jpeg",
  "https://media.sketchfab.com/models/12342a06fcf6484b895f2f4e9f8c8cf2/thumbnails/de0a8f698eff4a2e8e6806e32a9ecec0/031c85a0957746c695856a9f0e9421fb.jpeg",
  "https://media.sketchfab.com/models/723672754ba1445fad2854e8c5755f57/thumbnails/e811e6c81c1949a99e186d9ed0a2264a/459988579cc147e488ece33fd1fd67a0.jpeg",
];

export const ImageList = ({ onClick }: ImageListProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSelect = (image: string) => {
    if (selectedImage) return;
    setSelectedImage(image);
    onClick();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: { sm: 1 },
        marginTop: 2,
        overflow: 'auto',
      }}
    >
      {images.map((image, idx) => (
        <Card
          key={`image-${idx}`}
          sx={{
            width: 200,
            height: 200,
            marginBottom: { xs: 1, sm: 0 },
            marginTop: 4,
            border: selectedImage === image ? '2px solid blue' : '2px solid transparent',
            borderRadius: '8px',
            cursor: 'pointer',
            '&:hover': {
              borderColor: 'blue',
            },
          }}
          onClick={() => handleSelect(image)}
        >
          <CardMedia
            component="img"
            src={image}
            alt="Building"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            loading="eager" // Ensures images are loaded with high priority
          />
        </Card>
      ))}
    </Box>
  );
};

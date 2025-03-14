import { useState } from 'react';
import { skillList } from './data.tsx';
import { Box, Container, Stack, Button, Typography } from '@mui/material';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < skillList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(hasPrevious ? index - 1 : skillList.length - 1);
  }

  const skill = skillList[index];

  return (
    <Container maxWidth="md" sx={{ textAlign: 'left', p: 2 }}>
      <Box sx={{ p: 2, border: '1px solid grey', borderRadius: '8px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          10 Things that Require Zero Talent
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 3 }}>
          by Rency Dayne M Duque
        </Typography>

        <img
          src={skill.url}
          alt={skill.alt}
          style={{
            width: '100%',
            maxWidth: '700px',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginTop: '10px',
          }}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>{skill.thing}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{skill.detail}</Typography>

        <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleBackClick}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

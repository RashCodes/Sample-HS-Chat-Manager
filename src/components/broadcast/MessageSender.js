import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


function MessageSender() {
  return (
   <>
    <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
    </Stack>
   </>
  )
}

export default MessageSender
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function AddCard() {
  return (
    <Stack direction="row" spacing={2} sx={{ position: 'absolute', bottom:35, left: 820 }}>
      <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
        Add to Card
      </Button>
    </Stack>
  );
}
    
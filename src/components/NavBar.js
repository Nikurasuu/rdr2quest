import Button from '@mui/material/Button';
import { Card } from '@mui/material';

function App() {
  return (
    <Card className='NavBar'>
      <p className='title'>Red Dead Redemption 2 Quest Tool</p>
      <Button variant="text">Home</Button>
      <Button variant="text">Edit</Button>
      <Button variant="text">About</Button>
    </Card>
  );
}

export default App;
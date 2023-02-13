import Button from '@mui/material/Button';

function NavBar() {
  return (
    <div className="NavBar">
      <p className='title'>Red Dead Redemption 2 Quest Tool</p>
      <Button variant="text">Home</Button>
      <Button variant="text">Edit</Button>
      <Button variant="text">About</Button>
    </div>
  );
}

export default NavBar;
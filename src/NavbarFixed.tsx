import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled, alpha} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Categories', 'Deals', `What's New`, 'Pickup & Delivery'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavbarFixed() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search: any = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgb(247, 247, 247)',
    '&:hover': {
      backgroundColor: 'rgb(247,247,247)',
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '35%'
  }));
  
  const SearchIconWrapper: any = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    position: 'relative',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em)`,
      transition: theme.transitions.create('width'),
      width: '-webkit-fill-available'
    },
    width:"-webkit-fill-available"
  }));

  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white'}} >
        <div className='backgroundRed'>
        <div className='nav-bar d-flex justify-content-between align-items-center'>
            <div className='left-nav-block'>
                <div className='aligncenter d-flex'>
                    <span className='locationIcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" focusable="false" role="presentation"><path fillRule="evenodd" d="M16 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM12 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" clipRule="evenodd"></path><path fillRule="evenodd" d="m17.461 16.975.455-.593c1.162-1.547 1.903-2.832 2.224-3.856.234-.747.36-1.54.36-2.36C20.5 5.657 16.694 2 12.002 2 7.307 2 3.5 5.656 3.5 10.167c0 .825.127 1.622.364 2.373.242.766.72 1.68 1.434 2.74l.376.543c.265.37.555.756.871 1.158l.495.616c.171.21.35.423.534.641l.573.665.612.69.652.714.691.739.73.763.118.121.263.27.789.8.4-.404.77-.788.73-.764.692-.74c.112-.12.223-.241.331-.36l.633-.703c.204-.23.402-.456.593-.678l.553-.654c.09-.107.177-.213.262-.317l.495-.617ZM12.001 3.5C15.923 3.5 19 6.541 19 10.167c0 .665-.102 1.306-.291 1.91-.245.778-.863 1.9-1.987 3.398l-.44.573-.481.6-.245.297-.546.644c-.184.213-.374.43-.57.653l-.626.695c-.105.114-.21.23-.318.346l-.003.004-.68.726-.72.752-.092.095-.09-.094-.72-.751-.678-.726-.639-.7-.598-.673-.562-.652a45.794 45.794 0 0 1-.509-.61l-.485-.606c-.3-.381-.573-.744-.819-1.089l-.364-.525c-.672-.999-1.062-1.774-1.242-2.346A6.368 6.368 0 0 1 5 10.167C5 6.54 8.078 3.5 12.002 3.5Z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className='pincode'>48201</span>
                </div>
                <div className='aligncenter d-flex'>
                    <span className='locationIcon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" focusable="false" role="presentation"><path fillRule="evenodd" d="M12.818 11.182H21V21h-3.091v-5.364h-7.273V21h-3.09v-9.818h5.272ZM11.636 21h5.273v-4.364h-5.273V21Zm6.273 1h4.09V10.182h-8.18V2H2v20h15.909ZM6.545 10.182V21H3V3h9.818v7.182H6.545Z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className='pincode'>Select your store</span>
                </div>
            </div>
            <div className='right-nav-block d-flex'>
            <span className='px-3'>Register</span>
            <span className='px-3'>Weekly Ad</span>
            <span className='px-3'>RedCard</span>
            <span className='px-3'>Target Circle</span>
            <span className='px-3'>Find Stores</span>
            </div>
        </div>
    </div>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1Zm0 18.173a7.174 7.174 0 1 0-.001-14.347 7.174 7.174 0 0 0 0 14.347Zm0-3.653a3.52 3.52 0 1 1 0-7.04 3.52 3.52 0 0 1 0 7.04Z"></path></svg>
        </div>
          <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, fontSize:'16px'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className='navbarFont'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>    
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: 'rgb(51,51,51)', fontWeight:'bolder' , display: 'block' }}
              >
                {page}  
              </Button>
            ))}
          </Box>
          <Search sx={{ flexGrow:1, display: { xs: 'flex', md: 'flex' }, color: 'rgb(51, 51, 51)' }}>
            <StyledInputBase
              placeholder="What can we help you find?"
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img alt="Account" id="profilePicture" src="https://target.scene7.com/is/content/Target/GUEST_459579d1-8996-4e3c-889a-a975f12c0fd4" />
                <Typography
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'none', md:'inline', lg:'inline' }, fontSize: '14px', color: 'rgb(51,51,51)', padding: '7px' }}
                    >
                    Sign In
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className='cart' sx={{  display: { xs: 'flex', md: 'flex' } }}>
            <svg className='cartlogo' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375Zm13 0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375ZM1.135 2.212l2.962.543 18.762 2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 0 1-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476Zm3.798 2.175 1.503 7.844 12.996-.462 1.5-5.147-16-2.235Z"></path></svg>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarFixed;

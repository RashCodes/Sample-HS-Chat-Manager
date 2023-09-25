import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';


const settings = ['Profile', 'Account' , 'Logout'];

function Whatsnavbar() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
      <div className='navbar navbar bg-white row col'style={{borderRadius: '10px'}}>
        <div className='container-fluid'>
          <h4 className='navbar-brand' style={{color: '#2F80ED', fontSize: '30px', fontFamily: 'Montserrat'}}> Chat <span className='' style={{color: 'black', fontSize: '20px'}}>Manager</span></h4>
          <div className="chatList__search  mt-0 w-45 px-3">
              <div className="search_wrap search2 ">
                  <input type="text" placeholder="Search..." required />
                    <button className="search-btn">
                      <i className="fa fa-search"></i>
                    </button>
              </div>
          </div>
            <div className="px-2 pb-0 text-bold" style={{borderRadius: '5px',color: '#2F80ED'}}>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open Settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ borderRadius: '10px' }}>
                        <Avatar alt="C" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNPJ7hy707-QySK5704F8MdG7l-L1HiynA_eVg6QDKNqsEf7oHcKcXwNN6KXv_TqsFso&usqp=CAU" />
                        <span className='text-bolder' 
                        style={{ marginLeft: '5px', marginTop: '0px', color: '#2F80ED', fontSize: '20px', fontFamily: 'Montserrat'}}
                        >Collector <KeyboardDoubleArrowDownIcon type='button'
                        style={{marginBottom: '3px',marginRight: '0px' , fontSize: '20px'}}/>
                        </span>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{vertical: 'top',horizontal: 'right',}}
                      keepMounted transformOrigin={{vertical: 'top',horizontal: 'right',}}
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
            </div>
        </div>
      </div>
    
  )
}

export default Whatsnavbar







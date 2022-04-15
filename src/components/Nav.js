import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Nav.css';

const styles = {
  nav: {
    width: '100%',
    height: '6%',
    minHeight: '40px',
    justifyContent: 'center',
    backgroundColor: 'rgba(70, 70, 70, 0.0)',
    backdropFilter: 'blur(10px)',
    fontFamily: '\'Cormorant Garamond\', serif',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: '100',
    marginLeft: '1%',
    fontFamily: 'inherit',
    minWidth: '200px',
  },
  tb: {
    height: '100%',
    minHeight: '5%',
  },
  sections: {
    fontFamily: 'inherit',
    fontSize: '1.3rem',
  },
  spacer: {
    marginRight: '1%',
    marginLeft: 'auto',
  },
  links: {
    textDecoration: 'none',
  },
};

const Nav = () => {
  return (
    <div style={styles.root}>
      <AppBar minheight='0px' style={styles.nav}>
        <Toolbar >
          <Link to="/" style={styles.links} className="link">
            <Typography style={styles.logo} >ANDI MACKAY</Typography>
          </Link>
          <Typography style={styles.spacer}></Typography>
          <Link to="/portfolio" style={styles.links} className="link">
            <Typography style={styles.sections}>Portfolio</Typography>
          </Link>
          <Link to="/about" style={styles.links} className="link">
            <Typography style={styles.sections}>About Me</Typography>
          </Link>
          <Link to="/contact" style={styles.links} className="link">
            <Typography style={styles.sections}>Contact</Typography>
          </Link>
        </Toolbar>   
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Nav;

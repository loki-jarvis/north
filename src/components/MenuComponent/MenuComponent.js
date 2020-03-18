import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import * as PropTypes from 'prop-types';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const MenuComponent = ({
  options,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options ?
          options.map(option => (
            <MenuItem onClick={handleClose}>{option.label}</MenuItem>
          )) :
          null
        }
      </Menu>
    </div>
  )
};

MenuComponent.propTypes = {
  options: PropTypes.array,
};

MenuComponent.defaultProps = {
  options: [
    {
      label: 'Profile'
    },
    {
      label: 'DashBoard'
    },
    {
      label: 'Logout'
    }
  ]
};

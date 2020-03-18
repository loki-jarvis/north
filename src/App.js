import React from 'react';
import './App.css';
import { MenuComponent } from './components/MenuComponent';
import { SECOND_MENU_OPTIONS } from './constants/SECOND_MENU_OPTIONS';
import { THIRD_MENU_OPTIONS } from './constants/THIRD_MENU_OPTIONS';
import Grid from '@material-ui/core/Grid';

export const App = () => {
  return (
  <React.Fragment>
    <Grid item xs={12}>
      <MenuComponent />
    </Grid>
<Grid item xs={12}>
    <MenuComponent
    options={SECOND_MENU_OPTIONS} />
</Grid>
    <Grid item xs={12}>
    <MenuComponent options={THIRD_MENU_OPTIONS} />
    </Grid>
  </React.Fragment>
  );
}

export default App;

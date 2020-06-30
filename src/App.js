import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
//import CssBaseLine from '@material-ui/core';

//import { store } from './redux/store';

import PostEdit from './components/views/PostEdit/PostEdit';
import PostAdd from './components/views/PostAdd/PostAdd';
import ShowPost from './components/views/ShowPost/ShowPost';
import NotFound from './components/views/NotFound/NotFound';
import Homepage from './components/views/Homepage/Homepage';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
  },
});

const App = () => (
  // <Provider store={store}>
  <BrowserRouter>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* <CssBaseLine /> */}
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/homepage' component={Homepage} />
            <Route exact path='/post/add' component={PostAdd} />
            <Route exact path='/homepage/post/:id' component={ShowPost} />
            <Route exact path='/post/:id/edit' component={PostEdit} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
  // </Provider>
);

export default App;

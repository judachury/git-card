import React from 'react';

//import GitCards from './components/git-cards';
import GitCards from './components/git-cards-func';

class App extends React.Component {
  render () {
    return <GitCards 
      title="GitHub cards App" 
      emptyMessage="There are not cards at the moment. Search for one to get started" />;
  }
}

export default App;
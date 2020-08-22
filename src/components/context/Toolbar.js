import React, {useContext} from 'react'
import ThemeContext from './ThemeContext';
//const { useContext } = require("react");

function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  /*class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    
    render() {
      console.log("contextType ",this.context)
      return <button theme={this.context}>{this.context}</button>;
    }
  }*/
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    console.log("ThemedButton ",theme)
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
  
  export default Toolbar;
  
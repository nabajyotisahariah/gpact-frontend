import React from 'react'

const { default: themes } = require("./theme");

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box, ResponsiveContext } from "grommet"
import "typeface-indie-flower"
import "typeface-lato"
import { createGlobalStyle } from "styled-components"

import { customTheme } from "../theme"
import Instafeed from "./instafeed"
import Header from "./header"
import Footer from "./footer"

const FullGlobalStyle = createGlobalStyle`
  body { margin: 0; }
`

const App = ({ title, children }) => {
  return (
    <Grommet theme={customTheme}>
      <FullGlobalStyle />
      <Box full>
        <Header
        title = {title}
        />
        {children}
        <ResponsiveContext.Consumer>
          {size => size !== `small` && <Instafeed />}
        </ResponsiveContext.Consumer>
        <Footer />
      </Box>
    </Grommet>
  )
}

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

App.defaultProps = {
  children: null,
  title: `ResonsToSmile blog`,
}

export default App

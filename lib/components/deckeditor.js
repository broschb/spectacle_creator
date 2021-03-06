'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


class DeckEditor extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
        };
  }

  render() {

        return(
               <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
                 <Slide transition={["zoom"]} bgColor="primary">
                   <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                     Spectacle Boilerplate
                   </Heading>
                   <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                     open the presentation/index.js file to get started
                   </Text>
                 </Slide>
               </Deck>
        )
    }

}

export default DeckEditor;

import { createContext, useState } from "react";

export const themes ={
    light:{
       color:'#000000',
       background:'#e0f4ea',
       
    },
    dark:{
        color:'#fff',
        background: '#12211a'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
   const [ theme, setThemes ] = useState(themes.light)

   return(
      <ThemeContext.Provider value={{theme, setThemes}}>
        {props.children}
      </ThemeContext.Provider>
   )
}
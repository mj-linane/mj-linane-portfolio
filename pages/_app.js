import '../styles/globals.css'
import {ThemeProvider} from "next-themes"

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component{...pageProps} />
        </ThemeProvider>
    )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp

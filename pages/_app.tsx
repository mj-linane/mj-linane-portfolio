import '../styles/globals.css'
import { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component{...pageProps} />
        </ThemeProvider>
    )
}

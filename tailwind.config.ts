import { type Config } from "tailwindcss";
import  fontFamily   from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {

            },
            fontFamily: {
                "the_chatalestick": "'The Chatalestick', sans-serif",
                sans: ["var(--font-geist-sans)", ...fontFamily.sans],
            }
        }
    },
    plugins: [],
} satisfies Config;
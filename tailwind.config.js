/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,html}"],
    theme: {
        extend: {
            colors: {
                slate: {
                    925: "#10181c"
                },
                brand: {
                    ink: "#18365f",
                    gold: "#f4a93d",
                    steel: "#4e6473",
                    mist: "#edf2f5"
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"]
            },
            boxShadow: {
                panel: "0 16px 40px rgba(16, 24, 28, 0.08)"
            },
            letterSpacing: {
                "label": "0.18em"
            },
            maxWidth: {
                "8xl": "90rem"
            }
        }
    },
    plugins: []
};

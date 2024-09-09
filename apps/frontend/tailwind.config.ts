import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		opacity: {
  			min: '0.005'
  		},
  		keyframes: {
  			fadeIn: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			slideDownAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideLeftAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideUpAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideRightAndFade: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(20px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideDown: {
  				from: {
  					transform: 'translateY(-20px)'
  				},
  				to: {
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				from: {
  					transform: 'translateY(20px)'
  				},
  				to: {
  					transform: 'translateY(0)'
  				}
  			},
  			slideLeft: {
  				from: {
  					transform: 'translateX(-20px)'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			},
  			slideRight: {
  				from: {
  					transform: 'translateX(10px)'
  				},
  				to: {
  					transform: 'translateX(0)'
  				}
  			},
  			swing: {
  				from: {
  					transform: 'rotate(3deg)'
  				},
  				to: {
  					transform: 'rotate(-3deg)'
  				}
  			},
  			scale: {
  				from: {
  					opacity: '0',
  					transform: 'scale(0)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			rise: {
  				from: {
  					transform: 'translate(0, 20%) scale(0.8)'
  				},
  				to: {
  					transform: 'translate(0, 0) scale(1)'
  				}
  			},
  			shake: {
  				'0%': {
  					transform: 'translate(1px, 1px) rotate(0deg)'
  				},
  				'10%': {
  					transform: 'translate(-1px, -2px) rotate(-1deg)'
  				},
  				'20%': {
  					transform: 'translate(-3px, 0px) rotate(1deg)'
  				},
  				'30%': {
  					transform: 'translate(3px, 2px) rotate(0deg)'
  				},
  				'40%': {
  					transform: 'translate(1px, -1px) rotate(1deg)'
  				},
  				'50%': {
  					transform: 'translate(-1px, 2px) rotate(-1deg)'
  				},
  				'60%': {
  					transform: 'translate(-3px, 1px) rotate(0deg)'
  				},
  				'70%': {
  					transform: 'translate(3px, 1px) rotate(-1deg)'
  				},
  				'80%': {
  					transform: 'translate(-1px, -1px) rotate(1deg)'
  				},
  				'90%': {
  					transform: 'translate(1px, 2px) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'translate(1px, -2px) rotate(-1deg)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideDown: 'slideDown 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideUp: 'slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideLeft: 'slideLeft 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			slideRight: 'slideRight 400ms cubic-bezier(0.16, 1, 0.3, 1)',
  			swing: 'swing 1s infinite ease-in-out alternate',
  			scale: 'scale 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  			rise: 'rise 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  			shake: 'shake 150ms cubic-bezier(0.4, 0, 0.2, 1)'
  		},
  		colors: {
  			'gray-color': '#676767',
  			'button-stroke': '#D0D0D0',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		sans: ["var(--sans-font)"],
  		serif: ["var(--serif-font)"],
  		mono: ["var(--mono-font)"]
  	}
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

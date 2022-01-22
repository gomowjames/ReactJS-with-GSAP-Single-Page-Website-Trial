const desktop = 1440;
const tablet = 1024;
const mobile = 428;

const css = {
  primary: '#FBC843',
  paddingSmall: '1rem',
  paddingLarge: '6.25rem',
  
  fullWidth: `@media screen and (min-width: ${desktop + 1}px)`,
  desktop: `@media screen and (min-width: ${tablet + 1}px) and (max-width: ${desktop}px)`,
  tablet: `@media screen and (min-width: ${mobile + 1}px) and (max-width: ${tablet}px)`,
  mobile: `@media screen and (max-width: ${mobile}px)`
}

export default css;
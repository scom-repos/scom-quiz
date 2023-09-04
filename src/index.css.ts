import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const containerStyle = Styles.style({
  overflow: 'hidden',
  margin: '0 auto',
  padding: '1rem 0.5rem',
  border: '1px solid var(--divider)',
  background: "var(--background-main)",
  $nest: {
    '&.answer': {
      transition: 'filter 0.3s',
      cursor: 'pointer',
      $nest: {
        '&:hover': {
          filter: 'brightness(0.95)'
        }
      }
    }
  }
})

export const buttonStyle = Styles.style({
  background: "var(--background-main)",
  padding: '1rem 0.5rem',
  border: '1px solid var(--divider)',
  $nest: {
    '&:hover': {
      filter: 'brightness(0.85)'
    },
    '> i-icon:hover': {
      fill: `${Theme.colors.primary.contrastText} !important`
    },
    '&:.disabled': {
      background: "var(--background-main)",
      $nest: {
        '&:hover': {
          filter: 'brightness(0.1)',
          cursor: 'not-allowed !important'
        },
        '> i-icon:hover': {
          fill: `${Theme.colors.primary.contrastText} !important`,
          cursor: 'not-allowed !important'
        }
      }
    }
  }
})

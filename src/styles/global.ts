'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  /*SCROLLBAR */
  --scrollbar-size: 10px;

  /*========== Colors ==========*/

  //Color-Primary
  --primary: #0046B5;
  --primary-50: #E2F2FF;
  --primary-100: #BADFFF;
  --primary-700: #0077E6;
  --primary-dark: #101E36;
  --primary-light: #3A6EC1;

  //Color-Secundary

  //Status-Color
  --success: #12B76A;
  --Danger: #F04438;
  --Warning: #F79009;
  --Info: #0098FF;

  //Gray-Color
  --gray-25: #FCFCFD;
  --gray-50: #F9FAFB;
  --gray-100: #F2F4F7;
  --gray-200: #EAECF0;
  --gray-300: #D0D5DD;
  --gray-400: #98A2B3;
  --gray-500: #667085;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-800: #1D2939;
  --gray-900: #101828;

  //Shadow
  --shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  /*========== Fonts ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: 'Inter', sans-serif;

  --text-small-xs: 0.75rem; // 12px
  --text-small-sm: 0.875rem; // 14px
  --text-small-md: 1rem; // 16px
  --text-small-lg: 1.125rem; // 18px
  --text-small-xl: 1.25rem; // 20px
  --text-headline-sm: 1.5rem; // 24px
  --text-headline-md: 1.875rem; // 30px
  --text-headline-lg: 2.25rem; // 36px
  --text-display-sm: 3rem; // 48px
  --text-display-md: 3.75rem; // 60px
  --text-display-lg: 4.5rem; // 72px

  /*========== Font weight ==========*/

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  background: var(--background);
}

body, input, textarea, button {
  font-family: var(--body-font);
  font-weight: 400;
}

table {
  border-collapse: separate !important;
}

input, button, textarea, select {
  font: inherit;
}

a {
  text-decoration: none;
}

ul{
  list-style: none;
}

img{
  max-width: 100%;
  height: auto;
}

button{
  cursor: pointer;
  border: none;
  outline: none;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  font-family: var(--body-font);
  color: var(--gray-800);
  font-weight: 400;
}

fieldset {
  margin-top: 12px;
  min-inline-size: auto;
  border: 0;
}

 // font-size: 16px (desktop)
 html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
    scroll-behavior: smooth;
  }
  // REM = 1rem = 16px
  button {
    cursor: pointer;
  }
`;

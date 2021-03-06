import { createGlobalStyle } from 'styled-components';
import { BGMain } from '@images';
import { rem } from '@utils//tools';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  html {
      background: ${props => props.theme.colors.background} url(${BGMain}) no-repeat center top;
      background-attachment: fixed;
      font: 400 100%/1 ${props => props.theme.fonts.primary};
      padding-top: ${rem(60)};
      scroll-behavior: smooth;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  body,
  html {
      overflow-x: hidden;
  }

  * {
      box-sizing: border-box;
  }

  ::-moz-selection { 
      background-color: ${props => props.theme.colors.slots[4]};
      color: ${props => props.theme.fonts.colors.slots[0]};
  }
  ::selection { 
      background-color: ${props => props.theme.colors.slots[4]};
      color: ${props => props.theme.fonts.colors.slots[0]};
  }

  textarea, input { 
    outline: none; 
    appearance: none;
    border: none;
  }
`;
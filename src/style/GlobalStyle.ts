import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyle = createGlobalStyle`
  ${Variables};
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }
  // Scrollbar styles
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }
  body {
    margin: 0 auto;
    font-family: var(--font-main);
    background-color: var(--white);
    color: var(--black);
    max-width: var(--max-width);
  }
  ul, li, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);
    :hover {
      color: var(--blue)
    }
  }
  .link {
    position: relative;
    :hover::after {
      width: 100%;
    }
    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
  }
`;

// 一行文字溢出部分用... 代替
const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};

// 扩大可点击区域
const extendClick = () => {
  return `
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };
  `;
};

// export default {
//   'theme-color': 'rgba(236,65,65)',
//   'theme-color-shadow': 'rgba (212, 68, 57, .5)',
//   'font-color-light': '#f1f1f1',
//   'font-color-desc': '#2E3030',
//   'font-color-desc-v2': '#bba8a8', // 略淡
//   'font-size-ss': '10px',
//   'font-size-s': '12px',
//   'font-size-m': '14px',
//   'font-size-l': '16px',
//   'font-size-ll': '18px',
//   'border-color': '#e4e4e4',
//   'background-color': '#f2f3f4',
//   'background-color-shadow': 'rgba (0, 0, 0, 0.3)',
//   'highlight-background-color': '#fff',
//   extendClick,
//   noWrap
// };

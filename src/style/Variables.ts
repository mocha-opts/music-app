import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    // Colors
    --white: #fff;
    --black: #000;
    --gray: #7f7f7f;
    --blue: #057dcd;
    --theme-red: rgba(236, 65, 65);
    --color-shadow: rgba (212, 68, 57, 0.5);
    --font-color-desc: #2E3030;
    --font-color-desc-v2: #bba8a8;// 略淡
    --border-color: #e4e4e4;
    --background-color: #f2f3f4;
    --background-color-shadow: rgba (0, 0, 0, 0.3);
    --highlight-background-color': #fff;
    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;

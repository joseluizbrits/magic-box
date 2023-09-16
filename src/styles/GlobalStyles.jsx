import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --title: 'Ubuntu', sans-serif;
    --text: 'Noto Sans', sans-serif;
    --p1: #E6DFFF;
    --p2: #CFC1FF;
    --p3: #A38EFF;
    --p4: #735AE3;
    --p5: #4F3BC3;
    --p6: #20107D;
    --p7: #0E034D;
    --p8: #07002F;
    --w: #F7F7F7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  input:focus, textarea:focus {
    border: none;
    box-shadow: none;
    outline-style: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
  
  .container {
    margin: 0 calc(100vw * 0.075);
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fromRight {
    from {
      transform: translateX(200px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export default GlobalStyle;

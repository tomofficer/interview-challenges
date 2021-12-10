//how to set and apply variables in css

:root {
  --sm: 50px;
  --lg: 100px;
  --primary-font: uni;
  --secondary-font: gilroy;
}

.booking {
  font-size: var(--lg);
  font-family: var(--primary-font);
}

@font-face {
  font-family: 'gilroy';
  src: url('../../assets/fonts/Gilroy/Gilroy-Black.ttf');
}

@font-face {
  font-family: 'uni';
  src: url('../../assets/fonts/UniNeue/UniNeueBlack.ttf');
}

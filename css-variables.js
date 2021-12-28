//how to set and apply variables in css

//standard method : have all @fontface live in an index.css file in the project's root folder
//this way it will go through the build pipeline and can reference fonts and images
//then have all @var global font variables live inside app.css file and local font variable to their respective files

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

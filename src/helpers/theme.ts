interface IInnerTheme {
  [key: string]: string | number;
}

interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

export const theme: ITheme = {
 space: [0, 2, 4, 8, 16, 32, 48, 64, 128, 256],
 fontFamily: {
   logo: 'Coolvetica', 
   main: 'Inter',
  },
 fontSizes: {
   xxs: '10px',
   xs: '12px',
   s: '14px',
   m: '16px',
   l: '18px',
   xl: '20px',
   xxxl: '24px',
   bxl: '32px',
   bxxl: '40px',
   bxxxl: '44px',
   homePage:  '104px',
   homePageLogo:  '120px',
  },
  fontWeights: {
   regular: 400,
   medium: 500,
   semiBold: 600,
   bold: 700,
  },
  lineHeights: {
   xl: 1.3,
   l: 1.25,
   m: 1.2,
   s: 1.125,
   xs: 1.1,
  },
  colors: {
   background:  '#EAEAEA',

   white: '#FFFFFF',
   white2: '#F7F6F9',

   black: '#000000',
   black2: '#111111',
   black3: '#13151A',
   black4: '#171820',
   black5: '#343434',
   black6: 'rgba(17, 17, 17, 0.7)',
   black7: 'rgba(17, 17, 17, 0.9)',

   grey:'#616161',
   grey2:'#EFEFEF',
   grey3:'#84828A', 
   grey4:'#DCE3E5',
   grey5: '#F6F6F6',
   grey6: 'rgba(220, 227, 229, 0.8)',
   grey7: 'rgba(246, 246, 246, 1)',

   blue: '#3E85F3',
   blue2:  '#DCEBF7',
   blue3:  '#E3F3FF',
   blue4:  '#CEEEFD',
   blue5:  '#72C2F8',
   blue6:  '#CAE8FF',

   lightYellow:  '#FCF0D4',
   yellow:  '#F3B249',

   lightPink:  '#FFD2DD',
   pink: '#EA3D65',

   orange: '#FFAC33',
  },
  radii: {
   none: '0',
   small: '4px',
   normal: '8px',
   medium: '16px',
   big: '40px',
   big2: '44px',
   homePage: '100px',
   round: '50%',
  },
  borders: {
   none: 'none',
   avatar: '2px solid rgba(62, 133, 243, 1)',
   userInput: '1px solid rgba(17, 17, 17, 0.15)',
   addTask: '1px solid rgba(62, 133, 243, 1)',
   task: '1px solid rgba(220, 227, 229, 0.8)',
  },
  shadows: {
   button: '4px 2px 16px 0px rgba(136, 165, 191, 0.48)',
   modal: '0px 4px 16px 0px rgba(17, 17, 17, 0.1)'
  },
};

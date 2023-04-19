interface IInnerTheme {
  [key: string]: string | number;
}

interface ITheme {
  readonly [key: string]: IInnerTheme | number[];
}

export const theme: ITheme = {
  space: [0, 2, 4, 8, 16, 32, 48, 64, 128, 256],
  fontFamily: {
    body: "'Manrope', sans-serif",
    logo: "'Poppins', sans-serif",
  },
  fontSizes: {
    xxs: '12px',
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '20px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
    bxl: '36px',
    bxxl: '48px',
    bxxxl: '68px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    xl: 1.5,
    l: 1.35,
    m: 1.375,
    s: 1.2,
    xs: 1.125,
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    red: '#E2001A',
    blue: '#3091EB',
    green: '#3CBC81',
    mainText: '#111111',
    secondText: '#181C27',
    searchText: '#535353',
    greyText: 'rgba(17, 17, 17, 0.6)',
    newsText: '#111321',
    accent: '#F59256',
    accentHover: '#FF6101',
    background: '#FDF7F2',
    backgroundCardsBlur: 'rgba(255, 255, 255, 0.6)',
  },
  radii: {
    none: '0',
    normal: '14px',
    medium: '20px',
    big: '40px',
    round: '50%',
  },
  borders: {
    none: 'none',
    input: '1px solid rgba(245, 146, 86, 0.5)',
    orangeSmall: '1px solid #F59256',
    orange: '2px solid #F59256',
  },
  shadows: {
    main: '7px 4px 14px 0px rgba(49, 21, 4, 0.07)',
    second: '7px 4px 14px 0px rgba(0, 0, 0, 0.11)',
    avatar: '0px 4px 14px 0px rgba(0, 0, 0, 0.11)',
  },
};

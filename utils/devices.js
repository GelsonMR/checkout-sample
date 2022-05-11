export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  qhd: '2560px'
}

export const mediaQueries = Object.keys(sizes).reduce((accumulator, device) => ({
  ...accumulator,
  [device]: `(min-width: ${sizes[device]})`
}), {})

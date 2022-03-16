module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      width:{
      },
      boxShadow: {
        'login': '0 1px 8px 3px rgba(0, 0, 0, 0.04)',
      },
    },
    fontFamily: {
      'sanss': ['Festive', 'Noto Sans KR'],
      'sanss2': ['NotoSans-Bold', 'NotoSans-Regular'],
      'notoB' : ['NotoSans-Bold', 'NotoSans-Bold'],
      'noto1' : ['NotoSans-Medium', 'NotoSans-Medium'],
      'noto2' : ['NotoSans-Regular', 'NotoSans-Regular'],
      'noto3' : ['NotoSans-Light', 'NotoSans-Light'],
    },
  },
  plugins: [],
}
var days =
  Math.floor((new Date() - new Date('1986-10-02')) / (1000 * 60 * 60 * 24))
var awake = () => {
  var h = new Date().getHours()
  return (h < 8 || h > 20) ? 'asleep' : 'awake'
}
module.exports = {
  name: 'Sean Berrie',
  githubUsername: 'seanberrie',
  githubLink: 'https://github.com/seanberrie',
  githubProfileImage: 'https://avatars0.githubusercontent.com/u/44330310?s=460&v=4',
  personalSiteLink: 'https://seanberrie.github.io/Portfolio/',
  currentCity: 'Los Angeles',
  pets:
  [{
    name: 'Mr. Pickles',
    type: 'Dog',
    toy: 'Grandpas teeth'
  },
  {
    name: 'Dusty',
    type: 'Dog',
    toy: 'stick',
    daysold: `${days}`,
    isAwake: `${awake()}`
  }]
}

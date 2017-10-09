module.exports = {
  'facebookAuth' : {
    'clientID'      : '167198193858651', // your App ID
    'clientSecret'  : 'e5f3974ca9a87d6148c852a826bd7ddd', // your App Secret
    'callbackURL'   : 'http://kodu.webhop.me:4000/site/auth/facebook/callback'
  },

  'twitterAuth' : {
    'consumerKey'       : 'your-consumer-key-here',
    'consumerSecret'    : 'your-client-secret-here',
    'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID'      : '710566805426-plia18l0kh21lvfr1158r811ql3h0kn9.apps.googleusercontent.com',
    'clientSecret'  : 'PlVNhDmIBQtRWs8h0y8vuVVR',
    'callbackURL'   : 'http://kodu.webhop.me:4000/site/auth/google/callback'
  },
  
  'github': {
    'clientID'      : '699c863ae68df0c66ed2',
    'clientSecret'  : '28dd97f0c3b4b0ce7baca24c67a5cc6ff6217445',
    'callbackURL'   : 'http://kodu.webhop.me:4000/site/auth/github/callback'
  },
};

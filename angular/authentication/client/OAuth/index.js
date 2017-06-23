OAuth.initialize();

// Example with facebook.
OAuth.popup('facebook').done(function(facebook) {
   // Api calls with 'facebook'.
}).fail(function(err) {
   // When OAuth flow failed.
});

// Example with Twitter.
OAuth.popup('twitter', { cache: true }).done(function(twitter) {
   // Api calls with 'twitter'.
}).fail(function(err) {
   // When OAuth flow failed.
});

// Example with Google
// OAuth.redirect('google', 'http://192.168.0.2:4000');
// In callback page (can be same page).
// OAuth.callback('google').done(function(google) {
   // Make calls with 'google'
// }).fail(function(err) {

// });

// Javascript (client-side)
// OAuth.popup('facebook', {  }).done(function(result) {
   // $.post('/auth', {code: result.code});
// });

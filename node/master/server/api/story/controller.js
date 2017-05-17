var Story = GET.require('models/story.model');

exports.findAll = function(req, res) {
   /*
   Story.find({}, function(err, stories) {
      if (err) return res.send(err);
      res.send(stories);
   });
   */
   Story.find({})
      .populate('_creator')
      .exec(function(err, stories) {
         if (err) return res.send(err);
         res.send(stories);
      });
};

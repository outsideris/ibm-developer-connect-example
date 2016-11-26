'use strict';

module.exports = function(Post) {
  Post.commentCount = (postId, cb) => {
    Post.findById(postId,
      {include: {relation: 'comments'}}, (err, instance) => {
        instance.comments.count((err, count) => {
          cb(err, count);
        });
    });
  },
  Post.remoteMethod(
    'commentCount',
    {
      http: {path: '/comment/count', verb: 'get'},
      accepts: {arg: 'id', type: 'number', http: {source:'query'}},
      returns: {arg: 'count', type: 'number'}
    }
  )
};

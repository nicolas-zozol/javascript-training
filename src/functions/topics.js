var topics = require('../data').topics;

var result = topics.filter(function (topic) {
    return topic.user.name === "Leonard";
});
console.log("result --> ", result);

result = topics.filter(topic => topic.user.name === "leonard");

var titles = topics.map(function (topic) {
    return topic.title;
});

console.log('titles --> ', titles);

titles = topics.map(topic => topic.title);
console.log('titles avec fat arrow -->', titles);


//compliqué mais c'est moi qui a fait :-)
/*var tag = topics.some(function (topic) {
    for (i = 0; i < topic.tags.length; i++) {
        if ((/(.)*(violence)/i.test(topic.tags[i])) === true) {
            return true
        }
        return false;
    }
});
console.log('tag violence ? : ', tag);*/

var hasViolence = topics.some(function (topic) {
    return topic.tags.includes("violence");
});
console.log("has violence : ",hasViolence);

/*
// 1. topic titles where sheldon wrote at least one comment

var filtered = topics.filter (function (topic) {
    return topic.comments.some(function(comment){
        return comment.user.name==="Sheldon";
    })
});
console.log("filtered topics : ",filtered);

var titles = filtered.map(function (topic) {
    return topic.title;
});
console.log('titres des topics filtre ; ',titles);

// en fat row:
titles =  topics.filter(  topic =>  topic.comments.some( comment => comment.user.name==="Sheldon" )).map(topic => topic.title);
console.log(titles);*/


// 2. sorted ids where penny wrote comments
var result = [];
topics.forEach(function (topic) {
    var group =topic.comments.filter(function (comment) {
       return  comment.user.name === 'Penny';
    });
    group.forEach(function (comment) {
        result.push(comment.id);
    })
})
console.log('filter /',result);

// 3.les contents des comments écrits par un User standard tague par violence

var result3 =[];
topics.forEach(function (topic) {
    topic.comments.forEach(function (comment) {
        var contentgroup = comment.content.filter(function (topic) {
            topic.tags.filter(function (tag) {
              return topic.tags.includes("violence")
            })
        });
        contentgroup.forEach(function (content) {
            result3.push(content);
        })
    })
});
console.log("filter 2 : ",result3);
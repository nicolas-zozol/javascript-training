var topics = require('../data').topics;

// 1. Filter topics written by Leonard
var result = topics.filter(function (topic) {
    return false;
});

console.log("result --> ", result);

// 1. The same with Fat arrow
result = topics.filter(topic => false);


// 2. Mapping some data: getting the title of each topic
var titles = topics.map(function (topic) {
    return topic.title;
});

console.log('titles --> ', titles);

// 2. Same with fat arrow
titles = topics.map(topic => topic.title);
console.log('titles avec fat arrow -->', titles);

// 2.bis) return titles written by Leonard


// 3. Topics with tag violence
var hasViolence = topics.some(function (topic) {
    return false;
});
console.log("has violence : ",hasViolence);

// 4. See Reduce in demos

// 4.bis concat all comments in one array

const reducer = (memo, t)=>memo.concat(t.comments);
const allComments = topics.reduce(reducer, []);
console.log('all comments', allComments);

console.log('all contents:',
        topics
            .reduce(reducer, [])
            .map(c=>c.content) 
);


/*** Exercices :   ***/

// 0 : sorted comment ids where penny wrote comments
// Warning : some comments have no user

var pennyIds = topics.reduce(reducer, [])
    .filter(comment => comment.user && comment.user.name === 'Penny')
    .map(c => c.id)
    .sort( (id1, id2) =>  id1<id2 ? -1 : 1);  // WARNING !!!!!! For sets only

console.log('Penny Ids : ', pennyIds);

// 1 - All Comment contents from Sheldon
// 2 - All topic Ids with more than 4 comments
// 3 - All Comment contents ordered by length DESC
// 4 - All user names that are tagged with a ‘fun' or ‘violence' tag : from topic or Comment
// 5 - Comment contents written by a standard user, tagged with Violence


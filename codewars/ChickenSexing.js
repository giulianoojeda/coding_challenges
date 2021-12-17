/*
Bob is a chicken sexer. His job is to sort baby chicks into a Male(M) and Female(F) piles. When bob can't guess can throw his hands up and declare it with a '?'.

Bob's bosses don't trust Bob's ability just yet, so they have paired him with an expert sexer. 
All of Bob's decisions will be checked against the experts choices to generate a correctness score.

Scoring Rules
When they agree, he gets 1 point.
When they disagree but one has said '?', he gets 0.5 points.
When they disagree completely, he gets 0 points.

*/
function correctness(bobsDecisions, expertDecisions) {
    return bobsDecisions.map((bob, i) => {
        return bob, expertDecisions[i], bob === expertDecisions[i] ? 1 : (bob === '?') || (expertDecisions[i] === '?') ? 0.5 : 0;
    }).reduce((a, b) => a + b);
}

console.log(correctness(['M', '?', 'M'], ['M', 'F', '?']))
console.log(correctness(['M', '?', 'M'], ['F', 'F', '?']))

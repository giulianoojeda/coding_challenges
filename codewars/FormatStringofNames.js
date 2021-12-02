/*

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

function list(names) {
  return names.length === 0
    ? ""
    : names
        .slice(0, names.length - 1)
        .map((list) => list.name)
        .join(", ") +
        (names.length > 1 ? " & " : "") +
        names[names.length - 1].name;
}
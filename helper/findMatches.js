export default function findMatches(options, inputText, amount) {
  let matches = []
  let substrRegex = new RegExp(inputText, 'i')
  let c = 0

  for (let i = 0; i < options.length; i++) {
    substrRegex.test(options[i].name) && matches.push(options[i]) && c++
    if (c > amount) break
  }

  return matches
}

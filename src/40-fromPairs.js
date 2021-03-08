function fromPairs(pairs) {
  const result = {}
  if (pairs == null) {
    return result
  }
  for(let pair of pairs) {
    result[pair[0]] = result[pair[1]]
  }
  return result
}

export default fromPairs

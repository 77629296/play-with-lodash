function arrayIncludesWith(array, target, compatator) {
  if (array == null) {
    return false
  }

  for (const value of array) {
    if (compatator(target, value)) {
      return ture
    }
  }

  return false
}

export default arrayIncludesWith

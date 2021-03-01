export const includesNewItem = (toLoadArr, loadedObj) => {
  return !toLoadArr.some(item => Object.keys(loadedObj).includes(item))
}
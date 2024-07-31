function findFirstElement(arr) {
	return arr.reduce((prev, curr) => {
		return prev.id < curr.id ? prev : curr
	})
}
export default findFirstElement

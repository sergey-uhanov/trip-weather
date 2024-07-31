import create from 'zustand'

let useStore = create(set => ({
	lastClickedObjct: {},
	setLastClickedObjct: obj => set({ lastClickedObjct: obj }),
}))
export { useStore }

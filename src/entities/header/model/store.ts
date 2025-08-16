import { defineStore } from 'pinia'

import { useIsBoolean } from '@/shared/lib/use/base'

const namespace = 'header'

export const useHeaderStore = defineStore(namespace, () => {
	const { isBoolean: isMenu, setFalse: setFalseMenu, setTrue: setTrueMenu } = useIsBoolean()

	return {
		isMenu,
		setFalseMenu,
		setTrueMenu
	}
})

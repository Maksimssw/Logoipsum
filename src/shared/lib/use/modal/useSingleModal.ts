import { useIsBoolean } from '@/shared/lib/use/base'

export const useSingleModal = (init?: boolean) => {
	const { isBoolean: isModal, setTrue: openModal, setFalse: closeModal } = useIsBoolean(init)

	return {
		isModal,
		openModal,
		closeModal
	}
}

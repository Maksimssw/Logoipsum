export const formatDate = (date: Date): string => {
	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const hours = date.getHours()
	const minutes = date.getMinutes()

	return `${day}.${month}.${year} в ${hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

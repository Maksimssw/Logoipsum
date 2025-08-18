/**
 * Функция для склонения слова в зависимости от числа.
 * @param count - Число, которое определяет форму слова.
 * @param words - Массив из трех форм слова: ['один', 'два', 'пять'].
 * @returns Склоненное слово.
 */
export const pluralize = (count: number, words: [string, string, string]): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	return words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[count % 10 < 5 ? count % 10 : 5]]
}

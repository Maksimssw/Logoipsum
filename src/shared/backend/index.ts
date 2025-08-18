export const getBlogTagsFilterMock = [
	{
		text: 'Город',
		code: 'city',
		active: false
	},
	{
		text: 'Природа',
		code: 'nature',
		active: false
	},
	{
		text: 'Люди',
		code: 'people',
		active: false
	},
	{
		text: 'Животные',
		code: 'animals',
		active: false
	},
	{
		text: 'Еда',
		code: 'food',
		active: false
	},
	{
		text: 'Напитки',
		code: 'drinks',
		active: false
	},
	{
		text: 'Архитектура',
		code: 'architecture',
		active: false
	},
	{
		text: 'Искусство',
		code: 'art',
		active: false
	}
]

export const getPostsMock = [
	{
		image: '/assets/posts/post1.webp',
		id: 1,
		date: '9 Апр',
		time: '2 мин',
		countComments: 1,
		title: 'Вдохновение в каждом шаге',
		shortDescription: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' }
		]
	},
	{
		image: '/assets/posts/post2.webp',
		id: 2,
		date: '6 Апр',
		time: '3 мин',
		countComments: 5,
		title: 'Моменты тишины и покоя',
		shortDescription: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' }
		]
	},
	{
		image: '/assets/posts/post3.webp',
		id: 3,
		date: '5 Апр',
		time: '3 мин',
		countComments: 10,
		title: 'Цвета природы в наших руках',
		shortDescription: 'Наши художники выражают всю красоту окружающего мира через творчество.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		]
	},
	{
		image: '/assets/posts/post4.webp',
		id: 4,
		date: '4 Апр',
		time: '15 мин',
		countComments: 6,
		title: 'Семейные узы в дикой природе',
		shortDescription: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		]
	},
	{
		image: '/assets/posts/post5.webp',
		id: 5,
		date: '3 Апр',
		time: '2 мин',
		countComments: 2,
		title: 'Гармония городских и природных пейзажей ',
		shortDescription: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		]
	},
	{
		image: '/assets/posts/post6.webp',
		id: 6,
		date: '1 Апр',
		time: '4 мин',
		countComments: 0,
		title: 'Моменты, которые остаются в сердце',
		shortDescription: 'Эти мгновения наполняют наши сердца радостью и любовью.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' },
			{ text: 'Животные', code: 'animals' }
		]
	},
	{
		image: '/assets/posts/post7.webp',
		id: 7,
		date: '6 Апр',
		time: '3 мин',
		countComments: 5,
		title: 'Моменты, которые остаются в сердце',
		shortDescription: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		]
	},
	{
		image: '/assets/posts/post8.webp',
		id: 8,
		date: '5 Апр',
		time: '3 мин',
		countComments: 10,
		title: 'Объятия, которые говорят больше слов',
		shortDescription: 'В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным...',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		]
	},
	{
		image: '/assets/posts/post9.webp',
		id: 9,
		date: '4 Апр',
		time: '15 мин',
		countComments: 6,
		title: 'Объятия, которые говорят больше слов',
		shortDescription: 'Фреска с божествами, словно окно в иной мир, где царит вечная гармония и покой.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		]
	},
	{
		image: '/assets/posts/post10.webp',
		id: 10,
		date: '3 Апр',
		time: '2 мин',
		countComments: 2,
		title: 'Вкус лета',
		shortDescription: 'Напоминание о том, что простые удовольствия могут приносить огромное счастье.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		]
	},
	{
		image: '/assets/posts/post11.webp',
		id: 11,
		date: '1 Апр',
		time: '4 мин',
		countComments: 0,
		title: 'Эхо прошлого',
		shortDescription: 'Старинное здание, укрытое под кронами деревьев, словно хранит в себе эхо прошлого.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' },
			{ text: 'Животные', code: 'animals' }
		]
	}
]

export const getPostByIdMock = {
	'1': {
		image: '/assets/posts/post1.webp',
		id: 1,
		date: '9 Апр',
		time: '2 мин',
		countComments: 1,
		title: 'Вдохновение в каждом шаге',
		description:
			'Каждое утро, когда я просыпаюсь в палатке, окружённой лесом и горами, я чувствую, как природа наполняет меня энергией. Величественные вершины, покрытые зелёными лесами, напоминают мне о том, как важно сохранять связь с природой. Каждый шаг по тропе — это не просто движение вперёд, это путешествие внутрь себя, где я нахожу вдохновение и силу.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' }
		],
		comments: [
			{
				id: 1,
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '9.04.2024 в 14:54',
				text: 'Эти мгновения наполняют наши сердца радостью и любовью.'
			}
		]
	},
	'2': {
		image: '/assets/posts/post2.webp',
		id: 2,
		date: '6 Апр',
		time: '3 мин',
		countComments: 5,
		title: 'Моменты тишины и покоя',
		description:
			'В такие моменты наши фотографы ощущают гармонию и умиротворение. Тишина природы, шелест листьев и легкий ветерок создают атмосферу спокойствия. Здесь можно забыть обо всех проблемах и просто наслаждаться моментом.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' }
		],
		comments: Array(5)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '6.04.2024 в 10:23',
				text: 'Как же прекрасна тишина!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'3': {
		image: '/assets/posts/post3.webp',
		id: 3,
		date: '5 Апр',
		time: '3 мин',
		countComments: 10,
		title: 'Цвета природы в наших руках',
		description:
			'Наши художники выражают всю красоту окружающего мира через творчество. Каждый мазок кисти — это отражение эмоций, которые вызывает природа. Яркие краски, мягкие переходы и детали, которые заставляют задуматься о величии мира вокруг нас.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		],
		comments: Array(10)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '5.04.2024 в 15:00',
				text: 'Это произведение искусства завораживает.'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'4': {
		image: '/assets/posts/post4.webp',
		id: 4,
		date: '4 Апр',
		time: '15 мин',
		countComments: 6,
		title: 'Семейные узы в дикой природе',
		description:
			'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство. Природа становится свидетелем тех моментов, которые объединяют семьи и делают их связь еще крепче.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		],
		comments: Array(6)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '4.04.2024 в 12:30',
				text: 'Как трогательно!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'5': {
		image: '/assets/posts/post5.webp',
		id: 5,
		date: '3 Апр',
		time: '2 мин',
		countComments: 2,
		title: 'Гармония городских и природных пейзажей',
		description:
			'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии. Зеленые парки, реки и небоскребы создают уникальный контраст, который вдохновляет на размышления.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		],
		comments: Array(2)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '3.04.2024 в 09:45',
				text: 'Как красиво!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'6': {
		image: '/assets/posts/post6.webp',
		id: 6,
		date: '1 Апр',
		time: '4 мин',
		countComments: 0,
		title: 'Моменты, которые остаются в сердце',
		description:
			'Эти мгновения наполняют наши сердца радостью и любовью. Иногда самые простые вещи оставляют самый глубокий след в нашей памяти.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' },
			{ text: 'Животные', code: 'animals' }
		],
		comments: []
	},
	'7': {
		image: '/assets/posts/post7.webp',
		id: 7,
		date: '6 Апр',
		time: '3 мин',
		countComments: 5,
		title: 'Моменты, которые остаются в сердце',
		description:
			'В такие моменты наши фотографы ощущают гармонию и умиротворение. Это те мгновения, которые невозможно забыть.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		],
		comments: Array(5)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '6.04.2024 в 14:00',
				text: 'Как трогательно!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'8': {
		image: '/assets/posts/post8.webp',
		id: 8,
		date: '5 Апр',
		time: '3 мин',
		countComments: 10,
		title: 'Объятия, которые говорят больше слов',
		description:
			'В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным способом выразить свои чувства. Это универсальный язык любви и поддержки.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		],
		comments: Array(10)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '5.04.2024 в 16:20',
				text: 'Как трогательно!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'9': {
		image: '/assets/posts/post9.webp',
		id: 9,
		date: '4 Апр',
		time: '15 мин',
		countComments: 6,
		title: 'Объятия, которые говорят больше слов',
		description:
			'Фреска с божествами, словно окно в иной мир, где царит вечная гармония и покой. Это место, где время останавливается, а душа отдыхает.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Животные', code: 'animals' }
		],
		comments: Array(6)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '4.04.2024 в 17:10',
				text: 'Как впечатляюще!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'10': {
		image: '/assets/posts/post10.webp',
		id: 10,
		date: '3 Апр',
		time: '2 мин',
		countComments: 2,
		title: 'Вкус лета',
		description:
			'Напоминание о том, что простые удовольствия могут приносить огромное счастье. Летний день, наполненный солнцем и теплом, заряжает энергией и радостью.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Искусство', code: 'art' }
		],
		comments: Array(2)
			.fill({
				image: '/assets/authors/author1.webp',
				author: 'Мира Гусева',
				date: '3.04.2024 в 18:45',
				text: 'Как же хочется лета!'
			})
			.map((c, i) => {
				return { ...c, id: i }
			})
	},
	'11': {
		image: '/assets/posts/post11.webp',
		id: 11,
		date: '1 Апр',
		time: '4 мин',
		countComments: 0,
		title: 'Эхо прошлого',
		description:
			'Старинное здание, укрытое под кронами деревьев, словно хранит в себе эхо прошлого. Это место, где история оживает и рассказывает свои истории.',
		tags: [
			{ text: 'Природа', code: 'nature' },
			{ text: 'Люди', code: 'people' },
			{ text: 'Животные', code: 'animals' }
		],
		comments: []
	}
}

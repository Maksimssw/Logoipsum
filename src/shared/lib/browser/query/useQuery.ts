import { type LocationQueryValueRaw, useRoute, useRouter } from 'vue-router'

export const useQuery = () => {
	const router = useRouter()
	const route = useRoute()

	const setQuery = async (key: string, params: LocationQueryValueRaw | LocationQueryValueRaw[]): Promise<void> => {
		try {
			await router.push({
				query: {
					...router.currentRoute.value.query,
					[key]: params || undefined
				}
			})
		} catch (err) {
			console.error(`Error setting query for key "${key}":`, err)
		}
	}

	const getQuery = (key: string): LocationQueryValueRaw | LocationQueryValueRaw[] | undefined => {
		return route.query[key]
	}

	return { setQuery, getQuery }
}

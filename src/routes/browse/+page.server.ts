import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { get } from '$lib/api'

export const load = (async ({ params }) => {
	// const mostActiveChannels = await get(`/channels/most-active?skip=${0}&limit=${5}`)
	// const weeklyChannels = await get(`/channels/weekly?skip=${0}&limit=${10}`)
	// const highestRankedUsers = await get(`/users/highest-ranked?skip=${0}&limit=${10}`)
	// const risingStarUsers = await get(`/users/rising-stars?skip=${0}&limit=${10}`)
	// const myChannels = await get(`/channels/me/hosted?skip=${0}&limit=${10}`)
	// const favChannels = await get(`/channels/me/fav?skip=${0}&limit=${10}`)

	const mostActiveChannels: any = []
	const weeklyChannels: any = []
	const highestRankedUsers: any = []
	const risingStarUsers: any = []
	const myChannels: any = []
	const favChannels: any = []

	const tableChannels = await get(`/channels?searchQuery=&skip=${0}&limit=${50}`)

	return {
		post: {
			mostActiveChannels,
			weeklyChannels,
			highestRankedUsers,
			risingStarUsers,
			myChannels,
			favChannels,
			tableChannels
		}
	}
}) satisfies PageServerLoad

// const mostActiveChannels = await get(`/channels/most-active?skip=${0}&limit=${5}`)
// const weeklyChannels = await get(`/channels/weekly?skip=${0}&limit=${10}`)
// const highestRankedUsers = await get(`/users/highest-ranked?skip=${0}&limit=${10}`)
// const risingStarUsers = await get(`/users/rising-stars?skip=${0}&limit=${10}`)
// const myChannels = await get(`/channels/me/hosted?skip=${0}&limit=${10}`)
// const favChannels = await get(`/channels/me/fav?skip=${0}&limit=${10}`)
// const tableChannels = await get(`/channels?searchQuery=&skip=${0}&limit=${50}`)

// return {
// 	post: {
// 		mostActiveChannels: await get(`/channels/most-active?skip=${0}&limit=${5}`),
// 		weeklyChannels: await get(`/channels/weekly?skip=${0}&limit=${10}`),
// 		highestRankedUsers: await get(`/users/highest-ranked?skip=${0}&limit=${10}`),
// 		risingStarUsers: await get(`/users/rising-stars?skip=${0}&limit=${10}`),
// 		myChannels: await get(`/channels/me/hosted?skip=${0}&limit=${10}`),
// 		favChannels: await get(`/channels/me/fav?skip=${0}&limit=${10}`),
// 		tableChannels: await get(`/channels?searchQuery=&skip=${0}&limit=${50}`)
// 	}

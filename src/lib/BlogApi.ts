export default class BlogApi {
	private token: string;
	endpoint: string;
	customFetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>;

	constructor(token: string, endpoint: string, customFetch = fetch) {
		this.token = token;
		this.endpoint = endpoint;
		this.customFetch = customFetch;
	}

	async getPosts(limit = 10) {
		const queryName = 'RecentPosts';
		const query = `
      query ${queryName}() {
				posts(first: ${limit}) {
					id
					slug
					title
					description
					content
					tags
					coverImage {
						url
						width
						height
					}
					createdBy {
						name
						picture
						publishedAt
						updatedAt
					}
				}
			}
    `;

		const response = await this.customFetch(this.endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables: null,
				operationName: queryName
			})
		});
		const posts = (await response.json()).data.posts;

		console.log('blog api data: ', posts);
		return posts;
	}

	async getPost(slug: string) {
		const queryName = 'GetPost';
		const query = `
      query ${queryName}() {
        post(where: {slug: "${slug}"}) {
					id
					slug
					title
					description
					content
					tags
					createdBy {
						name
						picture
						publishedAt
						updatedAt
					}
					coverImage {
						url
						width
						height
					}
					authors {
						name
						publishedAt
					}
        }
      }
    `;

		try {
			const res = await this.customFetch(this.endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					query,
					variables: null,
					operationName: queryName
				})
			});

			return (await res.json()).data.post;
		} catch (err) {
			return Promise.reject(new Error(`There was an error in BlogApi.getPost: ${err}`));
		}
	}
}

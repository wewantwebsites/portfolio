const GetPostQuery = `
      query GetPosts($limit: Int!){
        posts(first: $limit) {
          id
          slug
          content
          createdBy {
            name
            picture
            publishedAt
            updatedAt
          }
          tags
          title
        }
      }
    `;

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
		const query = GetPostQuery;
		const response = await this.customFetch(this.endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables: { limit: 3 },
				operationName: 'GetPosts'
			})
		});
		const posts = (await response.json()).data.posts;

		console.log('blog api data: ', posts);
		return posts;
	}

	async getPost(slug: string) {
		const query = `
      query GetPost($slug: String!) {
        post(where: {slug: $slug) {
          content
          description
          updatedAt
          tags
          title
          id
        }
      }
    `;
		const res = await this.customFetch(this.endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables: { slug },
				operationName: 'GetPost'
			})
		});

		return (await res.json()).data.post;
	}
}
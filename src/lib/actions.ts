type UserAction = {
	type: string;
	name: string;
	capture?: boolean;
	payload?: unknown;
};
type Listener = (e: Event, payload?: unknown) => void;
type ActionMap = Map<string, Listener>;
const actionsWithMapper = (mapper: ActionMap) => {
	return (node: Node, { type, name, capture = false, payload = null }: UserAction) => {
		if (!node || !actions) return;
		let listener = mapper.get(name) as Listener;
		if (!listener) return;
		if (payload) {
			listener = (e: Event) => listener(e, payload);
		}
		node.addEventListener(type, listener, capture);

		return {
			destroy() {
				node.removeEventListener(type, listener, capture);
			}
		};
	};
};
const actionMapper = new Map() as ActionMap;

actionMapper.set('SAY_HI', (e) => {
	e.preventDefault();
	console.log('hello world');
});

export const actions = actionsWithMapper(actionMapper);

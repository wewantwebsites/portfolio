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
		if (!node || !actions) return { destroy: () => {} };

		let listener = mapper.get(name) as Listener;
		if (!listener) return { destroy: () => {} };

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
const talk = (m: string) => {
	return () => {
		console.log(m);
	};
};
const sayHi = talk('hi');
const sayBye = talk('bye');
actionMapper.set('SAY_HI', (e) => {
	e.preventDefault();
	sayHi();
});
actionMapper.set('SAY_BYE', (e) => {
	e.preventDefault();
	sayBye();
});

export const actions = actionsWithMapper(actionMapper);

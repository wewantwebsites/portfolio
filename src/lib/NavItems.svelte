<script lang="ts">
	type MenuItems = {
		id: string;
		name: string;
		href?: string;
		children?: MenuItems[];
	};
	type NavItemsProps = {
		menuItems: MenuItems[];
	};

	let { menuItems }: NavItemsProps = $props();
</script>

{#each menuItems as item}
	{#if Object.hasOwn(item, 'children')}
		<li class="bg-base-500">
			<details>
				<summary>{item.name}</summary>
				<ul class="p-2">
					{#each item.children as child}
						<li><a href={child.href}>{child.name}</a></li>
					{/each}
				</ul>
			</details>
		</li>
	{:else}
		<li class="bg-base-500"><a href={item.href}>{item.name}</a></li>
	{/if}
{/each}

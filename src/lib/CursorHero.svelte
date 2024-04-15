<script lang="ts">
	import gsap from 'gsap';

	function cursorHero(node: Node) {
		const listener = (e: Event) => {
			const { clientX, clientY } = e as MouseEvent;
			const x = Math.round((clientX / window.innerWidth) * 100);
			const y = Math.round((clientY / window.innerHeight) * 100);

			gsap.to(node, {
				'--x': `${x}%`,
				'--y': `${y}%`,
				duration: 0.3,
				ease: 'sine.out'
			});
		};
		node.addEventListener('mousemove', listener);

		return {
			destroy() {
				node.removeEventListener('mousemove', listener);
			}
		};
	}
</script>

<div class="wrapper" use:cursorHero>
	<div class="hero">
		<!-- <h1 class="hero__heading">Have a nice day!</h1> -->
	</div>

	<div class="hero hero--secondary" aria-hidden="true">
		<div class="hero">
			<h1 class="hero__heading">Have a nice day!</h1>
		</div>
		<!-- <p class="hero__heading">It will be sunny</p> -->
	</div>
</div>

<style>
	.wrapper {
		position: relative;
	}

	.hero {
		min-height: 100vh;
		padding: clamp(1rem, 2vw, 5rem);
		display: flex;
		align-items: center;
	}

	.hero--secondary {
		--mask: radial-gradient(circle at var(--x, 70%) var(--y, 50%), black 25%, transparent 0);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(45deg, #26547c, #5ff4c2, #ffd166, #ef476f);
		color: rgb(9, 14, 23);
		-webkit-mask-image: var(--mask);
		mask-image: var(--mask);
	}

	.hero__heading {
		font-size: clamp(2rem, 5vw, 8rem);
		text-transform: uppercase;
		margin: 0;
		max-width: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
</style>

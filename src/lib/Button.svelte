<script lang="ts">
    import { Button } from "bits-ui";

    let { children } = $props();
  </script>
   
  <Button.Root
    class="inline-flex h-12 items-center justify-center rounded-input rounded bg-turquoise-800 text-white
    px-[21px] text-[15px] font-semibold text-background shadow-mini
    hover:bg-turquoise/95 active:scale-98 active:transition-all"
  >
    {@render children()}
  </Button.Root>
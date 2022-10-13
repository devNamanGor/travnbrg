<script lang="ts">
    /**
     * Specify url for the image using 
     * `--url: url(images/large/pexels-laptop-logo.png); --bg-pos: center`
     * in the style tag
     */
    export let style: string = "";
</script>

<div {style} class="section-img">
    <slot />
</div>
<script lang="ts">
    import { onMount } from "svelte";
    import { themeChange } from "theme-change";

    let darkModeOn: boolean;
    let currentModePath: string;

    onMount(onMountThemeChange);

    let shouldPreferUserColorScheme: boolean = false;

    function performUserPreferenceCheck() {
        var val = localStorage.getItem("preferUserColorScheme");
        if (val != null) {
            shouldPreferUserColorScheme = val == "true";
        } else {
            localStorage.setItem("preferUserColorScheme", "false");
        }
    }

    function onMountThemeChange(): void {
        themeChange(false);
        performUserPreferenceCheck();
        if (shouldPreferUserColorScheme) {
            darkModeOn =
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches;
        } else {
            var colorSchemeMode =
                document.documentElement.getAttribute("data-theme");
            if (colorSchemeMode == "dark") {
                darkModeOn = true;
            } else {
                darkModeOn = false;
            }
        }
        currentModePath = darkModeOn ? moonPath : sunPath;
        var htmlElement = document.documentElement;
        htmlElement.setAttribute("data-theme", darkModeOn ? "dark" : "light");
    }

    let sunPath =
        "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";
    let moonPath =
        "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";

    function toggleUserPreference() {
        console.log(
            `shouldPreferUserColorScheme: ${shouldPreferUserColorScheme}`
        );
        try {
            localStorage.removeItem("preferUserColorScheme");
            localStorage.setItem(
                "preferUserColorScheme",
                shouldPreferUserColorScheme ? "true" : "false"
            );
        } catch (e) {
            console.log(e);
        }
        console.log(
            `shouldPreferUserColorScheme: ${shouldPreferUserColorScheme}`
        );
        onMountThemeChange();
    }

    function toggleDarkMode(newValue?: boolean, swap: boolean = true) {
        if (darkModeOn == undefined || darkModeOn == null) {
            darkModeOn = false;
        }

        if (newValue != undefined && newValue != null) {
            darkModeOn = newValue;
        }

        if (darkModeOn) {
            currentModePath = moonPath;
        } else {
            currentModePath = sunPath;
        }
        themeChange(swap);
        console.log(darkModeOn, swap);
    }
</script>

<div class="dropdown dropdown-end md:dropdown-hover mr-2">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <label
        for="dropdown-icon"
        tabindex="0"
        class="btn btn-circle btn-accent btn-xs w-10 h-10"
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d={currentModePath}
            />
        </svg></label
    >
    <div class="dropdown-content">
        <div class="card bg-neutral">
            <div class="card-content">
                <div class="row-auto">
                    <div class="label text-neutral-content text-center">
                        System Theme
                    </div>
                    <input
                        type="checkbox"
                        name="user-scheme-preference"
                        id="user-scheme-preference"
                        class="toggle ml-3 mr-3 mt-3 mb-0 toggle-accent"
                        title="Enable System Theme"
                        value={shouldPreferUserColorScheme}
                        bind:checked={shouldPreferUserColorScheme}
                        on:change={toggleUserPreference}
                    />
                    <!-- on:click={toggleUserPreference} -->
                </div>
                <button
                    data-set-theme="light"
                    data-act-class="ACTIVECLASS"
                    on:click|preventDefault={() => toggleDarkMode(false, true)}
                    class="col-start-1 row-start-1 m-3 p-1 h-12 w-12 btn btn-accent {shouldPreferUserColorScheme
                        ? 'btn-disabled'
                        : ''}"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d={sunPath}
                        />
                    </svg>
                </button>

                <button
                    class="col-start-1 row-start-1 mt-0 ml-3 mr-3 mb-3 p-1 h-12 w-12 btn btn-accent {shouldPreferUserColorScheme
                        ? 'btn-disabled'
                        : ''}"
                    data-set-theme="dark"
                    data-act-class="ACTIVECLASS"
                    on:click={() => toggleDarkMode(true, true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d={moonPath}
                        />
                    </svg></button
                >
            </div>
        </div>
    </div>
</div>

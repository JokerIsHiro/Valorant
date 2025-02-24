document.addEventListener('DOMContentLoaded', function() {
    const lightIcon = document.querySelector(".light");
    const darkIcon = document.querySelector(".dark");

    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const iconToggle = () => {
        lightIcon.classList.toggle("hidden");
        darkIcon.classList.toggle("hidden");
    }

    const themeChecker = () => {
        if (localStorage.getItem("theme") === 'dark' || (!localStorage.getItem("theme") && systemTheme)) {
            document.documentElement.classList.add("dark");
            document.body.classList.add("transition-colors", "duration-500");
            lightIcon.classList.add("hidden");
            darkIcon.classList.remove("hidden");
            return;
        }
        document.documentElement.classList.remove("dark");
        document.body.classList.add("transition-colors", "duration-500");
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove("hidden");
    }

    const themeSwitch = () => {
        document.body.classList.add("transition-colors", "duration-500");
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            iconToggle();
            return;
        }
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconToggle();
    };

    lightIcon.addEventListener("click", () => {
        themeSwitch();
    });
    darkIcon.addEventListener("click", () => {
        themeSwitch();
    });

    themeChecker();
});
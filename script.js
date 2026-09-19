(() => {
    const header = document.querySelector("[data-header]");
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#menu-principal");

    const setHeaderState = () => {
        header?.classList.toggle(
            "scrolled",
            window.scrollY > 8
        );
    };

    setHeaderState();

    window.addEventListener(
        "scroll",
        setHeaderState,
        { passive: true }
    );

    menuButton?.addEventListener("click", () => {
        const open =
            nav?.classList.toggle("is-open") ?? false;

        menuButton.setAttribute(
            "aria-expanded",
            String(open)
        );

        const label =
            menuButton.querySelector(".sr-only");

        if (label) {
            label.textContent =
                open ? "Fechar menu" : "Abrir menu";
        }
    });

    nav?.addEventListener("click", (event) => {
        const target = event.target;

        if (
            target instanceof HTMLAnchorElement &&
            target
                .getAttribute("href")
                ?.startsWith("#")
        ) {
            nav.classList.remove("is-open");

            menuButton?.setAttribute(
                "aria-expanded",
                "false"
            );

            const label =
                menuButton?.querySelector(".sr-only");

            if (label) {
                label.textContent = "Abrir menu";
            }
        }
    });
})();
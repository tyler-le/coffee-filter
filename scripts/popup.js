function checkFirstRun() {
    const firstRun = localStorage.getItem("firstRun") === null;
    if (firstRun) {
        const main = document.querySelector("main");

        // Display a message to the user to restart their browser
        main.innerHTML = `<div style="border: 1px solid; margin: 10px 0px; padding: 15px; color: #D8000C; background-color: #FFBABA;">Please restart your browser to complete the installation of this extension.</div>`;

        // Set a flag in local storage to indicate that the extension has already been run
        localStorage.setItem("firstRun", "false");
        return;
    }
}

window.addEventListener("load", function () {
    checkFirstRun();
});
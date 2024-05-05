function hideAllSectionsExcept(sectionName) {
    const sections = document.getElementsByClassName("scenario")
    for (let index = 0; index < sections.length; index++) {
        const element = sections[index];
        element.classList += " hidden"
    }

    const sectionToShow = document.getElementById(sectionName)
    sectionToShow.classList = "scenario"
}
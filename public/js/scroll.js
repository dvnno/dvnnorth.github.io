$(() => {
    let transitionIDs = [
        { linkID: ".headLink", sectionID: "#head" },
        { linkID: ".aboutMeLink", sectionID: "#about-me" },
        { linkID: ".portfolioLink", sectionID: "#portfolio" },
        { linkID: ".contactLink", sectionID: "#contact" }
    ];

    transitionIDs.forEach((idCollection) => {
        $(idCollection.linkID).on("click", (event) => {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(idCollection.sectionID).offset().top
            }, 1000);
        });
    });
});
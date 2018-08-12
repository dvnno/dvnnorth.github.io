$(() => {
    let transitionIDs = [
        { linkID: "#aboutMeLink", sectionID: "#about-me" },
        { linkID: "#portfolioLink", sectionID: "#portfolio" },
        { linkID: "#contactLink", sectionID: "#contact" }
    ];
    let transition = (linkID, sectionID) => {
        $(linkID).on("click", (_) => {
            $('html, body').animate({
                scrollTop: $(sectionID).offset().top
            }, 1000);
        });
    };

    transitionIDs.forEach((idCollection) => transition(idCollection.linkID, idCollection.sectionID));
});
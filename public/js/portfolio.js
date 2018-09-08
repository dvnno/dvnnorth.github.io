$(() => {
    console.log('portfolio test');
    // Grab the portfolio content div (card container)
    let $portfolioContent = $('#portfolio-content');
    // Get the project data to build the portfolio section from database
    $.get('/api/projects', projects => {
        projects.forEach(project => {
            // Generate card
            let $cell = $('<div>')
                .attr('class', 'card fade-in-out up-in-out')
                .data('duration', 0);
            let $cardImgHolder = $('<div>')
                .attr('class', 'card-image');
            let $portfolioImg = $('<img>')
                .attr('class', 'portfolio-image')
                .attr('src', project.img)
                .attr('alt', project.title)
                .attr('width', 600);
            let $projectTitle = $('<span>')
                .attr('class', 'card-title')
                .text(project.title);
            // Append elements
            $cardImgHolder
                .append($portfolioImg)
                .append($projectTitle);
            $cell.append($cardImgHolder);
            $portfolioContent.append($cell);
        });
        console.log($portfolioContent);
    });
});

/* <div class="col s12 m6 l4">
        <div class="card fade-in-out up-in-out" data-duration="0">
            <div class="card-image">
                <img class="portfolio-image" src="http://placehold.it/600x400">
                <span class="card-title">Something Interesting</span>
            </div>
        </div>
    </div> */

const url = 'data.json'

//Test that the data displays correctly
d3.json(url).then(data => {
    console.log(data);
    
    data.forEach(d => {
        console.log(d);
    });
}).catch(error => {
    console.error('An error ocurred when loading the JSON file: ', error);
})

//Filtering and mapping relevant information
d3.json(url).then(data => {
    const ages = data.map(d => +d["Q2.2"]).filter(d => !isNaN(d));
    const genres = data.map(d => d["Q2.3"]).filter(d => d);
    const educationLevels = data.map(d => d["Q2.7"]).filter(d => d);

    //Calling functions to visualize data
    createBarChartAges(ages);
    createPieChartGenres(genres);
    createBarChartEducation(educationLevels);
}).catch(error => console.error('An error ocurred when loading the JSON file: ', error));

function createBarChartAges(ages) {

}

function createPieChartGenres(genres) {

}

function createBarChartEducation(educationLevels) {
    
}
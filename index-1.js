//reading data json file
d3.json("data.json").then(function (data){
    // selecting the ul element from html to append the list of keys
    var ul = d3.select('ul').classed('sortable',true).append('li').classed('list',true);
    // selecting workspace id from html to display the text
    text = d3.select('#workspace')
    items = [] // to store all the clicked file names

    list = ul.selectAll('li')
        .data(Object.keys(data)) //object.keys method will retrieve all the keys in json data
        .enter()
        .append('li')

        .append('draggable',true)
        .append('p')

        .attr('id',function(d){         // creating id's and class names with file name
            return d;
        })
        .attr('class',function(d){
            return d;
        })

        .html(function (d){         // printing the file names in html
            return d;
        })
            // on mouse over the background colour changes to grey and on mouse out the background colour changes to white(default colour)
    .on('mouseover',function(){
        $(this).css("background-color","grey");
    })
        .on('mouseout',function (){
            $(this).css("background-color","white");

        })
// on clicking the file name the html will display the value of the key from json data file
        list .on('click',function(d){
            items.push(d);

                text.append('div').classed('doclist', true)

                text.append('div').attr('id', function () {

                    return d;

                })
                    .style('border','2px solid black')
                    .style('margin','10px')
                    .html(function () {
                        return [d, data[d]];
                    })



    });



})

// the below function will allow the workspace texts to drag and drop.
$(function(){
    $('#workspace ').sortable();
})

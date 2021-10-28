$(".btn").click(function(){

    let task = $("<div class='list'></div>")
                .text($('#movieTitle').val()+" "+$('#movieRate').val())
                .append("<button class = 'letsRemove'>Remove</button>");
    
    $('.task').append(task);

    let currentTask = $('.letsRemove');
    for(let i = 0; i < currentTask.length;i++){
        currentTask[i].onclick = function(){
            this.parentNode.remove();
        }
    }

});






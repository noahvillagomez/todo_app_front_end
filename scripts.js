$(document).ready(function(){
    $("ul").on("clicked","input[type=checkbox]", function(){
        $(this).closest("li").toggleClass("todo_at_home")
    });
    $("#buttonoftodo").click(function(){
        var todoBlock = $(this).closest("#new_todo")
        var description = todoBlock.find("#NameofTodo")
        var pomodoroEstimate = todoBlock.find("#numberofpomodoro")
        
        $("ul").append("<li class='todo_at_home'> <input type='checkbox'/>" + description.val() + "<span class='Pomodoro_estimate'>" + pomodoroEstimate.val() + " Pomodoros</span> </li>")
    
        description.val("")
        pomodoroEstimate.val("")
    });
});
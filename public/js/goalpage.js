

$(document).ready(function () {
    console.log(user1);
    console.log(user2);
    console.log(goal1);
    console.log(goal2);
    // add the two users names to the title of the page
    var currentuser = user1;
    var currentgoal = {};
    var otheruser = {};
    var othergoal = {};
    if (currentuser === user1){
        otheruser = user2;
        currentgoal = goal1;
        othergoal = goal2;
    }else{
        otheruser = user1;
        othergoal = goal1;
        currentgoal = goal2;
    }

    var comments = [
        {
            user: currentuser.username,
            comment: "great job otheruser!"
        },
        {
            user: otheruser.username,
            comment: "great job ellie!"
        }
    ]

    //delete once lastcomplete date is added
    currentgoal.lastcompletedate = '2018-12-17';
    othergoal.lastcompletedate = '2018-12-19';
    
    function createdate() {
        var today = new Date().toJSON().slice(0, 10);
        console.log(today);
        return today;
    }
    function checkcomplete() {
        var today = createdate();
        console.log(today);
        if (currentgoal.lastcompletedate === today) {
            $("#completeuser1").text("you completed");
            $("#completeuser1").css("background-color", "grey");
        }
        if (othergoal.lastcompletedate === today) {
            $("#completeuser2").text(otheruser.username + " completed");
            $("#completeuser2").css("background-color", "grey");
        }
    }

    checkcomplete();

    $("#firstusergoal").text(currentuser.username + " wants to " + currentgoal.descript);
    $("#secondusergoal").text(otheruser.username + " wants to " + othergoal.descript);
    $("#user1image").attr("src", "/images/girl.png");
    $("#user2image").attr("src", "/images/girl.png");

//delete when database is updated
    currentgoal.progress = 5;
    othergoal.progress = 4;

    $("#user1slider").ionRangeSlider({
        min: 0,
        max: (new Date(currentgoal.end_date.replace(/-/g,'/')) - new Date(currentgoal.start_date.replace(/-/g,'/')))/(1000*60*60*24),
        from: currentgoal.progress
    });

    $("#user2slider").ionRangeSlider({
        min: 0,
        max: (new Date(othergoal.end_date.replace(/-/g,'/')) - new Date(othergoal.start_date.replace(/-/g,'/')))/(1000*60*60*24),
        from: othergoal.progress
    });

    let my_range = $("#user1slider").data("ionRangeSlider");
    // let my_range2 = $("#user2slider").data("ionRangeSlider");

    $(".completebutton").click(function (event) {
        if (currentgoal.lastcompletedate !== createdate() && event.currentTarget.id == "completeuser1") {
            currentgoal.progress += 1;
            currentgoal.lastcompletedate = createdate();
            my_range.update({
                from: currentgoal.progress
            });
            $("#completeuser1").text("completed");
            $("#completeuser1").css("background-color", "grey");
        } else if (event.currentTarget.id !== "completeuser1") {
            alert("you can't complete your partners' goal!")
        } else {
            alert("already completed for today!");
        }
    });

    $("#commentsubmit").click(function () {
        comments.push({
            user: currentuser.username,
            comment: $("#commenttext").val()
        })
        refreshcomments();
        $("#commenttext").val('');
    });

    function refreshcomments() {
        $("#comments").empty();
        let x = comments.length - 1;
        while (x >= 0) {
            $("#comments").append("<div class='comment'>" + comments[x].user + " says: " + comments[x].comment + "<p id='commentdate'>12/18/2018</p></div>");
            x--;
        }
    }
    refreshcomments();


});
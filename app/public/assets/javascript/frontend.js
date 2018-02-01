$("#submit").on("click", function (event) {
    event.preventDefault();

    var newFriend = {
        name: $("#friendName").val().trim(),
        photo: $("#friendPhoto").val().trim(),
        scores: [$("#ques1").val().trim(), $("#ques2").val().trim(), $("#ques3").val().trim(),
        $("#ques4").val().trim(), $("#ques5").val().trim(), $("#ques6").val().trim(),
        $("#ques7").val().trim(), $("#ques8").val().trim(), $("#ques9").val().trim(),
        $("#ques10").val().trim()]
    };
    console.log(newFriend);

    $.post("/api/friends", newFriend,
        function (data) {

            $("#friendName").val("");
            $("#friendPhoto").val("");
            $("#ques1").val("");
            $("#ques2").val("");
            $("#ques3").val("");
            $("#ques4").val("");
            $("#ques5").val("");
            $("#ques6").val("");
            $("#ques7").val("");
            $("#ques8").val("");
            $("#ques9").val("");
            $("#ques10").val("");
        });
});
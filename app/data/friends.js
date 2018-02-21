


var newFriend = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

var friends = [
    {
    name: "Tom",
    photo: "/photos/myspace-tom.jpg",
    scores: [
        "2",
        "3",
        "4",
        "2",
        "4",
        "5",
        "1",
        "2",
        "3",
        "3"
    ]},
    {   
    name: "Lisa Kolinski",
    photo: "img",
    scores: [
        "2",
        "2",
        "4",
        "4",
        "4",
        "2",
        "2",
        "2",
        "4",
        "4"
    ]},
    {
    name: "Jenny Payne",
    photo: "img",
    scores: [
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1",
        "1"
    ]},
    {
    name: "Ali Gitlow",
    photo: "img",
    scores: [
        "3",
        "1",
        "3",
        "5",
        "5",
        "2",
        "1",
        "3",
        "2",
        "1"
    ]},
{
    name: "Nikki Edwards",
    photo: "img",
    scores: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "5",
        "4",
        "3",
        "2",
        "1"
    ]},
    {
    name: "Marcus Figerola",
    photo: "img",
    scores: [
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5",
        "5"
    ]},
    {
    name: "Robby Hunter",
    photo: "img",
    scores: [
        "1",
        "1",
        "2",
        "3",
        "5",
        "1",
        "1",
        "2",
        "3",
        "5"
    ]}
];

module.exports = friends;
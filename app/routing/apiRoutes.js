
// app.get("/reservation", function (req, res) {
//     res.json(reservation);
// });

// app.get("/waitlist", function (req, res) {
//     res.json(waitList);
// });

//Creates new friend - takes in JSON input from client 
app.post("/api/new", function(req, res) {
    var newFriend = req.body;
    var friends = true;
    friends.push(newFriend);
        res.json(friends);
});
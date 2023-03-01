let socket = io(); //send a request to the server // io is a method in that library
socket.on("connect", () => {
    console.log(`connected to the server with Socket id ${socket.id}`);

    // socket.emit("createMessage", ({
    //     from: "APPVENTUREZ",
    //     Date: Date.now()
    // }))

    socket.on("newMessage", (message) => {
        console.log(`New Message From server ${JSON.stringify(message)}`);
    })
})
socket.on("disconnect", () => {
    console.log("disconected from the server with socket id");
})

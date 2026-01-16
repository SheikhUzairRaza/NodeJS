 Creating a UDP Server in Node.js

**🔹 Step 1: Import the dgram Module**

In Node.js, the dgram module is used for UDP communication.

import dgram from \"node:dgram\"; 

const socket = dgram.createSocket(\"udp4\"); // \"udp4\" for IPv4

**🔹 Step 2: Listening for Messages (UDP Server)**

Whenever any device sends a message, the message event is triggered.

socket.on(\"message\", (msg, rinfo) =\> { 

console.log(\"Message inbuffer:\", msg); 

console.log(\"Message in string:\", msg.toString());
console.log(\"Remote device info:\", rinfo); });

msg → the actual message (in Buffer format)

rinfo → information about the sender (IP address, port, size, etc.)

**🔹 Step 3: Binding the Server to a Port**

To create a UDP server, you must bind it to a port.

socket.bind({ port: 4000 }, () =\> { console.log(\"Server listening
on\", socket.address()); });

⚠️ This is not directly accessible in the browser because browsers do
not support UDP.

**🔹 Step 4: Sending a Message (UDP Client)**

If you don't want to create a server and just want to send a message to
another device, use socket.send().

socket.send(\"Hi from Lappy\", 3000, \"192.168.1.3\");

\"Hi from Lappy\" → message

3000 → mobile app's server port

\"192.168.1.3\" → mobile's IP address (on the local network)

**🔹 Working Example (Scenario)**

Your laptop is running the client code.

Your phone has a UDP Server app running on port 3000.

When you send a message from the laptop:

Message Received from 192.168.1.9:34688 \< \"Hi from Lappy\"

This message appears in the phone's app.

**✅ Summary**

If you want to create a server → use bind()

If you want to send a message to another device → use send()

UDP is a connectionless protocol → you only send messages; no connection
is established.

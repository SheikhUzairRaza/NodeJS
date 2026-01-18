# Socket in Networking

## Definition
A **socket** is an **endpoint** for sending and receiving data over a network.  
In the case of **UDP (User Datagram Protocol)**, it is **connectionless**, meaning there is **no handshake or persistent connection**. Data is sent in a **fire-and-forget manner** 🚀.

---

## How UDP Sockets Work

### 🖥️ Server Side
1. **Create a socket**  
2. **Bind** the socket to a specific **IP + Port**  
3. **Wait for incoming data** (receive messages)

### 📱 Client Side
1. **Create a socket**  
2. **Send data** to the server's **IP + Port**

---

## 🔑 UDP Socket Structure
A UDP socket is identified by:

- **Source IP : Port** → Where the data is coming from  
- **Destination IP : Port** → Where the data is going  

This information ensures that the system knows **where to send the message** and **where it came from**.

---

## ⚡ Summary
- A **socket** is a **network communication endpoint**.  
- **UDP sockets** are:
  - **Lightweight**  
  - **Connectionless**  
  - **Fast**, making them ideal for:
    - **Gaming** 🎮  
    - **Video streaming** 📺  
    - **VoIP / calls** 📞

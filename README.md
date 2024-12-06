# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js applications where a long-running operation in the request handler causes the server to become unresponsive.  The event loop is blocked, preventing the server from handling other requests.

## Bug

The `bug.js` file contains a Node.js server with a request handler that performs a CPU-intensive loop. This blocks the event loop, making the server unresponsive to new requests.

## Solution

The `bugSolution.js` file shows how to address this problem by using asynchronous operations and worker threads. This prevents the event loop from blocking and allows the server to remain responsive.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Open your browser and access `http://localhost:3000/`. You will notice that the server responds very slowly or not at all.
4. Now run `node bugSolution.js`, and you will see a noticeable difference in responsiveness. 

## Technologies Used

* Node.js
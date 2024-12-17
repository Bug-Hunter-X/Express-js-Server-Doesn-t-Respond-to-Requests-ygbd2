# Express.js Server Doesn't Respond to Requests

This repository demonstrates a common error in Express.js applications where the server receives requests but fails to send a response back to the client. This can happen when the `res.send()` or `res.end()` method is missing from the request handler.

## Bug

The `bug.js` file contains the buggy code. The server starts successfully, but any request to the '/' route will result in a hanging connection. The server logs a message indicating that the request was received, but the client will not receive a response.

## Solution

The `bugSolution.js` file provides the corrected code. The `res.send()` method is added to send a simple response to the client, resolving the issue.

## How to Reproduce

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Attempt to access `http://localhost:3000/` in a web browser or using `curl`.
5. Observe that the browser/curl hangs or times out.
6. Run `node bugSolution.js`. 
7. Access `http://localhost:3000/` again. You will now receive a response.
const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        // Serve the HTML form
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h2>Fill the Form</h2>
            <form action="/submit" method="POST">
                <label>Name:</label>
                <input type="text" name="name" required><br><br>

                <label>Number:</label>
                <input type="text" name="number" required><br><br>

                <label>Age:</label>
                <input type="number" name="age" required><br><br>

                <label>JLU ID:</label>
                <input type="text" name="jlu_id" required><br><br>

                <button type="submit">Submit</button>
            </form>
        `);
    } else if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        // Collect form data
        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = qs.parse(body);

            // Display the submitted data
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                <h2>Form Submitted Successfully</h2>
                <p><b>Name:</b> ${formData.name}</p>
                <p><b>Number:</b> ${formData.number}</p>
                <p><b>Age:</b> ${formData.age}</p>
                <p><b>JLU ID:</b> ${formData.jlu_id}</p>
                <a href="/">Go Back</a>
            `);
        });
    } else {
        // Handle 404 Not Found
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h2>404 Not Found</h2>");
    }
});

// Start the server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

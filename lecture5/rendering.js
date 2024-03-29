/*
Rendering a website refers to the process of displaying content
on a web page. There are several methods to render websites,
each with its own advantages and use cases.
*/

//---------
// 1. Static Page Rendering
// Static pages are the simplest form of web pages.
// The HTML file is written and stored as is on the server.
// When a user requests the page, the server sends
// the file without any changes. These pages are fast and easy to host.

// HTML Example for Static Page
/*
<!DOCTYPE html>
<html>
    <head>
        <title>My Static Page</title>
    </head>
    <body>
        <h1>Welcome to My Static Page</h1>
        <p>This is a paragraph on a static web page.</p>
    </body>
</html>
*/

//---------
//2. Server-Side Rendering (SSR)
/*
In server-side rendering, the HTML is dynamically
generated on the server for each request.
It often involves fetching data, compiling a template with this data, and then sending the resulting HTML to the client. This approach is great for SEO and initial page load times.
*/

//JavaScript Example for SSR (Node.js with Express)
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My SSR Page</title>
        </head>
        <body>
            <h1>Welcome to My Server-Side Rendered Page</h1>
            <p>This page was generated on the server.</p>
        </body>
        </html>
    `);
});

app.listen(3000, () => console.log("Server is running on port 3000"));

//---------
// 3. Client-Side Rendering (CSR)
// With client-side rendering, the server sends a minimal HTML document
// with a JavaScript file.
// When the browser executes the JavaScript, it renders
// the content on the page.
// This approach is often used
// in single-page applications (SPAs) where the
// page does not reload when navigating.

// JavaScript Example for CSR
// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
//     <title>My CSR Page</title>
// </head>
// <body>
//     <div id="app"></div>
//     <script>
//         document.getElementById('app').innerHTML = `
//             <h1>Welcome to My Client-Side Rendered Page</h1>
//             <p>This content was generated by JavaScript.</p>
//         `;
//     </script>
// </body>
// </html>
// Each method has its use case:

// Static pages are best for content that doesn't change often and is the same for every user.
// Server-side rendering is good for dynamic content and SEO, as the content is ready when the page loads.
// Client-side rendering is ideal for interactive web applications where the user experience is similar to a desktop application.

import express from "express";

const app = express();

app.post("/", (_, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            background-color: #007BFF;
            color: white;
            padding: 1rem 0;
            text-align: center;
        }

        nav {
            background-color: #f4f4f4;
            padding: 1rem;
            text-align: center;
        }

        nav a {
            margin: 0 1rem;
            text-decoration: none;
            color: #333;
        }

        nav a:hover {
            color: #007BFF;
        }

        main {
            padding: 2rem;
            text-align: center;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>
    <main>
        <h2>About Us</h2>
        <p>This is a simple website created to display basic content using HTML and CSS.</p>
    </main>
    <footer>
        &copy; 2024 Simple Website. All Rights Reserved.
    </footer>
</body>
</html>
`;
  res.send(html);
});

app.get("/shubik", (_, res) => {
  res.send("Shubik boka");
});

app.listen(3000, () => {
  console.log(`Server is listening at port 3000`);
});

export default function Blog() {
  return (
    <>
      <head>
        <title>My Blog</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <main>
          <h1 className="page-title">My Blog</h1>
          <div id="blog-container"></div>
        </main>
        <footer className="footer">© 2025 | ALL RIGHTS RESERVED</footer>

        <script src="src/blog.js"></script>
      </body>
    </>
  );
}

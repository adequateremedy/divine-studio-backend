import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  if (parsed.pathname === "/api/auth") {
    const redirect =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=YOUR_CLIENT_ID" +
      "&redirect_uri=YOUR_REDIRECT_URL" +
      "&response_type=code" +
      "&scope=openid%20email%20profile";

    res.writeHead(302, { Location: redirect });
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Divine Studio backend is running.");
});

server.listen(3000);

import { db } from "./firebase.js";
import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);

  if (parsed.pathname === "/api/auth") {
    const redirect =
      "https://accounts.google.com/o/oauth2/v2/auth" +
      "?client_id=858234539271-abrtqgrgvlnpuavojtftp95hcqanqkql.apps.googleusercontent.com" +
      "&redirect_uri=https://sites.google.com/view/ddse-divine-studio/screen-2-platform-selection-screen" +
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

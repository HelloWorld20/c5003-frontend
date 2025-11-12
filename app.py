from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from functools import partial
from pathlib import Path
from urllib.parse import urlsplit

DIST_DIR = Path(__file__).resolve().parent / "dist"
PORT = 9527

class ReusableTCPServer(TCPServer):
    allow_reuse_address = True

class SPAHandler(SimpleHTTPRequestHandler):
    def _requested_file_exists(self):
        request_path = urlsplit(self.path).path
        directory = Path(getattr(self, "directory", "."))
        full_path = (directory / request_path.lstrip("/")).resolve()
        return full_path.exists()

    def do_GET(self):
        if not self._requested_file_exists():
            self.path = "/index.html"
        return super().do_GET()

    def do_HEAD(self):
        if not self._requested_file_exists():
            self.path = "/index.html"
        return super().do_HEAD()

def create_handler(directory):
    return partial(SPAHandler, directory=str(directory.resolve()))

def run_server(port=PORT, directory=DIST_DIR):
    if not directory.exists():
        raise FileNotFoundError(f"静态目录不存在: {directory}")

    handler_cls = create_handler(directory)
    with ReusableTCPServer(("127.0.0.1", port), handler_cls) as httpd:
        print(f"run at http://localhost:{port}")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()

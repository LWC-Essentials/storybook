# Enabling SSL

This project comes with self-signing certificates for the domain: `localhost`, to use with a local development environment.
Credit to this SO thread: https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout cert.key -out cert.pem -config req.cnf -sha256
```

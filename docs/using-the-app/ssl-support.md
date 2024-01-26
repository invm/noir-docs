---
sidebar_position: 3
description: 'SSL Support'
---

# 🔒 SSL Support

Noir has the ability to encrypt the db connection and transfer the data in an encrypted manner

:::tip
By default, Noir will prefer to establish a secure connection and will trust the server certificate, if you do not want that behavior for some reason, select `disable` ssl mode when creating a new connection.
:::


## SSL modes

`Disable` - connection will be established without tls.
`Prefer` - if the server does not support tls, the connection will continue without tls.
`Require` - requires the server to provide a valid ssl certificate.


## Certificates

Providing certificates automatically attaches them when connecting to a database.

### Postgresql

Connecting to Postgresql is available with CA root certificate, client certificate and client key

### Mysql

Connecting to Mysql is available with CA root certificate and client p12 certificate.

Convert a client cert and key to p12 with:

```bash
openssl pkcs12 -export -legacy -in client.pem -inkey client.key -out client.p12
```


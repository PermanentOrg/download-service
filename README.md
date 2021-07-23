![unit tests](https://github.com/PermanentOrg/download-service/workflows/unit%20tests/badge.svg)
# Permanent.org download Service

The download service is responsible for handling download requests.

## Structure

```
- docs         // API documentation
- src
|- controllers // maps between routes to services
|- routes      // endpoint definitions
|- services    // business logic
```

## Usage

1. Install npm packages.

```
npm install
```

2. Configure Sentry

If you want to use Sentry, you must pass environment variables containing the [Sentry DSN]() and the [Sentry environment](https://docs.sentry.io/product/sentry-basics/environments/) that you will use for this project.

**.env**
```
export SENTRY_DSN="https://your@dsn.ingest.sentry.io/here"
export SENTRY_ENVIRONMENT=local
```

3. Start the project.

```
npm start
```

4. Check health.

```
curl localhost:3000/api/health
```

Should output:

```
{"status":"available","message":"OK"}
```

## Endpoints

### GET /api/health
#### Input
No inputs.

#### Output
Returns a health check.

- `status`: either `available` or `unavailable`.
- `message`: a more detailed explanation about the health status.

## Contributing

Contributors to this repository agree to adhere to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). To report violations, get in touch with engineers@permanent.org.

## Security

Found a vulnerability? Report this and any other security concerns to engineers@permanent.org.

## License

This code is free software licensed as [AGPLv3](LICENSE), or at your
option, any final, later version published by the Free Software
Foundation.

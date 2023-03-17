<div style="display: flex; justify-content: center;">
  <img src="https://i.imgur.com/bjozQJd.png" style="width: 350px;"></img>
</div>

## About

osu.js is an unofficial Javascript and Typescript SDK for the browser-facing portion of [osu!](https://osu.ppy.sh/home) with type safety in mind, with support for both versions of the API. It includes some extra utilities as well.

## Installation

```bash
# npm
npm i osu.js
# yarn
yarn add osu.js
# pnpm
pnpm add osu.js
```

## Quickstart

```js
import { Client, LegacyClient } from 'osu.js';

// Client for the current API (API v2)
const client = new Client('OAUTH ACCESS TOKEN');
// Client for the legacy API (API v1)
const legacy = new LegacyClient('API KEY');

// Get a user

// API v2
let v2User = await client.users.getUser(14544646, {
  urlParams: {
    mode: 'osu'
  }
});

// API v1
let v1User = await legacy.getUser({
  u: 14544646,
  m: 'osu'
});
```

## Coverage

osu.js has 100% coverage over the legacy API.

For the current API, all documented endpoints with a `GET` request have been implemented and tested. All endpoints with `POST` and `PATCH` requests have been implemented, but most aren't tested. None of the undocumented endpoints have been implemented.

The current API is up to date with February 17th, 2023's (2023-02-17) [breaking changes](https://osu.ppy.sh/docs/index.html#breaking-changes).

## Links

### Project

- [Documentation]()
- [Github](https://github.com/L-Mario564/osu.js)
- [npm]()

### Other

- [Legacy API Documentation](https://github.com/ppy/osu-api/wiki)
- [Current API Documentation](https://osu.ppy.sh/docs/index.html)

## Contributing

### Issues

Before filing an issue, make sure it hasn't already been reported and make sure it doesn't have a documented solution.

### Pull Requests

When filing a pull request, describe why it was created; if it's a bug fix, describe what issue it solves; if it's a new feature implementation, describe how it could enhance this library; so on and so forth.

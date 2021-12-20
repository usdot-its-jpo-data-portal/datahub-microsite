# JQuery for Node

For jQuery to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as jsDOM. 

This library mocks the window with the one provided by jsDOM, making available Jquery (3.3.1) in node, for testing or parsing purposes.

### Install

To include jQuery in Node, install with npm:

```bash
npm install jquery-jsdom
```

jQuery (3.3.1) and jsDOM are already included as dependencies and do *not* need to be included separately.

## Usage

### Typescript

```ts
import $ from 'jquery-jsdom';

$("<a>DOM</a>").html(); // "DOM"
```

### Javascript

```ts
const $ = require('jquery-jsdom');

$("<a>DOM</a>").html(); // "DOM"
```
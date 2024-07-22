# Form.io contrib components library

This module contains contributed components for use with Form.io. Any code within this library should be considered examples, which may be outdated. While these serve as an example for how components have been extended, it is not intended for use within a runtime application. 

## Installation
To install this library, do the following.

```
npm install --save @formio/contrib
```

## Usage

```javascript
import { Formio } from 'formiojs';
import FormioContrib from '@formio/contrib';
Formio.use(FormioContrib);
```

You can also include this library within the DOM of your application like the following.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.css">
<script type="text/javascript">
    Formio.use(FormioContrib);
</script>
```

Or you can use the **formio-contrib.use.min.js** file which automatically adds the ```Formio.use``` method.

```html
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.use.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@formio/contrib@latest/dist/formio-contrib.css">
```

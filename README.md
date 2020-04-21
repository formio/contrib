# Form.io contrib components library

This module contains contributed components for use with Form.io. It also serves as a good example on how you can
create your very own custom components library that can be used with Form.io platform.

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

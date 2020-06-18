# Arengu Forms for React

This React library allows you to easily embed [Arengu Forms](https://www.arengu.com) into your React application.

## Install

```shell
npm install --save react-arengu-forms
```

## Getting started

This library will load into your app our [JavaScript SDK](https://github.com/arengu/forms-js-sdk) asynchronously, so it won’t affect your website load speed.

## Usage

To use this library, you have to add our SDK to your `index.html`.

```html
<script async src="https://sdk.arengu.com/forms.js"></script>
```

And import `ArenguForm` component.

### Example of basic usage

```jsx
import React from "react"
import { ArenguForm } from "react-arengu-forms"

const IndexPage = () => (
  <div>
    <ArenguForm id="123456789" />
  </div>
)

export default IndexPage
```

### Example of usage with `hiddenFields` prop

```jsx
import React from "react"
import { ArenguForm } from "react-arengu-forms"

const IndexPage = () => (
  <div>
    <ArenguForm
      id="123456789"
      hiddenFields={[
        {
          key: 'userId',
          value: '12345',
        },
        {
          key: 'source',
          value: 'anyString',
        },
      ]}
    />
  </div>
)

export default IndexPage
```

## ArenguForm Props

| prop                      | type   | description                                                                        |
| ------------------------- | ------ | ---------------------------------------------------------------------------------- |
| id *(required)*           | string | The **Form ID** of your form. You can find it in your form settings or share page. |
| hiddenFields *(optional)* | array  | `Array of objects` with `key` and `value` properties |

## License
This repository is under a MIT license.
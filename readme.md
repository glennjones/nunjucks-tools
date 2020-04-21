# Nunjucks Tools

A set of simple tools build to help convert other templates types into nunjucks

## Installation

```
npm i nunjucks-tools
```

## Usage

```js
const Nunjucks = require('nunjucks');
const NunjucksTools = require('nunjucks-tools');
const env = new Nunjucks.Environment();

env.addExtension('with', new NunjucksTools.with(env));
env.addExtension('withInclude', new NunjucksTools.withInclude(env));

````

### with
```
{% with obj.size, as='image' %}
   with: {{ image.width }}
{% endwith %}
```

### includeWith
```
{% includeWith "template.njk", with={
    x: 5,
    y: 4
} %}
```


## Issues
If you find any issue please file here on github and I will try and fix them.
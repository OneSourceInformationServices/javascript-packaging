# javascript-packaging

This package provides a packaging capability for javascript code. The intention is
to package javascript build output before pushing it to a maven artifact repository.

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](http://nodejs.org/) (with NPM)

## Installation

* `npm install --save-dev javascript-packaging`
* Modify your package.json to include
````
"scripts": {
  "package": "package --name <name> --source-path <path> --output-path <path>"
}
````

## Running / Development

* `npm run package`

### Building

No build is defined for this package.

### Deploying

TBD

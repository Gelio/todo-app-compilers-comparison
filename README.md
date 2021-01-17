# JS/TS compilers comparison

This repository contains a Todo app written in React. It is used to compare different JS/TS
compilers/bundlers:

- tsc
- [babel](https://babeljs.io/)
- [swc](https://swc.rs/)
- [esbuild](https://esbuild.github.io/)
- [snowpack](https://www.snowpack.dev/) (check out the `snowpack` branch)

## Technologies used

- React
- Immer
- TailwindCSS
- Recoil

## Installation

Run

```sh
npm install
```

## Building

To build the project, set the `TS_COMPILER` environment variable to one of:

- `babel`
- `ts`
- `swc`
- `esbuild`

and run:

```sh
npm run build
```

For a standalone run of esbuild, run:

```sh
npm run esbuild:prod
```

## Development

To run the app in development mode, set the same `TS_COMPILER` variable and run:

```sh
npm run start
```

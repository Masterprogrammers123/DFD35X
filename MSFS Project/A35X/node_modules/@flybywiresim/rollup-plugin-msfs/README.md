# <img src="https://raw.githubusercontent.com/flybywiresim/fbw-branding/master/svg/FBW-Logo.svg" placeholder="FlyByWire" width="400"/>


[![Discord](https://img.shields.io/discord/738864299392630914.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/UjzuHMU)

[![GitHub latest release version](https://img.shields.io/github/v/release/flybywiresim/rollup-plugin-msfs.svg?style=flat)](https://github.com/flybywiresim/rollup-plugin-msfs/releases/latest)
[![Github All Releases download count](https://img.shields.io/github/downloads/flybywiresim/rollup-plugin-msfs/total.svg?style=flat)](https://github.com/flybywiresim/rollup-plugin-msfs/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/flybywiresim/rollup-plugin-msfs.svg?style=flat)](https://github.com/flybywiresim/rollup-plugin-msfs/graphs/contributors)

## About

Rollup plugin for bundling Microsoft Flight Simulator HTML instruments

## Configuration

```ts
{
    name: string, // Name of instrument
    config: { index: string, isInteractive: boolean }, // Instrument configuration
    getCssBundle: () => string, // Function to obtain the instrument CSS bundle contents
    outputDir: string, // Output directory for instrument files
}
```

## Example usage

```js
const template = require('@flybywiresim/rollup-plugin-msfs');

/* ... */

    template({
        name,
        config,
        getCssBundle() {
            return fs.readFileSync(`${TMPDIR}/${name}-gen.css`).toString();
        },
        outputDir: `${__dirname}/../../A32NX/html_ui/Pages/VCockpit/Instruments/generated`,
    }),
}
```

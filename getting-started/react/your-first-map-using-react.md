## Overview

FusionCharts is a JavaScript charting library that enables you to create interactive charts, gauges, maps and dashboards in JavaScript. We have built a simple and lightweight **React** component which provides bindings for **FusionCharts**. The `react-fusioncharts` component allows you to easily add rich and interactive charts to any **React** project. 

In this page, we'll see how to install FusionCharts and render a map using the `react-fusionCharts` component.

## Installation

Install **FusionCharts** and the `react-fusioncharts` component using any of the following methods:

**Local files:**

To install the **FusionCharts** package and the `react-fusioncharts` component follow the steps below:

1. Include the [React ](https://reactjs.org/)core library.

2. Include [Babel ](https://babeljs.io/)for [JSX ](https://unpkg.com/babel-standalone/babel.min.js) transpiling.

1. Include the **FusionCharts** JavaScript files which can be downloaded from [here](https://www.fusioncharts.com/download/fusioncharts-suite).

3. Include the FusionMap renderer. 

4. Include the map definition file.

5. Include the `react-fusioncharts` module.

6. Include the FusionCharts theme file to apply the style to the charts.

The consolidated code is shown below:

```HTML

<head>
   
    <!-- Step 1 - Including react -->
    <script type="text/javascript" src="path/to/local/react.js"></script>
    <script type="text/javascript" src="path/to/local/react-dom.js"></script>
    <!-- Step 2 - Including Babel for JSX transpiling -->
    <script type="text/javascript" src="path/to/local/babel-core.js"></script>
    <!-- Step 3 - Including the fusioncharts core library -->
    <script type="text/javascript" src="path/to/local/fusioncharts.js"></script>

<!-- Step 4 - Including the map renderer file -->

<script type="text/javascript" src="path/to/local/fusioncharts.maps.js"></script>

<!-- Step 5 - Including the map definition file -->

<script type="text/javascript" src="path/to/local/maps/fusioncharts.world.js"></script>

    <!-- Step 6 - Including the react-fusioncharts component -->
    <script type="text/javascript" src="path/to/local/react-fusioncharts.js"></script>
    <!-- Step 7 - Including the fusion theme -->
    <script type="text/javascript" src="path/to/local/themes/fusioncharts.theme.fusion.js"></script>
</head>

```

**Using CDN links:**

To install react-fusioncharts create an HTML file and follow the steps below:

1. Include the [React ](https://reactjs.org/)core library.

2. Include [Babel ](https://babeljs.io/)for [JSX ](https://unpkg.com/babel-standalone/babel.min.js) transpiling.

3. Include the **FusionCharts** package.

4. Include the FusionCharts map renderer. 

5. Include the map definition file.

6. Include the `react-fusioncharts` module.

7. Include the FusionCharts theme file to apply the style to the charts.

The consolidated code is shown below:

```HTML

<head>

    <!-- Step 1 - Including react -->
    <script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script type="text/javascript"

src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- Step 2 - Including Babel for JSX transpiling -->
    <script type="text/javascript" src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <!-- Step 3 Including the fusioncharts core library -->
    <script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**"></script>

<!-- Step 4 - Including the map renderer file -->

<script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.maps.js](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**"></script>

<!-- Step 5 - Including the map definition file -->

<script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**fusioncharts.world.js"></script>
    <!-- Step 6 - Including the react-fusioncharts component -->
    <script type="text/javascript" src="**https://unpkg.com/react-fusioncharts@2.0.1/dist/react-fusioncharts.min.js**"></script>
    <!-- Step 7 - Including the fusion theme -->
    <script type="text/javascript" src="**[http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.theme.fusion.js](http://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js)**"></script>
</head>

```

**Using npm**

To install react-fusioncharts via npm follow the steps below:

1. Install the **react-fusioncharts** module

```
$ npm install react-fusioncharts --save
```

2. Install the **fusioncharts** package

```
$ npm install fusioncharts --save
```

## Create you First map

In this section, we will create a visualization using the **World Map** showing the average annual population growth. 

{% embed_chart getting-started-your-first-map.js %}

The data for this chart is represented in the table below:


State|Entity Name|Value||
-|-|-|-
North America|NA|82||
South America|SA|2.04||
Asia|AS|1.78||
Europe|EU|40||
Africa|AF|2.58||
Australia|AU|1.30||


## Convert tabular data into JSON format

Now that you have the tabular data ready, it's time to convert it into JSON format, as FusionCharts accepts data in JSON or XML format.

In the above table, the column **Entity Name** represents the geographical entities represented in the map, whose full names are given in the **State** column.

However, when you convert the data into a format (JSON or XML) supported by FusionCharts, the entities are denoted by the `id` key in the `data` object.

For any map visualization, it is important to provide the correct value for the `id` keys. For example, if you want to denote Africa, the value for the corresponding `id` must be `AF` and not `AFR`.

We have a detailed [Map Specification Sheets ](https://www.fusioncharts.com/dev/maps/spec-sheets/world)for all the maps that can be rendered using FusionCharts, where you can find the correct `id` of the maps you want to create.

 In this example, we will use the JSON format as shown below:

```JSON

{
    // Map Configuration
    "chart": {
        "caption": "Average Annual Population Growth",
        "subcaption": " 1955-2015",
        "numbersuffix": "%",
        "includevalueinlabels": "1",
        ...
    },
    // Aesthetics; ranges synced with the slider
    "colorrange": {
        "minvalue": "0",
        "code": "#FFE0B2",
        "gradient": "1",
        "color": [{
            "minvalue": "0.5",
            "maxvalue": "1.0",
            "color": "#FFD74D"
        }, {
            "minvalue": "1.0",
            "maxvalue": "2.0",
            "color": "#FB8C00"
        }, …

]
    },
    // Source data as JSON --> id represents countries of world.
    "data": [{
        "id": "NA",
        "value": ".82",
        "showLabel": "1"
    }, {
        "id": "SA",
        "value": "2.04",
        "showLabel": "1"
    }, {
        "id": "AS",
        "value": "1.78",
        "showLabel": "1"
    }, …

}

```

In the above JSON data: 

* Create the `chart` object to define the elements of the map.

* Create the `colorRange` array to set the color associated with the specific range of values.

* Specify the `min` and `max` value within the `color` array under the `colorRange` array.

* Create the `data` array to define the id of the continents and their corresponding values along with configurations.

The chart object and the respective arrays contain a set of key-value pairs known as **attributes**. These attributes are used to set the functional and cosmetic properties of the gauge.

Now that you have converted the tabular data to JSON format, let's learn how to render the gauge.

## Render the map

To render the map follow the steps below:

1. Include **react.**

2. Include `react-fusioncharts`.

3. Include the `fusioncharts` library

4. Include the FusionMaps renderer

5. Include the map definition file

6. Include the map type.

7. Include the FusionCharts theme file to apply the style to the charts.

8. Add the map renderer, map definition and the theme as a dependency to the core.

9. Store the chart configurations as a JSON object. In this JSON object:

    * Set the gauge type as world. Each chart type is represented with a unique map alias. For World map, the alias is `world`. Find the complete list of map types with their respective alias [here](https://www.fusioncharts.com/dev/map-guide/list-of-maps).

    * Set the width and height (in pixels). 

    * Set the `dataFormat` as **json**.

    * Embed the json data as the value of the `dataSource`.

10. Create the DOM element and pass the react-fusioncharts component directly to the **ReactDOM.render()** method.

The consolidated code is given below:

```JavaScript

// Step 1 - Including react

import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component

import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

// Step 4 - Including the map renderer
import FusionMaps from 'fusioncharts/fusioncharts.maps';

// Step 5 - Including the map definition file
import World from 'fusioncharts/maps/es/fusioncharts.world';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts

ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

const chartConfigs = {
    type: 'world',
    width: '800',
    height: '5500',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1955-2015",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            ...
        },
        "colorrange": {
            "minvalue": "0",
            "code": "#FFE0B2",
            "gradient": "1",
            "color": [{
                "minvalue": "0.5",
                "maxvalue": "1.0",
                "color": "#FFD74D"
            },... 

]
        },
        "data": [{
            "id": "NA",
            "value": ".82",
            "showLabel": "1"
        }, {
            "id": "SA",
            "value": "2.04",
            "showLabel": "1"
        }, {
            "id": "AS",
            "value": "1.78",
            "showLabel": "1"
        }, …

]
    },
};
// Step 9 - Creating the DOM element to pass the react-fusioncharts component
ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);

```

That's it! Your first map using react-fusioncharts is ready.

## Render other maps 

To reduce the size of the package FusionCharts comes with only two maps, i.e., the **World** map and the **USA** map. However, FusionCharts provide 1600+ maps for you to explore. [Download](https://www.fusioncharts.com/download/map-definition-files) the map files separately if you want to save them locally. 

Let's create a map of California to show the "Web visits for a particular month" as shown below:

<Live Map>

To render the above map, first install `fusionmaps` package which contains all the map definition files as shown below:

```
$ npm install fusionmaps
```

After installing `fusionmaps` package, follow the steps to render the map:

```JavaScript

// Step 1 - Including react

import React from 'react';
import ReactDOM from 'react-dom';

// Step 2 - Including the react-fusioncharts component 

import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts/core';

// Step 4 - Including the map renderer
import FusionMaps from 'fusioncharts/fusioncharts.maps';

// Step 5 - Including the map definition file
import California from 'fusioncharts/maps/es/fusioncharts.california';

// Step 6 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 7 - Adding the map as dependency to the core fusioncharts

ReactFC.fcRoot(FusionCharts, Maps, California, FusionTheme);

// Step 8 - Creating the JSON object to store the map configurations

const chartConfigs = {
    type: 'california',
    width: '800',
    height: '5500',
    dataFormat: 'json',
    dataSource: {
        {

    type: 'maps/california',

    renderAt: 'chart-container',

    width: '700',

    height: '500',

    dataFormat: 'json',

    dataSource: {

        "chart": {

            "animation": "0",

            "showbevel": "0",

            "usehovercolor": "1",

            "canvasbordercolor": "FFFFFF",

            "bordercolor": "FFFFFF",

            "showlegend": "1",

            "legendposition": "BOTTOM",

            "legendborderalpha": "0",

            "legendbordercolor": "ffffff",

            "legendallowdrag": "0",

            "legendshadow": "0",

            "caption": "Website Visits for the month of March 2018",

            "connectorcolor": "000000",

            "fillalpha": "80",

            "hovercolor": "CCCCCC",

            "showborder": 0,

            "theme": "fusion"

        },

        "colorrange": {

            "minvalue": "0",

            "startlabel": "Low",

            "endlabel": "High",

            "code": "e44a00",

            "gradient": "1",

            "color": [{"maxvalue": "2500", "code": "f8bd19"}, {"maxvalue": "5000", "code": "6baa01"}]

        },

        "data": [{"id":"001","value":2834},{"id":"003","value":3182},{"id":"005","value":3280},{"id":"007","value":911},{"id":"009","value":292},{"id":"011","value":530},{"id":"013","value":2515},{"id":"015","value":728},{"id":"017","value":1974},{"id":"019","value":848},{"id":"021","value":3278},{"id":"023","value":4463},{"id":"025","value":1198},{"id":"027","value":378},{"id":"029","value":2610},{"id":"031","value":1200},{"id":"033","value":3820},{"id":"035","value":940},{"id":"037","value":3416},{"id":"039","value":4004},{"id":"041","value":1604},{"id":"043","value":4011},{"id":"045","value":3203},{"id":"047","value":3775},{"id":"049","value":2721},{"id":"051","value":3417},{"id":"053","value":1530},{"id":"055","value":412},{"id":"057","value":3434},{"id":"059","value":1670},{"id":"061","value":1274},{"id":"063","value":4339},{"id":"065","value":2073},{"id":"067","value":1018},{"id":"069","value":3967},{"id":"071","value":3401},{"id":"073","value":3307},{"id":"075","value":1938},{"id":"077","value":489},{"id":"079","value":3207},{"id":"081","value":2295},{"id":"083","value":2747},{"id":"085","value":1114},{"id":"087","value":3400},{"id":"089","value":784},{"id":"091","value":1673},{"id":"093","value":4274},{"id":"095","value":4509},{"id":"097","value":3862},{"id":"099","value":1356},{"id":"101","value":4126},{"id":"103","value":1314},{"id":"105","value":1807},{"id":"107","value":4026},{"id":"109","value":3456},{"id":"111","value":1393},{"id":"113","value":1500},{"id":"115","value":2218}]

    }

}


};

// Step 9 - Creating the DOM element to pass the react-fusioncharts component
ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);
```

That's it the **California** map is ready. 

## Problem rendering the chart?

In case there is an error, and you are unable to see the chart, check for the following:

* If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click here to get in touch with our support team.

* If the chart does not show up at all, but there are no JavaScript errors, check if the FusionCharts Suite XT JavaScript library has loaded correctly. You can use developer tools within your browser to see if `fusioncharts.js` was loaded. 

* If you get a **Loading Data** or **Error in loading data** message, check whether your JSON data structure is correct, or there are conflicts related to quotation marks in your code.
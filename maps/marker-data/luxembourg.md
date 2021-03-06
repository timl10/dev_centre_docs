---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Luxembourg

#### JavaScript Alias: maps/luxembourg


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-json">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "LU",
                "shapeid": "myCustomShape",
                "x": "300.46",
                "y": "586.84",
                "label": "Luxembourg"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "107.89",
                "y": "246.29",
                "label": "Wiltz"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "280.19",
                "y": "325.35",
                "label": "Diekirch"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "507.23",
                "y": "490.55",
                "label": "Mertert",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "110.93",
                "y": "639.55",
                "label": "Petange",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "117.01",
                "y": "668.94",
                "label": "Differdange"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "151.47",
                "y": "690.22",
                "label": "Esch"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "244.72",
                "y": "733.81",
                "label": "Budelange",
                "labelpos": "left"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomshape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "LU",
                "x": "300.46",
                "y": "586.84",
                "label": "Luxembourg"
            },
            {
                "id": "01",
                "x": "107.89",
                "y": "246.29",
                "label": "Wiltz"
            },
            {
                "id": "02",
                "x": "280.19",
                "y": "325.35",
                "label": "Diekirch"
            },
            {
                "id": "03",
                "x": "507.23",
                "y": "490.55",
                "label": "Mertert",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "110.93",
                "y": "639.55",
                "label": "Petange",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "117.01",
                "y": "668.94",
                "label": "Differdange"
            },
            {
                "id": "06",
                "x": "151.47",
                "y": "690.22",
                "label": "Esch"
            },
            {
                "id": "07",
                "x": "244.72",
                "y": "733.81",
                "label": "Budelange",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "LU",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>

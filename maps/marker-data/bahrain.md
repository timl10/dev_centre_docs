---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Bahrain

#### JavaScript Alias: maps/bahrain


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
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "MA",
                "shapeid": "myCustomShape",
                "x": "86.78",
                "y": "25.39",
                "label": "Manama",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "98.57",
                "y": "10.39",
                "label": "Al Muharraq",
                "labelpos": "left"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "99.64",
                "y": "35.03",
                "label": "Mina Salman",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "121.07",
                "y": "41.46",
                "label": "Sitrah",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "68.57",
                "y": "32.89",
                "label": "Jidd Hafs",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "80.35",
                "y": "57.53",
                "label": "Madinat Isa",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "76.07",
                "y": "83.25",
                "label": "Ar Rifa ash Sharqi",
                "labelpos": "top"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "82.5",
                "y": "110.03",
                "label": "Awali",
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
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "MA",
                "x": "86.78",
                "y": "25.39",
                "label": "Manama",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "98.57",
                "y": "10.39",
                "label": "Al Muharraq",
                "labelpos": "left"
            },
            {
                "id": "02",
                "x": "99.64",
                "y": "35.03",
                "label": "Mina Salman",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "121.07",
                "y": "41.46",
                "label": "Sitrah",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "68.57",
                "y": "32.89",
                "label": "Jidd Hafs",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "80.35",
                "y": "57.53",
                "label": "Madinat Isa",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "76.07",
                "y": "83.25",
                "label": "Ar Rifa ash Sharqi",
                "labelpos": "top"
            },
            {
                "id": "08",
                "x": "82.5",
                "y": "110.03",
                "label": "Awali",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "MA",
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
            },
            {
                "id": "08",
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

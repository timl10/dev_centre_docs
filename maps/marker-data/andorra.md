---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Andorra

#### JavaScript Alias: maps/andorra


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
                "id": "AL",
                "shapeid": "myCustomShape",
                "x": "142.53",
                "y": "237.09",
                "label": "Andorra la vella ",
                "labelpos": "left"
            },
            {
                "id": "EN",
                "shapeid": "newCustomShape",
                "x": "214.36",
                "y": "205.28",
                "label": "Encamp"
            },
            {
                "id": "CA",
                "shapeid": "newCustomShape",
                "x": "249.26",
                "y": "130.37",
                "label": "Canillo"
            },
            {
                "id": "CD",
                "shapeid": "newCustomShape",
                "x": "167.16",
                "y": "248.38",
                "label": "Caldea",
                "labelpos": "right"
            },
            {
                "id": "EE",
                "shapeid": "newCustomShape",
                "x": "170.24",
                "y": "267.88",
                "label": "Escaldes",
                "labelpos": "left"
            },
            {
                "id": "SC",
                "shapeid": "newCustomShape",
                "x": "142.53",
                "y": "283.27",
                "label": "Santa Coloma",
                "labelpos": "right"
            },
            {
                "id": "SJ",
                "shapeid": "newCustomShape",
                "x": "129.19",
                "y": "341.77",
                "label": "Sant Julia De Loria"
            },
            {
                "id": "OD",
                "shapeid": "newCustomShape",
                "x": "166.13",
                "y": "165.26",
                "label": "Ordino"
            },
            {
                "id": "LM",
                "shapeid": "newCustomShape",
                "x": "142.53",
                "y": "178.60",
                "label": "La Massana",
                "labelpos": "right"
            },
            {
                "id": "LC",
                "shapeid": "newCustomShape",
                "x": "132.27",
                "y": "106.77",
                "label": "La Cortinada",
                "labelpos": "left"
            },
            {
                "id": "AR",
                "shapeid": "newCustomShape",
                "x": "146.64",
                "y": "95.48",
                "label": "Arans"
            },
            {
                "id": "LL",
                "shapeid": "newCustomShape",
                "x": "170.24",
                "y": "74.96",
                "label": "Llorts"
            },
            {
                "id": "ES",
                "shapeid": "newCustomShape",
                "x": "147.66",
                "y": "41.09",
                "label": "El Serrat"
            },
            {
                "id": "AC",
                "shapeid": "newCustomShape",
                "x": "113.8",
                "y": "22.62",
                "label": "Arcalis",
                "labelpos": "left"
            },
            {
                "id": "PA",
                "shapeid": "newCustomShape",
                "x": "72.75",
                "y": "194",
                "label": "Pal"
            },
            {
                "id": "AI",
                "shapeid": "newCustomShape",
                "x": "73.78",
                "y": "129.35",
                "label": "Arinsal"
            },
            {
                "id": "ET",
                "shapeid": "newCustomShape",
                "x": "298.51",
                "y": "90.35",
                "label": "El Tarter"
            },
            {
                "id": "SO",
                "shapeid": "newCustomShape",
                "x": "325.19",
                "y": "103.69",
                "label": "Soldeu"
            },
            {
                "id": "PS",
                "shapeid": "newCustomShape",
                "x": "411.39",
                "y": "176.55",
                "label": "Pas De La Casa",
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
                "id": "AL",
                "x": "142.53",
                "y": "237.09",
                "label": "Andorra la vella ",
                "labelpos": "left"
            },
            {
                "id": "EN",
                "x": "214.36",
                "y": "205.28",
                "label": "Encamp"
            },
            {
                "id": "CA",
                "x": "249.26",
                "y": "130.37",
                "label": "Canillo"
            },
            {
                "id": "CD",
                "x": "167.16",
                "y": "248.38",
                "label": "Caldea",
                "labelpos": "right"
            },
            {
                "id": "EE",
                "x": "170.24",
                "y": "267.88",
                "label": "Escaldes",
                "labelpos": "left"
            },
            {
                "id": "SC",
                "x": "142.53",
                "y": "283.27",
                "label": "Santa Coloma",
                "labelpos": "right"
            },
            {
                "id": "SJ",
                "x": "129.19",
                "y": "341.77",
                "label": "Sant Julia De Loria"
            },
            {
                "id": "OD",
                "x": "166.13",
                "y": "165.26",
                "label": "Ordino"
            },
            {
                "id": "LM",
                "x": "142.53",
                "y": "178.60",
                "label": "La Massana",
                "labelpos": "right"
            },
            {
                "id": "LC",
                "x": "132.27",
                "y": "106.77",
                "label": "La Cortinada",
                "labelpos": "left"
            },
            {
                "id": "AR",
                "x": "146.64",
                "y": "95.48",
                "label": "Arans"
            },
            {
                "id": "LL",
                "x": "170.24",
                "y": "74.96",
                "label": "Llorts"
            },
            {
                "id": "ES",
                "x": "147.66",
                "y": "41.09",
                "label": "El Serrat"
            },
            {
                "id": "AC",
                "x": "113.8",
                "y": "22.62",
                "label": "Arcalis",
                "labelpos": "left"
            },
            {
                "id": "PA",
                "x": "72.75",
                "y": "194",
                "label": "Pal"
            },
            {
                "id": "AI",
                "x": "73.78",
                "y": "129.35",
                "label": "Arinsal"
            },
            {
                "id": "ET",
                "x": "298.51",
                "y": "90.35",
                "label": "El Tarter"
            },
            {
                "id": "SO",
                "x": "325.19",
                "y": "103.69",
                "label": "Soldeu"
            },
            {
                "id": "PS",
                "x": "411.39",
                "y": "176.55",
                "label": "Pas De La Casa",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "AL",
                "shapeid": "myCustomShape"
            },
            {
                "id": "EN",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "CD",
                "shapeid": "newCustomShape"
            },
            {
                "id": "EE",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SC",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SJ",
                "shapeid": "newCustomShape"
            },
            {
                "id": "OD",
                "shapeid": "newCustomShape"
            },
            {
                "id": "LM",
                "shapeid": "newCustomShape"
            },
            {
                "id": "LC",
                "shapeid": "newCustomShape"
            },
            {
                "id": "AR",
                "shapeid": "newCustomShape"
            },
            {
                "id": "LL",
                "shapeid": "newCustomShape"
            },
            {
                "id": "ES",
                "shapeid": "newCustomShape"
            },
            {
                "id": "AC",
                "shapeid": "newCustomShape"
            },
            {
                "id": "PA",
                "shapeid": "newCustomShape"
            },
            {
                "id": "AI",
                "shapeid": "newCustomShape"
            },
            {
                "id": "ET",
                "shapeid": "newCustomShape"
            },
            {
                "id": "SO",
                "shapeid": "newCustomShape"
            },
            {
                "id": "PS",
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

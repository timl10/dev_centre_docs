---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Lesotho

#### JavaScript Alias: maps/lesotho


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
    "data": [
        {
            "id": "LS.BE"
        },
        {
            "id": "LS.BB"
        },
        {
            "id": "LS.LE"
        },
        {
            "id": "LS.MF"
        },
        {
            "id": "LS.MS"
        },
        {
            "id": "LS.MH"
        },
        {
            "id": "LS.MK"
        },
        {
            "id": "LS.QN"
        },
        {
            "id": "LS.QT"
        },
        {
            "id": "LS.TT"
        }
    ],
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
                "x": "119.5",
                "y": "215.05",
                "label": "Maseru",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "266.27",
                "y": "89.69",
                "label": "Leribe",
                "labelpos": "right"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "169.44",
                "y": "160.01",
                "label": "Teyateyaneng",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "52.23",
                "y": "289.46",
                "label": "Mafeteng",
                "labelpos": "right"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "121.54",
                "y": "390.36",
                "label": "Mohales Hoek",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "188.81",
                "y": "465.78",
                "label": "Quthing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "435.46",
                "y": "368.96",
                "label": "Qacha's Nek",
                "labelpos": "left"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "432.4",
                "y": "260.92",
                "label": "Thaba-Tseka",
                "labelpos": "left"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "562.87",
                "y": "178.36",
                "label": "Mokhotlong",
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
    "map": {
        "animation": "0",
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "999999",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "",
        "markerradius": "",
        "legendposition": "bottom",
        "usehovercolor": "1",
        "showmarkertooltip": "1"
    },
    "data": [
        {
            "id": "LS.BE"
        },
        {
            "id": "LS.BB"
        },
        {
            "id": "LS.LE"
        },
        {
            "id": "LS.MF"
        },
        {
            "id": "LS.MS"
        },
        {
            "id": "LS.MH"
        },
        {
            "id": "LS.MK"
        },
        {
            "id": "LS.QN"
        },
        {
            "id": "LS.QT"
        },
        {
            "id": "LS.TT"
        }
    ],
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
                "x": "119.5",
                "y": "215.05",
                "label": "Maseru",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "266.27",
                "y": "89.69",
                "label": "Leribe",
                "labelpos": "right"
            },
            {
                "id": "02",
                "x": "169.44",
                "y": "160.01",
                "label": "Teyateyaneng",
                "labelpos": "bottom"
            },
            {
                "id": "03",
                "x": "52.23",
                "y": "289.46",
                "label": "Mafeteng",
                "labelpos": "right"
            },
            {
                "id": "04",
                "x": "121.54",
                "y": "390.36",
                "label": "Mohales Hoek",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "188.81",
                "y": "465.78",
                "label": "Quthing",
                "labelpos": "right"
            },
            {
                "id": "06",
                "x": "435.46",
                "y": "368.96",
                "label": "Qacha's Nek",
                "labelpos": "left"
            },
            {
                "id": "07",
                "x": "432.4",
                "y": "260.92",
                "label": "Thaba-Tseka",
                "labelpos": "left"
            },
            {
                "id": "08",
                "x": "562.87",
                "y": "178.36",
                "label": "Mokhotlong",
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

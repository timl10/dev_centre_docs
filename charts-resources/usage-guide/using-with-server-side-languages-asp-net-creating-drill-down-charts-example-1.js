{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '400',
    height: '300',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Annual Sales Summary (2010-2013)",
            "subcaption": "Click on a column to drill-down",
            "xaxisname": "Flavor",
            "yaxisname": "Amount (In USD)",
            "numberprefix": "$",
            "paletteColors": "#0075c2,#1aaf5d, #ecde5a, #3eca4e",
            "canvasbgalpha": "0",
            "canvasborderalpha": "0",
            "useplotgradientcolor": "0",
            "showplotborder": "0",
            "placevaluesinside": "1",
            "valuefontcolor": "#ffffff",
            "captionpadding": "20",
            "showaxislines": "1",
            "axislinealpha": "20",
            "divlinealpha": "20",
            "showborder": "0",
            "bgalpha": "0",
            "animation": "0"
        },
        "data": [{
            "label": "2010",
            "value": "1161000",
            "link": "newchart-xml-2010Quarters",
            "color": "008ee4"
        }, {
            "label": "2011",
            "value": "1043000",
            "link": "newchart-xml-2011Quarters",
            "color": "6baa01"
        }, {
            "label": "2012",
            "value": "1017000",
            "link": "newchart-xml-2012Quarters",
            "color": "f8bd19"
        }, {
            "label": "2013",
            "value": "1156000",
            "link": "newchart-xml-2013Quarters",
            "color": "e44a00"
        }],
        "linkeddata": [{
            "id": "2010Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2010)",
                    "subcaption": "Click on a column to drill-down",
                    "xaxisname": "Quarter",
                    "yaxisname": "Sales",
                    "numberprefix": "$",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [{
                    "label": "Q1",
                    "value": "274000",
                    "link": "newchart-xml-2010Q1",
                    "color": "008ee4"
                }, {
                    "label": "Q2",
                    "value": "270000",
                    "link": "newchart-xml-2010Q2",
                    "color": "008ee4"
                }, {
                    "label": "Q3",
                    "value": "318000",
                    "link": "newchart-xml-2010Q3",
                    "color": "008ee4"
                }, {
                    "label": "Q4",
                    "value": "299000",
                    "link": "newchart-xml-2010Q4",
                    "color": "008ee4"
                }],
                "linkeddata": [{
                    "id": "2010Q1",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the first quarter of year 2010",
                            "xaxisname": "Month",
                            "yaxisname": "Sales",
                            "numberprefix": "$",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "January",
                            "value": "110000",
                            "color": "008ee4"
                        }, {
                            "label": "February",
                            "value": "76000",
                            "color": "008ee4"
                        }, {
                            "label": "March",
                            "value": "88000",
                            "color": "008ee4"
                        }]
                    }
                }, {
                    "id": "2010Q2",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the second quarter of year 2010",
                            "xaxisname": "Month",
                            "yaxisname": "Sales",
                            "numberprefix": "$",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "April",
                            "value": "116000",
                            "color": "008ee4"
                        }, {
                            "label": "May",
                            "value": "92000",
                            "color": "008ee4"
                        }, {
                            "label": "June",
                            "value": "62000",
                            "color": "008ee4"
                        }]
                    }
                }, {
                    "id": "2010Q3",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the third quarter of year 2010",
                            "xaxisname": "Month",
                            "yaxisname": "Sales",
                            "numberprefix": "$",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "July",
                            "value": "114000",
                            "color": "008ee4"
                        }, {
                            "label": "August",
                            "value": "86000",
                            "color": "008ee4"
                        }, {
                            "label": "September",
                            "value": "118000",
                            "color": "008ee4"
                        }]
                    }
                }, {
                    "id": "2010Q4",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the fourth quarter of year 2010",
                            "xaxisname": "Month",
                            "yaxisname": "Sales",
                            "numberprefix": "$",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "October",
                            "value": "92000",
                            "color": "008ee4"
                        }, {
                            "label": "November",
                            "value": "102000",
                            "color": "008ee4"
                        }, {
                            "label": "December",
                            "value": "105000",
                            "color": "008ee4"
                        }]
                    }
                }]
            }
        }, {
            "id": "2011Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2011)",
                    "subcaption": "Click on a column to drill-down",
                    "yaxisname": "Sales",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    "numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [{
                    "label": "Q1",
                    "value": "306000",
                    "link": "newchart-xml-2011Q1",
                    "color": "6baa01"
                }, {
                    "label": "Q2",
                    "value": "203000",
                    "link": "newchart-xml-2011Q2",
                    "color": "6baa01"
                }, {
                    "label": "Q3",
                    "value": "270000",
                    "link": "newchart-xml-2011Q3",
                    "color": "6baa01"
                }, {
                    "label": "Q4",
                    "value": "264000",
                    "link": "newchart-xml-2011Q4",
                    "color": "6baa01"
                }],
                "linkeddata": [{
                    "id": "2011Q1",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the first quarter of year 2011",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "January",
                            "value": "370000",
                            "color": "6baa01"
                        }, {
                            "label": "February",
                            "value": "290000",
                            "color": "6baa01"
                        }, {
                            "label": "March",
                            "value": "320000",
                            "color": "6baa01"
                        }]
                    }
                }, {
                    "id": "2011Q2",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the second quarter of year 2011",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "April",
                            "value": "370000",
                            "color": "6baa01"
                        }, {
                            "label": "May",
                            "value": "290000",
                            "color": "6baa01"
                        }, {
                            "label": "June",
                            "value": "320000",
                            "color": "6baa01"
                        }]
                    }
                }, {
                    "id": "2011Q3",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the third quarter of year 2011",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "July",
                            "value": "370000",
                            "color": "6baa01"
                        }, {
                            "label": "August",
                            "value": "290000",
                            "color": "6baa01"
                        }, {
                            "label": "September",
                            "value": "320000",
                            "color": "6baa01"
                        }]
                    }
                }, {
                    "id": "2011Q4",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the fourth quarter of year 2011",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "October",
                            "value": "370000",
                            "color": "6baa01"
                        }, {
                            "label": "November",
                            "value": "290000",
                            "color": "6baa01"
                        }, {
                            "label": "December",
                            "value": "320000",
                            "color": "6baa01"
                        }]
                    }
                }]
            }
        }, {
            "id": "2012Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2012)",
                    "subcaption": "Click on a column to drill-down",
                    "yaxisname": "Sales",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    "numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [{
                    "label": "Q1",
                    "value": "241000",
                    "link": "newchart-xml-2012Q1",
                    "color": "f8bd19"
                }, {
                    "label": "Q2",
                    "value": "280000",
                    "link": "newchart-xml-2012Q2",
                    "color": "f8bd19"
                }, {
                    "label": "Q3",
                    "value": "255000",
                    "link": "newchart-xml-2012Q3",
                    "color": "f8bd19"
                }, {
                    "label": "Q4",
                    "value": "241000",
                    "link": "newchart-xml-2012Q4",
                    "color": "f8bd19"
                }],
                "linkeddata": [{
                    "id": "2012Q1",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the first quarter of year 2012",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "January",
                            "value": "87000",
                            "color": "f8bd19"
                        }, {
                            "label": "February",
                            "value": "89000",
                            "color": "f8bd19"
                        }, {
                            "label": "March",
                            "value": "65000",
                            "color": "f8bd19"
                        }]
                    }
                }, {
                    "id": "2012Q2",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the second quarter of year 2012",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "April",
                            "value": "130000",
                            "color": "f8bd19"
                        }, {
                            "label": "May",
                            "value": "44000",
                            "color": "f8bd19"
                        }, {
                            "label": "June",
                            "value": "106000",
                            "color": "f8bd19"
                        }]
                    }
                }, {
                    "id": "2012Q3",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the third quarter of year 2012",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "July",
                            "value": "85000",
                            "color": "f8bd19"
                        }, {
                            "label": "August",
                            "value": "103000",
                            "color": "f8bd19"
                        }, {
                            "label": "September",
                            "value": "67000",
                            "color": "f8bd19"
                        }]
                    }
                }, {
                    "id": "2012Q4",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the fourth quarter of year 2012",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "October",
                            "value": "59000",
                            "color": "f8bd19"
                        }, {
                            "label": "November",
                            "value": "69000",
                            "color": "f8bd19"
                        }, {
                            "label": "December",
                            "value": "113000",
                            "color": "f8bd19"
                        }]
                    }
                }]
            }
        }, {
            "id": "2013Quarters",
            "linkedchart": {
                "chart": {
                    "caption": "Quarterly Sales Summary (2013)",
                    "subcaption": "Click on a column to drill-down",
                    "yaxisname": "Sales",
                    "showvalues": "0",
                    "bgcolor": "FFFFFF",
                    "numberprefix": "$",
                    "xaxisname": "Year",
                    "plotgradientcolor": "",
                    "showalternatehgridcolor": "0",
                    "showplotborder": "0",
                    "divlinecolor": "CCCCCC",
                    "canvasborderalpha": "0"
                },
                "data": [{
                    "label": "Q1",
                    "value": "269000",
                    "link": "newchart-xml-2013Q1",
                    "color": "e44a00"
                }, {
                    "label": "Q2",
                    "value": "270000",
                    "link": "newchart-xml-2013Q2",
                    "color": "e44a00"
                }, {
                    "label": "Q3",
                    "value": "318000",
                    "link": "newchart-xml-2013Q3",
                    "color": "e44a00"
                }, {
                    "label": "Q4",
                    "value": "299000",
                    "link": "newchart-xml-2013Q4",
                    "color": "e44a00"
                }],
                "linkeddata": [{
                    "id": "2013Q1",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the first quarter of year 2013",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "January",
                            "value": "105000",
                            "color": "e44a00"
                        }, {
                            "label": "February",
                            "value": "76000",
                            "color": "e44a00"
                        }, {
                            "label": "March",
                            "value": "88000",
                            "color": "e44a00"
                        }]
                    }
                }, {
                    "id": "2013Q2",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the second quarter of year 2013",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "April",
                            "value": "116000",
                            "color": "e44a00"
                        }, {
                            "label": "May",
                            "value": "92000",
                            "color": "e44a00"
                        }, {
                            "label": "June",
                            "value": "62000",
                            "color": "e44a00"
                        }]
                    }
                }, {
                    "id": "2013Q3",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the third quarter of year 2013",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "July",
                            "value": "114000",
                            "color": "e44a00"
                        }, {
                            "label": "August",
                            "value": "86000",
                            "color": "e44a00"
                        }, {
                            "label": "September",
                            "value": "118000",
                            "color": "e44a00"
                        }]
                    }
                }, {
                    "id": "2013Q4",
                    "linkedchart": {
                        "chart": {
                            "caption": "Monthly Sales Summary",
                            "subcaption": "For the fourth quarter of year 2013",
                            "yaxisname": "Sales",
                            "showvalues": "0",
                            "bgcolor": "FFFFFF",
                            "numberprefix": "$",
                            "xaxisname": "Year",
                            "plotgradientcolor": "",
                            "showalternatehgridcolor": "0",
                            "showplotborder": "0",
                            "divlinecolor": "CCCCCC",
                            "canvasborderalpha": "0"
                        },
                        "data": [{
                            "label": "October",
                            "value": "92000",
                            "color": "e44a00"
                        }, {
                            "label": "November",
                            "value": "102000",
                            "color": "e44a00"
                        }, {
                            "label": "December",
                            "value": "105000",
                            "color": "e44a00"
                        }]
                    }
                }]
            }
        }]
    }
}

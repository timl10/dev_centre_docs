---
title: Filter Chart Data | FusionCharts
description: This article outlines the steps to create your first chart
heading: Filter Chart Data
---

**Filter** is an operation used to filter data values from a large dataset, based on one or more conditions. If you apply one of these operations on the DataModel, it generates a new DataModel with the filtered data.

## Types of filters

The predefined filters are:

* Null
* Not Null
* Equal
* Not Equal
* Greater
* Greater or Equal
* Less
* Less or Equal
* In Between
* Begins with
* Contains
* Ends with

In this article, we will create a chart by applying couple of filter operations to a tabular data. To start with let's will create a simple chart showcasing Global online sales of a SuperStore. Let's create the chart using the tabular table shown below:

> In the chart, **Order Date** Column will be represented using x-axis whereas **Sales** column will be represented in the y-axis.

Order Date | Country | Sales
---|---|---
1/1/2011 | Australia | 120.366
1/1/2011 | Australia | 55.242
1/3/2011 | Australia | 276.102
1/3/2011 | Australia | 35.883
1/4/2011 | United States | 16.448
1/5/2011 | United States | 272.736
1/5/2011 | United States | 11.784
1/6/2011 | United States | 19.536
1/7/2011 | United States | 6.54
1/7/2011 | United States | 5.48
1/8/2011 | United States | 76.728
1/8/2011 | United States | 10.43
1/10/2011 | Australia | 2875.095
1/10/2011 | United States | 9.344
1/11/2011 | India | 141.57
1/11/2011 | United States | 51.94
1/11/2011 | United States | 2.89
1/12/2011 | United States | 9.94
1/13/2011 | Australia | 15.93
1/14/2011 | United States | 1325.85
1/14/2011 | United States | 572.58
1/15/2011 | United States | 61.96
1/16/2011 | United States | 149.95
1/17/2011 | United States | 18.588
1/17/2011 | Australia | 18.576
1/19/2011 | United States | 64.864
1/20/2011 | United States | 181.47
1/20/2011 | Australia | 138.753
1/21/2011 | United States | 1067.94
1/21/2011 | United States | 6.63
1/22/2011 | Australia | 59.724
1/24/2011 | India | 59.25
1/24/2011 | United States | 5.94
1/26/2011 | India | 79.38
1/26/2011 | India | 342.51
1/27/2011 | United States | 141.96
1/27/2011 | United States | 489.92
1/27/2011 | United States | 10.68
1/28/2011 | Australia | 531.522
1/29/2011 | United States | 3.928
1/31/2011 | Australia | 838.593

Using the above tabular data, the chart looks like as shown below:

{% embed_chart fusioncharts-net-visualization-apply-filter-example-1.js %}

## Apply Filter Operations

Now, let's apply filter operation to the DataModel which consists of the data shown above. In the above tabular data, the **Order Date** column consists of date/time values and the **Country** column has three countries. To filter the data for **United States** from **1/11/2011** to **1/25/2011**, run the following query:

```
DataModel andOperator = model.Where("Order Date is between 1/11/2011 to 1/25/2011 and Country = United States");
```

In the above code:

* **DataModel** is a class.
* **andOperator** is the object which holds the resultant data.
* Between filter operation filters the **Order Date** column to the specified date/time.
* Equals filter operation filters the **Country** column to United States.

The output after running the above query looks like:

{% embed_chart fusioncharts-net-visualization-apply-filter-example-1.js %}

In the above chart, x-axis represents the Order Date column whereas y-axis represents the Sales per day.

Steps to render the above chart is given below:

### Create  `ColumnChart.aspx.cs`

Create the `ColumnChart.aspx.cs` file and do the following:

* Include the `FusionCharts.DataEngine` and `FusionCharts.Visualization` **.dll** files. 
* Create `DataTable`.
* Retrieve data using database query.
* Set server name.
* Set `DataBase` name.
* Connect with `DataBase` using a connection string.
* Create `StaticSource` using the `DataTable`.
* Create an instance of `DataModel` class.
* Add `DataSource` to the `DataModel`.
* Instantiate Column Chart.
* Set Chart's width and height.
* Set `DataModel` instance as the data source of the chart.
* Category field for the chart.
* Series field(s) for the chart.
* Set Chart Title.
* Finally, use a container using `<div>` to render the chart.

The code is shown below:

<CODE>

### Create `.aspx` Template

The `.aspx` template for the above sample is shown below:

<CODE>

To get the detailed description about the filter operations listed above, click here.
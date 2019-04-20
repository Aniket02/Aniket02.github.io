---
title: "Hospitilization Rates due to Opioid Abuse"
date: 2019-04-19
tags: [opioid abuse, hospitilization, regression, spss]
header:
  image: "/images/opioidAbuse/opioidcrisis.png"
excerpt: "Opioid Crisis in US and Canada, Multiple Regression, IBM SPSS"
mathjax: "true"
---

This post is a summary of the analysis done by my teamates and I on hosptilization rates due to Opiod Abuse in the U.S and Canada. It was the final report for the Stat E-150 course at Harvard. You can also read the [entire report](/assets/static/Opioid_Abuse_Report.pdf){:target="_blank"}. We also created a fun news bulletin video summarizing our finding.
<iframe width="560" height="315" src="https://www.youtube.com/embed/wmePjBy_sZY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction
The opioid epidemic is at an all-time high. On average, 115 persons die from opioid abuse every day in the United States of America (U.S.) Between the years 1999 – 2016, the death toll from opioid overdose is estimated to be over 350,000 individuals (CDC, 2017). 
 
The U.S. is not the only country devastated by opioid overdose. Canada is also suffering staggeringly high rates of hospitalization and deaths attributed to opioid abuse. The death toll has more than tripled due to drug overdose in parts of Canada like British Columbia (B.C. Coroners Service, 2018).

## Method

### Participants

The data was comprised of over 100,000 male and female participants from both Canada and the U.S that were hospitalized due to opioid abuse. Participants were separated into three *age* categories, *25 to 44, 45 to 64* and *65 and above*. This was a longitudinal observational study; therefore, patients were not recruited for the purpose of this analysis.  

### Datasets

The data set from the U.S. was extracted from the Healthcare Cost and Utilization Project (HCUP). The Canadian data set was provided by the Canadian Institute for Health Information (CIHI) which aggregated data regarding opioid trends from 2007-2015.

### Procedure

All data sets had opioid rates categorized by only one predictor variable, however, we realized that to run any statistical models on a dataset with multiple predictors, the rates needed to be stratified. Since we evaluated age and gender, the data sets needed to have a rate for each combination of groups, for example, Male & Age 25-44, Female & Age 25-44, Male & Age 45-64, etc. Since the data sets only contained separate rates for each predictor variable, the data was stratified by taking the individual ratios of each group, and multiplying by the national rate.  

$$Stratified Rate = \left(AnnualRate\right)\left(\frac{GenderSpecificRate}{TotalRateGender}\right)\left(\frac{AgeGroupSpecificRate}{TotalRateAge}\right)$$


Our original plan was to run multiple regression for the combined data, however, once we started our analysis it became apparent that we needed to run ANOVA to specifically compare rates between the two countries. It was necessary to run an additional test because the rates in the U.S. were significantly higher than rates in Canada. Therefore, multiple regression models were built to identify patterns within each country separately, and a one-way ANOVA was run the for combined data. Details are provided in the report linked above.

## Conclusion
Through our research we uncovered that in the U.S., the age group of *25 to 44 years* is significant because it speaks to the pattern of drug abuse which mirrors the three waves of the rise in opioid-related deaths. The first wave was attributed to the 
use of prescription of opioids in the 1990’s as general pain management. During this time, opioids were being marketed as "safe" and "non-addictive." Opioids acted as a gateway to stronger drugs like heroin, namely the second wave which began in 2010. It is believed that once students graduated college, they were able to support their drug habit. The third wave began in 2013 with higher rates of opioid related deaths associated with fentanyl (“Understanding the epidemic,” 2017). 

In comparison to the U.S., it was found in Canada that those aged *65 and older* had a higher rate of hospitalization due to opioid abuse. It was noted that there was a difference in prescribing habits between Canada and the U.S. which resulted in an increase in hospitalization in the age category of *65 and older*. We believe a contributing factor could be comorbidities in that age group due to drug interactions or general decline in health. Although the rate of drug abuse is higher in the U.S., it is important to note that hospitalizations in the *65 and older* group are proportionally higher in Canada. In summation, our research draws important findings as it relates to the opioid epidemic and provides considerations for future studies.
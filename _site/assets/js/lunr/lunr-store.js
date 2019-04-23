var store = [{
        "title": "Hospitilization Rates due to Opioid Abuse",
        "excerpt":"This post is a summary of the analysis done by my teamates and I on hosptilization rates due to Opiod Abuse in the U.S and Canada. It was the final report for the Stat E-150 course at Harvard. You can also read the entire report. We also created a fun news bulletin video summarizing our findings.    Introduction  The opioid epidemic is at an all-time high. On average, 115 persons die from opioid abuse every day in the United States of America (U.S.) Between the years 1999 – 2016, the death toll from opioid overdose is estimated to be over 350,000 individuals (CDC, 2017).   The U.S. is not the only country devastated by opioid overdose. Canada is also suffering staggeringly high rates of hospitalization and deaths attributed to opioid abuse. The death toll has more than tripled due to drug overdose in parts of Canada like British Columbia (B.C. Coroners Service, 2018).   Method   Participants   The data was comprised of over 100,000 male and female participants from both Canada and the U.S that were hospitalized due to opioid abuse. Participants were separated into three age categories, 25 to 44, 45 to 64 and 65 and above. This was a longitudinal observational study; therefore, patients were not recruited for the purpose of this analysis.   Datasets   The data set from the U.S. was extracted from the Healthcare Cost and Utilization Project (HCUP). The Canadian data set was provided by the Canadian Institute for Health Information (CIHI) which aggregated data regarding opioid trends from 2007-2015.   Procedure   All data sets had opioid rates categorized by only one predictor variable, however, we realized that to run any statistical models on a dataset with multiple predictors, the rates needed to be stratified. Since we evaluated age and gender, the data sets needed to have a rate for each combination of groups, for example, Male &amp; Age 25-44, Female &amp; Age 25-44, Male &amp; Age 45-64, etc. Since the data sets only contained separate rates for each predictor variable, the data was stratified by taking the individual ratios of each group, and multiplying by the national rate.     Our original plan was to run multiple regression for the combined data, however, once we started our analysis it became apparent that we needed to run ANOVA to specifically compare rates between the two countries. It was necessary to run an additional test because the rates in the U.S. were significantly higher than rates in Canada. Therefore, multiple regression models were built to identify patterns within each country separately, and a one-way ANOVA was run the for combined data. Details are provided in the report linked above.   Conclusion  Through our research we uncovered that in the U.S., the age group of 25 to 44 years is significant because it speaks to the pattern of drug abuse which mirrors the three waves of the rise in opioid-related deaths. The first wave was attributed to the  use of prescription of opioids in the 1990’s as general pain management. During this time, opioids were being marketed as “safe” and “non-addictive.” Opioids acted as a gateway to stronger drugs like heroin, namely the second wave which began in 2010. It is believed that once students graduated college, they were able to support their drug habit. The third wave began in 2013 with higher rates of opioid related deaths associated with fentanyl (“Understanding the epidemic,” 2017).   In comparison to the U.S., it was found in Canada that those aged 65 and older had a higher rate of hospitalization due to opioid abuse. It was noted that there was a difference in prescribing habits between Canada and the U.S. which resulted in an increase in hospitalization in the age category of 65 and older. We believe a contributing factor could be comorbidities in that age group due to drug interactions or general decline in health. Although the rate of drug abuse is higher in the U.S., it is important to note that hospitalizations in the 65 and older group are proportionally higher in Canada. In summation, our research draws important findings as it relates to the opioid epidemic and provides considerations for future studies.  ","categories": [],
        "tags": ["Opioid Abuse","Regression","SPSS"],
        "url": "http://localhost:4000/Opioid_Crisis/",
        "teaser":null},{
        "title": "Case Study in Yelp Reviews using Spark ML",
        "excerpt":"Problem Statement   To predict the user id of a Yelp Review based on the content of the review. I have done this by building classification models based on past yelp data. Pyspark libraries with Spark 2.4 and Python 3.6.6 :: Anaconda, Inc. are used to cleanse and analyze the data. I executed the jupyter notebook on a CentoOS 7 VM with 16GB Ram, 8 processor cores.   Data Set:   The Yelp collection of reviews can be downloaded from the Kaggle website.   The data file of interest is:  File Name: yelp_academic_dataset_review.json  File Size: 4.39GB  File Format: JSON    Data Exploration   The data contains 6 million rows with 9 columns. Star counts show that on average, the reviews are generally positive, with maximum of reviews being 5 stars.      The plots below show that 90% of users have less than 5 reviews. There is a small peak at 30 reviews as it represents all users having 30 or more reviews.      The jupyter notebook containing code for data exploration and visualization is here.   Model Analysis   I created logistic regression and naive bayes models with count features, TFIDF features, and TFIDF features combined with n-grams. The highest test set accuracy was 80% for logistic regression with uni-gram and bi-gram TFDIF matrix.   The code below creates a TFIDF matrix of 1 word and 2 word combinations that occur in atleast 10 documents, to a maximum of 1000. Models are trained on the combined features, and test instance predictions are made. Jupyter notebook containing code for all models is here.   Pipline with TFIDF and N-grams:   %%time  reviewsTF = HashingTF(inputCol=\"words\", outputCol=\"rawFeatures_1\", numFeatures=10000) reviewsIdf = IDF(inputCol=\"rawFeatures_1\", outputCol=\"features_1\", minDocFreq=10)  ngram = NGram(n=2, inputCol=\"words\", outputCol=\"ngrams_2\") reviewsTF2 = HashingTF(inputCol=\"ngrams_2\", outputCol=\"rawFeatures_2\", numFeatures=10000) reviewsIdf2 = IDF(inputCol=\"rawFeatures_2\", outputCol=\"features_2\", minDocFreq=10)  pipeline1 = Pipeline(stages=[reviewsTF , reviewsIdf])  pipeline2 = Pipeline(stages=[ngram, reviewsTF2 , reviewsIdf2])  finalPipeline = Pipeline(stages=[regexTokenizer,pipeline1, pipeline2,    VectorAssembler(inputCols=[\"features_1\", \"features_2\"], outputCol=\"features\"),label_userID ])  pipelineTFIDF2Fit = finalPipeline.fit(top_user_reviews) top_user_reviews_TFIDF2_features = pipelineTFIDF2Fit.transform(top_user_reviews)  (train_TFIDF2_Reviews, test_TFIDF2_Reviews) = top_user_reviews_TFIDF2_features.randomSplit([0.8, 0.2], seed = 12345)  Logistic Regression      Naive Bayes      Conclusion      I was surprised that a simple model as logistic regression could give an accuracy of 80% for 76 classes, with just 600 reviews per review. The highest accuracy was achieved when bigrams were included which is expected as users would have unique ways of combining two words together. I did not remove stopwords in this case as how common words are used tell us more about the writing pattern of a user than specific topical words. My assumption is trigrams will improve the accuracy further or it could possibly overfit. Regardless, that would generate a very sparse matrix, which would need to be reduced using LDA for the algorithm to run faster.   References:   Apache Spark ML main guide.   Multi-class classification in Spark.   ","categories": [],
        "tags": ["Spark ML","Regression"],
        "url": "http://localhost:4000/Yelp_Reviews/",
        "teaser":null},{
        "title": "Summary of the Seminal paper on Dropouts",
        "excerpt":"In this post, I summarize the paper titled, “Dropouts: A Simple Way to Prevent Neural Networks from Over\ftting” by Srivastava et al., publised in Journal of Machine Learning (2014).   Dropouts is a regularization technique for neural networks that was introduced to reduce over-fitting introduced in models with millions of parameters, but trained on limited data. The best way to regularize a fixed-sized model is to average the predictions of all possible settings of the parameters, weighing each setting by it’s posterior probability given the training data, but this would involve unlimited computation and is prohibitively expensive. Even if computation is not an issue, large networks require large amounts of training data and there may not be enough data available to train different networks on different subsets of data.   Dropouts addresses both these issues of computation and data availability. It provides a way of approximately combining exponentially many different neural networks efficiently. It does this by dropping out units at random, temporarily removing it from the network, along with all it’s incoming and outgoing connections. Training a neural network with dropout can be seen as training a collection of  thinned networks with weight sharing, where each thinned network gets trained very rarely, if at all. How is this handled at test time, as it is not feasible to average the predictions from exponentially many thinned models?   Instead, a simple approximate averaging method is used, where the weights of the network, with all it’s units at test time, are scaled-down versions of the trained weights. If a unit is retained with probability p during training, the outgoing weights of that unit are multiplied by p at test time. This ensures that for any hidden unit, the expected output (given dropout probability ) is the same as the actual output at test time.   The authors applied dropout on multiple classification datasets in various domain, in vision (MNIST, SVHN, CIFAR-10/100, ImageNet), speech (TIMIT), text and genetics. In all, they looked at the state-of-the-art techniques with and without dropout, observing the test error. The improvement was much smaller in the text dataset compared to that for the vision and speech data sets. In all cases, the optimal dropout probability  was found to be 0.5 for hidden units and 0.8 for input units. Dropout breaks up co-adaptations and the activations of the hidden units become sparse, which is why it leads to lower generalization errors.  ","categories": [],
        "tags": ["Summary","Dropouts"],
        "url": "http://localhost:4000/Dropouts/",
        "teaser":null}]

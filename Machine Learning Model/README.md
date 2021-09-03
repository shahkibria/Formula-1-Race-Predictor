
### Description of preliminary data processing

As already described, our data is accessed directly through F1 through Kaggle. This data is stored in a Postgres database hosted on AWS. The necessary data from this database is extracted into Python where we perform our preliminary data processing. If required, before the datasets are imported into python, some datasets are joined to create a new dataset directly within Postgres. For example, we joined the weather and results datasets into within Postgress to create a new dataset (results_weather). 

The results_weather dataset is imported into python alongside a second dataset (races). After these two datasets have been merged, we have a complete table. This dataset has information such as driver, constructor, racing circuit, starting grid position and weather data for the race. All of this information will be used as inputs for our machine learning model. After this we performed some additional clean-up such as replace null values with 0s and filtering the table to disregard information before the year 2000. With the level if technological and regulation changes that take place in F1, we concluded that taking information before 2000 was simply not practical. That being said, we did note that even taking a twenty-year period (2000 to 2019) was long for a dynamic sport like F1. We also created output columns such as “Win” which is a binary column with a 1 for “win” and 0 for “not win”. A second output column called “podium” is also created. This is also a binary column with a 1 for driver finishing in the podium (top-three position) and 0 for not podium. 

The [notebook](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Machine%20Learning%20Model/Q1.Race%20Predictability/ETL/1.%20Race_Predictor_ETL.ipynb) containing our preliminary data processing has been included in this repository.

## Question-1 Race Predictability :racing_car: :checkered_flag:

### Description of preliminary feature engineering and preliminary feature selection, including their decision-making process

The feature engineering and selection processes was determined by our exploratory analysis. As our analysis has shown, there is a strong correlation between starting position and winning the race. Similarly, there is strong correlation between constructor and driver with the likelihood of a “win” outcome. Therefore, we believe these were natural inclusions as features in our model. We used weather as an input because weather can play a part in any form of outdoor sporting event so we concluded that as another natural selection. We considered the altitudes of circuits and whether that could play a role in determining the outcome. However, as we can see in our exploratory analysis, there was no marked change in the performance of constructors which suggested that altitudes did not play a major role in performance of individual cars (aka any impact of altitude was either non-existent or universal). 

After the initial feature selection and engineering, we performed additional data processing to include secondary features such as driver age, driver’s number of wins and league position before the start of the race and constructor’s number of wins and league position before the race. After including them in our models, we noted that they did not lead to any improvements in our race predictions. As a result, when running our models, we excluded these secondary features and reverted back to our original features. 

Overall, the features or inputs used for our machine learnings models are: 
 - Year: denotes the year of the race
 - Round: denotes the nth number of race (the first race is round 1)
 - CircuitId: encoded number representing the circuit for the race
 - DriverId: encoded number representing the driver 
 - ConstructorId: encoded number representing the team/constructor
 - Grid: the starting position of the driver
 - Weather_warm: a binary response with 1 representing warm and 0 not warm
 - Weather_cold: a binary response with 1 representing cold and 0 not cold
 - Weather_dry: a binary response with 1 representing dry and 0 not dry
 - Weather_wet: a binary response with 1 representing wet and 0 not wet
 - Weather_cloudy: a binary response with 1 representing cloudy and 0 not cloudy

### Description of how data was split into training and testing sets

We split the training and testing datasets based on years. All data prior to the 2019 season was considered training dataset while the 2019 season racing outcomes were considered testing datasets.  The reason we are using years as a defining factor to split the two datasets is the impact it has on sports. Almost every competition is defined by the year-long schedule (aka a “season”) or small timeframe held a within a year (such as Olympics 2021 or FIFA World Cup 2018 which are held over consecutive months within the same calendar year). It is extremely rare for a competition winner to be decided based on performances over multiple years. Therefore, splitting datasets by year provides the best real-life use of any form of sporting outcome predictive model. Since the purpose of our machine learning model is to test a real theory that Formula 1 as a sport has become very predictable, we believe the success of our machine learning model’s ability to predict a full season’s outcome will provide far greater insight than its success based on random one-off races spread over multiple years. 

One way we tried to solve the disparity between using different years as test population and observe whether there were significant changes in our model’s performance. In addition to 2019, we used 2018 as a test population (2000-2017 as train population) and 2017 as test population (2000-2016) as test population. As we will show in our following sections, there weren’t significant fluctuations or fluctuations with a specific trend in the model’s performance which shows that using a single season as test population was appropriate. 

It should be noted that we selected the 2019 and not 2020 season (which is more recent) as our test set was due to the impact of Covid 19 on all sporting events. The 2020 season was cut short and held at one-off venues which were subsequently dropped from the calendar in 2021 as F1 got back to its regular calendar. 

### Explanation of model choice, including limitations and benefits AND Explanation of changes in the models from Segment 2 to Segment 3. 

The ETL process was tweaked  for Segment 3 to bring in additional inputs which were age, driver wins and driver position before the race and finally constructor win and constructor points before the race. As we have discussed above, included these inputs did not result in any improvement in the model’s performance (in fact it hindered the performance) and hence we decided to exclude them from the final model. 

For our Machine Learning Model, we selected classification models as our outputs represent discreate outcomes (in most cases our outputs are binary “yes” and “no” outcomes). For the our analysis for Segment 1 and Segment 2, we used three classification models: [Logistic Regression](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Machine%20Learning%20Model/Q1.Race%20Predictability/ML%20-%202019/1.%20Race_Predictor_Logistic_2019.ipynb), [Support Vector Machine](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Machine%20Learning%20Model/Q1.Race%20Predictability/ML%20-%202019/2.%20Race_Predictor_SVM_2019.ipynb) Classification and [Random Forrest](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Machine%20Learning%20Model/Q1.Race%20Predictability/ML%20-%202019/3.%20Race_Predictor_RNF_2019.ipynb) Classification. For Segment 3, we added an additinal model which was using [Neural Network](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Machine%20Learning%20Model/Q1.Race%20Predictability/ML%20-%202019/4.%20Race_Predictor_NN_2019.ipynb) Classification. 

We used the same inputs for this new model which were used for the other three. In segment 2, we had only used 2019 as a test population but as we have discussed above, for Segment 3, we have expanded our test populations to include 2017, 2018, 2019, 2018 to 2019 (2 years) and 2017 to 2019 (3 years) as test population to see if there were any marked differences in model performance when test population was changed or expanded. 

An F1 Grand Prix has twenty drivers competing to win the race. Therefore, when building a race predicting model, there are twenty possible outcomes that can take place in a race. For our initial attempts, we tried to build a model which a possible twenty outcomes for each driver. However, we had to pivot from that approach due to low accuracy scores (deeming the model unreliable). We switched our approach to a model which had two possible outcomes (race win or no win). This created a model which had significantly higher accuracy and f1 scores and the model could be deemed reliable. 

The limitation of this approach was however the fact that model would predict a significant number of races with no winners. **Since the model was not smart enough to understand that every race must have a winner, we had to tweak the race outcome function to predicting probabilities for each driver. We then sorted the probabilities in order which would essentially set out our predicted finishing grid for a race. Therefore, a driver finishing with the highest probability (even if it is below 50%) would be considered the race winner by our model.**

## Description of how the model has been trained AND Description of current accuracy scores

All machine learning models have been trained using data from the year 2000 to the 2018 season. The 2019 year has been used as a test population. In addition, as we have mentioned above, we have also used 2018 and 2017 as test populations with 2000-2017 and 2000-2016 as train populations respectively. There will be no further training of the model since our population is not expanding or changing. Since we are not using results from the current season (2021), our datasets are static and therefore doesn't require further training. 

The Summary for the model Accuracy scores are provided below: 
Accuracy Score | Random Forrest | Support Vector Machine | Logistic Regression | Neural Net
------------ | ------------- | ------------- | ------------- | -------------
2019 | 94.52% | 95.00% | 93.81% | 95.00%
2018 | 94.48% | 95.00% | 95.00% | 94.99%
2017 | 94.75% | 95.00% | 94.75% | 95.00%
2019-2018 | 95.12% | 95.00% | 94.40% | 95.00%
2019-2017 | 94.76% | 95.00% | 94.52% | 95.00%

As explained above, the Model is not smart enough to determine that every race needs a winner. Therefore for many races, the model did not assign any winner. In order to bypass this, we looked into the probabilities for each outcome and assigned the racer with the highest probability of win for a race as the winner. Based on this approach, our Model's Accuracy Score in regards to predicting the Race Winner (both in absolute numbers and percentages) are provided below: 

Correct Race Winner | Random Forrest | Support Vector Machine | Logistic Regression | Neural Net
------------ | ------------- | ------------- | ------------- | -------------
2019 | 10 out 21 | 12 out 21 | 8 out 21 | 11 out 21
2019 | 48% | 57% | 38% | 52%

The SVM Model performed the best for predicting the race winner. However for prediciting all race positions, the random forrest model performed the best out of the 4. We are summerizing the performnace of these two models for different aspects below. 

#### Confusion Matrix
We did not include a confusion matrix highlighting the precision and recall scores for our predictions. This is due to the fact that precision and recall will always be equal for the question we are trying to answer. The number of outcomes in any sporting event are always fixed. For example, in a Formula 1 race, by default there will always be 1 winner and 19 non-winners since only one driver can win the race. In the same way, when creating a race predictor for an F1 season, any predicitive model will always predict 21 winners for 21 races. Hence for a 21 race season with 20 drivers in each race, we will always have 21 positive outcomes and 399 negative outcomes. Therefore the challenge for the model is not to get the number of winners correct but rather predicting those 21 winners accurately. 

Therefore, when we calculate the precision or recall, false negative and false positive is always equal (since the number of each type of outcomes are fixed). As a result, we have not provided additional information for confusion matrix as precision and recall is always equal and therefore presenting the same information twice will not add any additional value to the user. 

#### Accuracy of Race Winner Predictions
As we can see below, the both models performed similarly when predicting race winners with the SVM model performing slighly better (12 out of 21 races for 2019 which is equal to 57% of total races). 
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Resources/Images/Accuracy%20of%20Predicted%20Winners.png" length=300></p>

In addition to predicting winners, we also checked how many times our predicted winners finished in the top 2 and top 3. As we can see, the RNF model performed very well here with performances always greater than 80%.  
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Resources/Images/Accuracy%20of%20Predicted%20Winner%20in%20Podium%20.png" length=300></p>

#### Accuracy of all Race Finishes
In addition to predicting winners, we expanded our analysis to see how well our models perform when predicting all race positions. Below we have presented our results of the model's performance on predicting each race position for all 21 races of the season and the same thing with a spread of 2. As we can see below, the RNF model performed better than SVM with scores around th 35% mark. However, when we add a spread of 2, our accuracy scores for the RNF model increases beyond the 70% mark. 
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Resources/Images/Accuracy%20of%20Predicted%20Finishes.png" length=300></p>
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Resources/Images/Accuracy%20of%20Predicted%20Finishes%20with%20a%20spread%20of%202.png" length=300></p>

#### Accuracy of Race Bin Predictions
In addition to predicting indivdual positions, we grouped the outcomes to specific groups to see whether the model performed differently for different positions. The groups are: 
 - Bin 1: Positions 1,2 & 3
 - Bin 2: Positions 4,5 & 6
 - Bin 3: Positions 7,8,9 & 10
 - Bin 4: Positions 11 and greater

When the data is grouped or binned, the RNF model's prediction accuracy reaches the high 70%. When reviewing specific bins, it can be seen that both models perform well for Bin 1 and Bin 4 which shows that there there is higher levels of predictability at the top and bottom of the grid than the teams/drivers in the "midfield. 
 <p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/Shah_Repo/Resources/Images/Accuracy%20of%20Predicted%20Bins.png" length=300></p>

#### Overall Analysis and whether the model addresses the question or problem we wanted to answer
From the performance of the models, we can conclude that there is fair levels of predictability in the sport. Even though individually, our models were only able to achieve a maximum 57% level of accuracy, our model was very good in predicting whether the winner will finish at least in the top 3 (the Random Forrest model achieved a 100% score in that regard for 2019). Secondly, when we add a spread of 2, our model performs well for all positions (Accuracy scores in the high 70s for all three test populations). Finally when we bin the data, our models again perform well predicting all bins (once again accuracy scores in the high 70s for all three test populations). This shows that there are low levels of variability within the F1 grid. Drivers who are considered "front runners" will always finish at the front and drivers who are considered "back markers" will remain as back markers. This also shows it is very rare for a race to result in a very unpredictable winner. 

Overall our predictive model could highlight clear trends in regrads top predictability of the sport and make meaningful predictions. Therefore we believe our model addresses the problem we wanted to answer. 

## Question-2 Segmented Race Strategies

### Description of preliminary feature engineering and preliminary feature selection, including their decision-making process
The feature engineering and selection processes was determined by our exploratory analysis. As our analysis has shown, there are differing factors on which we can segment race circuits using clustering algorithms. Therefore, we believe these were natural inclusions as clustering features in our model. We used weather as an input because weather can play a part in any form of outdoor sporting event so we concluded that as another natural selection. We considered the altitudes of circuits and whether that could play a role in determining the outcome. However, as we can see in our exploratory analysis, there was no marked change in the performance of constructors which suggested that altitudes did not play a major role in performance of individual cars (aka any impact of altitude was either non-existent or universal).

### Description of how data was split into training and testing sets

Since we used unsupervised machine learning to answer this question, we didn't split the data into train and test datasets. Instead we applied post-clustering qualitative analysis to comeout with strategies at circuit level.

### Explanation of model choice, including limitations and benefits

For our Machine Learning Model, we selected clustering models on differing factors to get output as clusters at circuit level. Our initial ML showed that we can use either KMeans or Heirarchial clustering models. For ease of detemining number of clusters through an elbow curve and model inertia, we used KMeans clustering to segment race circuits based on average of fastest lap times to determine fast, medium and slow circuits and based on weather to determine rainy, cloudy and dry circuits.

The limitation of answering this question in the way we chose is that there is further qualitative input required to piece the puzzle together. Someone without an understanding of Formula-1 wouldn't be able to make sense of the clusters. The benefit, however, is the ability to create race strategies at circuit level depending on environmental and design characteristics of the circuits which will help teams perform better and increase race preperation efficiency.

The below images shows the clustering of circuits according to speed(proxied using fastest lap times).
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Resources/Images/speed_circuits.png" width=500></p>

The below images shows the clustering of circuits according to weather (rainy and cloudy).
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Resources/Images/rainy_circuits.png" width=500></p>




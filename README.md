# Race Predictibility of Formula 1 :racing_car: :checkered_flag:

Sports present a vast amount of data that have been used to create a whole new paradigm of performance, team management and strategies. One sport that seems to have an over-reliance of data analysis is Formula 1 (F1). Formula 1 represents the pinnacle of automotive technology with hundreds of cars being fitted with state-of-the-art sensors generating significant amount of data, approximately 3gb per race along with 1500 datapoints, which teams monitor to determine tire performance, driver performance, track conditions etc. Few sports rely on the use of data analytics as extensively as F1 and as such major Technology companies such as Amazon Web Services, Qualcomm Technologies, Splunk all have major strategic relations with the competing teams. 

## Why F1 Data?
In recent years, Formula 1 has faced criticisms that the racing has become too predictable due to factors including lack of competition between teams, lack of overtaking and over-usage of data. Many drivers such as current Red Bull (and ex-Racing Point) driver Sergio Perez [(Article-1)](https://www.dailymail.co.uk/sport/formulaone/article-7192379/F1-far-boring-Sergio-Perez-takes-aim-lack-competition-dull-predictable-races.html) or two-time World Champion Fernando Alonso [(Article-2)](https://www.autosport.com/f1/news/predictable-f1-will-never-change-says-mclarens-fernando-alonso-5320449/5320449/)  have called the sport “boring” and “predictable”. The team believed this notion of race predictability to be a fascinating topic. 

Alongside race predictability affecting competition fans have noted that certain teams tend to favor different race strategies for a given event causing the same few teams to monopolize the winning of certain events. Over the past 7 years Mercedes have been dominating F1 events with the runner up also almost being Red-Bull. The team seeks to find answers for why Mercedes compared to other teams have such a dominant run and if it is a matter of having the best car and driver or if it is a matter of race strategies for given events. 

## Description of Data Source
The team got access to data directly from F1 through Kaggle and upon initial analysis we found that there is an abundance of historical data which can be used to create highly accurate ML models. Also, during initial observations we noted that the data provided was already cleaned and there creating databases, storing, and tiering the data would be less strenuous. The raw data is stored on a [Postgres](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/SQL_Connection/Sql_Connection.ipynb) database hosted on Amazon Web Services. We imported the necessary tables from our database, made the necessary ETL functions to create the final table or dataset to be used for the machine learning models. The Results and Weather tables are combined with left join and stored into a new table (results_weather) to help with machine learning models. The datasets are then exported back into the database. 

## Questions we would like to answer through ML-Model:

1) Are races predictable?
2) Can we create segmented race strategies for Formula1 constructors depending on circuit level historical performance?

## Exploratory Analysis [(Click here)](https://github.com/Vignesh-Bala11/Capstone-Project/tree/main/Exploratory_Analysis#race-predictibility-of-formula-1-racing_car-checkered_flag)
We explored the data to see if the sport indeed is too predictable as the fans feel. We analysed data by Racer, Constructir, Circuit, Racer Natioanlity and also weather. 

## Dashboard:
- Tableau has been used to build the [dashboard](https://public.tableau.com/views/ProjectDashboard_16276241496350/Storyboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link) which includes a storyboard.
- A [webpage](https://github.com/Vignesh-Bala11/Capstone-Project/tree/main/Dashboard/Webpage) has been created with interactive elements to predict the race outcome using the user selected input values.

![Screenshot 2021-08-08 120004](https://user-images.githubusercontent.com/57723459/128648714-08dfc688-e161-491d-81fd-d4d0d2f08b39.png)
[See it in action](https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Dashboard/My%20Movie%208.mov)

## Answering Questions through Machine Learning Models

We performed initial exploratory analysis isolating potential features and testing their relationships or correlations with race outcomes or strategies. Our initial features included reviewing relationship of wins with items such as: driver nationality, driver starting position, driver position after 1st lap, constructor etc. 

## Question-1 Race Predictability

Based on the results of our exploratory analysis, we identified several factors which we believed could be used as features for a machine learning model which can predict race outcome. Using the data that we have extracted and the features selected, we created 4(four) machine learning models which was trained using our dataset and then used to predict race outcome for a selected test population. 

For more details on our methodology, code and results, refer to the ['Race Predictability'](https://github.com/Vignesh-Bala11/Capstone-Project/tree/main/Machine%20Learning%20Model/Q1.Race%20Predictability): Machine Learning Model folder in the repository. 


## Question-2 Segmented Race Strategies

Utilizing our exploratory analysis, we also looked at ways to segment or “cluster” our data in ways that could exhibit or show racing strategies teams can take to significantly impact race strategies. For more details on our methodology, code and results, refer to the ['Segmented Race Strategies'](https://github.com/Vignesh-Bala11/Capstone-Project/tree/main/Machine%20Learning%20Model/Q2.Segmented%20Strategies) folder for more details.

## Presentation [(Click here)](https://docs.google.com/presentation/d/1u97TjOL777yrLXLrih05Ko4bS8BsdLjE_jCYlDLDVe8/edit?usp=sharing)

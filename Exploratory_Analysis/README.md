# Race Predictibility of Formula 1 :racing_car: :checkered_flag:
## Exploratory Analysis

### I. Racers

### 1. Nationality of Racer vs Wins in Home Country
This analysis attempts to identify if there is a higher likelihood for a racer to win a race in their home country. A new home win column was created with a Yes or No if the racer nationality and country of the race are the same. A win is defined as any of the top three positions. To visualize the results of the analysis, a bar chart and pie chart are used.

<p align="center"> <img src="https://user-images.githubusercontent.com/76491891/126873338-0f32c13d-4be8-4873-a0e7-636fc41b8d53.png" width=800></p>

- British nationality racers have the highest home wins.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873359-7d127860-0cc5-42b6-a6ba-91e110de9d62.png" width=350></p>

- Overall, only 8.1% of the racers have won in their home country.

### 2. Correlation between First Lap Position vs Final Position 
This analysis summarizes the final race position for a racer leading in the first lap.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873469-d3ef418b-446a-4346-b20e-adfc4812a14f.png" width=350></p>

- If the racer finishes his first lap position as one, there is a 55.2% chance to win the race in first position. 
- If the racer finishes his first lap position as one, there is a 21.6% chance to win the race in second or third position. 
- If the racer finishes his first lap position as one, there is a 23.1% chance to not win a podium position. 

### 3.	Correlation between Fifth Lap Position vs Final Position 
This analysis summarizes the final race position for a racer leading in the fifth lap.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873572-d277a774-42c9-48c0-baa2-d90b04b84598.png" width=350></p>

- If the racer finishes his fifth lap position as one, there is a 57.9% chance to win the race in first position. 
- If the racer finishes his fifth lap position as one, there is a 19.9% chance to win the race in second or third position. 
- If the racer finishes his fifth lap position as one, there is a 22.3% chance to not win a podium position. 

### 4. Starting position vs Winning Position
Its debatable whether the grid (starting) position provides a massive advantage for the racer in winning the race and this analysis is to explore if there is a trend in racer's starting position and winning position.
<p align="center"> <img src="https://user-images.githubusercontent.com/74985818/126878207-caa353c7-0aaf-4015-b863-75d843125b71.png" width=800> </p>

It appears that there does exist a maximal correlation between the starting position and the winning position. However, a caveat to this is that the starting position is decided during the qualifying race where the grid positions are decided on the lap times, with the driver to set the fastest time qualifying on pole, i.e. 1st place. Here, a lot more factors come into consideration.

### 5. Races won by Racers

Analysis to evaluate if common racer names emerge as winners in most of the races. And as seen below, over the decade, select few racers have been winning the races and majority of the racers have not won any.

<p align="center"><img src="https://user-images.githubusercontent.com/74985818/126878289-3373d495-f6d8-48a5-81c1-732c35a5e2a2.png" width=800></p>

### II. Constructors

### 6.	Constructor Performance in Various Altitudes
The altitude ranges are classified into two buckets, < 100 and > 100. 

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873607-5c039293-9aa2-42b3-9bcf-90b0cfd20406.png" width=800></p>

- If the altitude range is < 100, Mercedes has the most average constructor points.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873690-c7f80dc7-8a8f-40da-8ba8-9fefc4c5ced5.png" width=800></p>

- If the altitude range is > 100, Mercedes has the most average constructor points.

### 7. Constructors Wins
Comparing the constructor wins in the same time period as racers above (#5), there are select few constructors who constantly win the race while the others have not won any.

<p align="center"><img src="https://user-images.githubusercontent.com/74985818/126878423-3018012b-6ea0-48d6-8029-233a4cdcdcf9.png" width=800></p>

### 8.	Correlation between Pit Stops vs Points by Circuits and Constructors 
The correlation between pit stops and points for the Albert Park Grand Prix circuit was performed. Similar analysis can be performed for any desired circuit. 

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873723-8b3ef08a-9806-4c23-b764-d8908413c064.png" width=500></p>

- The correlation between stops and milliseconds is 0.83, which can be considered highly correlated.
- The correlation between stops and points is 0.59, which can be considered moderately correlated.
- The correlation between milliseconds and points is 0.55, which can be considered moderately correlated.

The correlation between pit stops and points for McLaren was performed. Similar analysis can be performed for any desired constructor.

<p align="center"><img src="https://user-images.githubusercontent.com/76491891/126873746-c2f6493c-8a30-4001-9fa1-5fa7f488d2e5.png" width=500></p>

- The correlation between stops and milliseconds is 0.37, which indicate a low correlation.
- The correlation between stops and points is 0.73, which can be considered highly correlated.
- The correlation between points and milliseconds is 0.3, which indicate a low correlation.

### III. Circuits

### 1. Fastest Lap Speeds and Lap times

Comparing the fastest lap times at circuit(location) level, we find that the median fastest times are varying across circuits. This could be a factor based on which circuits can be clustered.
<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Resources/Images/fastestLaptimes.PNG" width=500></p>

### 2. Finishing status

The circuits also have differing characteristics in terms of cars finishing the race or not. There is also a difference in the types of Did Not Finish(DNF) which will play a role in the strategy that constructors can use for different circuits.
The image below shows the accident occurances at different circuits. It can be clearly seen that each circuit has differening characteristics with respect to accidents, and a similar trend can be seen across all DNF and Finished statuses.

<p align="center"><img src="https://github.com/Vignesh-Bala11/Capstone-Project/blob/main/Resources/Images/accident.PNG" width=500></p> 
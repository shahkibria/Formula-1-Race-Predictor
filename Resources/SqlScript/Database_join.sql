--Creating a new table by combining results and weather
SELECT r."raceId",
	r."resultId",
	r."driverId",
	r."constructorId",
	r.number,
	r.grid,
	r.position,
	r."positionText",
	r."positionOrder",
	r.points,
	r.laps,
	r.time,
	r.milliseconds,
	r."fastestLap",
	r.rank,
	r."fastestLapTime",
	r."fastestLapSpeed",
	r."statusId",
	w.year,
	w.round,
	w.weather_warm,
	w.weather_cold,
	w.weather_dry,
	w.weather_wet,
	w.weather_cloudy
INTO results_weather
FROM results As r
	LEFT JOIN weather As w
		ON (r."raceId" = w."raceId");
		
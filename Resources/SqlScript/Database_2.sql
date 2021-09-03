CREATE TABLE "weather" (
  "raceId" int PRIMARY KEY,
  "year" int,
  "round" int,
  "weather_warm" int,
  "weather_cold" int,
  "weather_dry" int,
  "weather_wet" int,
  "weather_cloudy" int
);

CREATE TABLE "status_updated" (
  "statusId" int PRIMARY KEY,
  "status" varchar,
  "Description" varchar
);

ALTER TABLE "weather" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "status_updated" ADD FOREIGN KEY ("statusId") REFERENCES "status" ("statusId");

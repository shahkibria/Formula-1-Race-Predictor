CREATE TABLE "circuits" (
  "circuitId" int PRIMARY KEY,
  "circuitRef" varchar,
  "name" varchar,
  "location" varchar,
  "country" varchar,
  "lat" float,
  "lng" float,
  "alt" int,
  "url" varchar
);

CREATE TABLE "constructor_results" (
  "constructorResultsId" int PRIMARY KEY,
  "raceId" int,
  "constructorId" int,
  "points" float,
  "status" varchar
);

CREATE TABLE "constructor_standings" (
  "constructorStandingsId" int PRIMARY KEY,
  "raceId" int,
  "constructorId" int,
  "points" float,
  "position" int,
  "positionText" varchar,
  "wins" int
);

CREATE TABLE "constructors" (
  "constructorId" int PRIMARY KEY,
  "constructorRef" varchar,
  "name" varchar,
  "nationality" varchar,
  "url" varchar
);

CREATE TABLE "driver_standings" (
  "driverStandingsId" int PRIMARY KEY,
  "raceId" int,
  "driverId" int,
  "points" float,
  "position" int,
  "positionText" varchar,
  "wins" int
);

CREATE TABLE "drivers" (
  "driverId" int PRIMARY KEY,
  "driverRef" varchar,
  "number" varchar,
  "code" varchar,
  "forename" varchar,
  "surname" varchar,
  "dob" date,
  "nationality" varchar,
  "url" varchar
);

CREATE TABLE "lap_times" (
  "raceId" int,
  "driverId" int,
  "lap" int,
  "position" int,
  "time" time,
  "milliseconds" int
);

CREATE TABLE "pit_stops" (
  "raceId" int,
  "driverId" int,
  "stop" int,
  "lap" int,
  "time" varchar,
  "duration" varchar,
  "milliseconds" int
);

CREATE TABLE "qualifying" (
  "qualifyId" int PRIMARY KEY,
  "raceId" int,
  "driverId" int,
  "constructorId" int,
  "number" int,
  "position" int,
  "q1" varchar,
  "q2" varchar,
  "q3" varchar
);

CREATE TABLE "races" (
  "raceId" int PRIMARY KEY,
  "year" int,
  "round" int,
  "circuitId" int,
  "name" varchar,
  "date" date,
  "time" varchar,
  "url" varchar
);

CREATE TABLE "results" (
  "resultId" int PRIMARY KEY,
  "raceId" int,
  "driverId" int,
  "constructorId" int,
  "number" varchar,
  "grid" int,
  "position" varchar,
  "positionText" varchar,
  "positionOrder" int,
  "points" float,
  "laps" int,
  "time" varchar,
  "milliseconds" varchar,
  "fastestLap" varchar,
  "rank" varchar,
  "fastestLapTime" varchar,
  "fastestLapSpeed" varchar,
  "statusId" int
);

CREATE TABLE "status" (
  "statusId" int PRIMARY KEY,
  "status" varchar
);

ALTER TABLE "constructor_results" ADD FOREIGN KEY ("constructorId") REFERENCES "constructors" ("constructorId");

ALTER TABLE "constructor_standings" ADD FOREIGN KEY ("constructorId") REFERENCES "constructors" ("constructorId");

ALTER TABLE "pit_stops" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "lap_times" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "driver_standings" ADD FOREIGN KEY ("driverId") REFERENCES "drivers" ("driverId");

ALTER TABLE "results" ADD FOREIGN KEY ("statusId") REFERENCES "status" ("statusId");

ALTER TABLE "races" ADD FOREIGN KEY ("circuitId") REFERENCES "circuits" ("circuitId");

ALTER TABLE "qualifying" ADD FOREIGN KEY ("driverId") REFERENCES "drivers" ("driverId");

ALTER TABLE "constructor_results" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "constructor_standings" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "lap_times" ADD FOREIGN KEY ("driverId") REFERENCES "drivers" ("driverId");

ALTER TABLE "pit_stops" ADD FOREIGN KEY ("driverId") REFERENCES "drivers" ("driverId");

ALTER TABLE "driver_standings" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "qualifying" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "qualifying" ADD FOREIGN KEY ("constructorId") REFERENCES "constructors" ("constructorId");

ALTER TABLE "results" ADD FOREIGN KEY ("raceId") REFERENCES "races" ("raceId");

ALTER TABLE "results" ADD FOREIGN KEY ("driverId") REFERENCES "drivers" ("driverId");

ALTER TABLE "results" ADD FOREIGN KEY ("constructorId") REFERENCES "constructors" ("constructorId");

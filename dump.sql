CREATE TABLE "cities" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL
);

CREATE TABLE "flights" (
    "id" SERIAL PRIMARY KEY,
    "origin" INTEGER NOT NULL,
        FOREIGN KEY ("origin") REFERENCES "cities"("id"),
    "destination" INTEGER NOT NULL,
        FOREIGN KEY ("destination") REFERENCES "cities"("id"),
    "date" DATE NOT NULL
);

CREATE TABLE "passengers" (
    "id" SERIAL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

CREATE TABLE "travels" (
    "id" SERIAL PRIMARY KEY,
    "passengerId" INTEGER NOT NULL,
        FOREIGN KEY ("passengerId") REFERENCES "passengers"("id"),
    "flightId" INTEGER NOT NULL,
        FOREIGN KEY ("flightId") REFERENCES "flights"("id")
);
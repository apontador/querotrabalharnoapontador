cd backend;
docker-compose down;
docker-compose up -d;
./mvnw clean package;
./mvnw compile quarkus:dev;

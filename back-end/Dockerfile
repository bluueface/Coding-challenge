# Use an official OpenJDK 8 image as the base image
FROM openjdk:8-jre-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled JAR file into the container
COPY build/libs/shop-0.0.1-SNAPSHOT.jar shop.jar

# Run the Spring Boot application when the container starts
CMD ["java", "-jar", "shop.jar"]
# build stage
FROM maven:3.9.0-eclipse-temurin-21 AS build
WORKDIR /app
# copy only what's needed for a fast build-cache
COPY pom.xml .
COPY src ./src
# build jar (skip tests to speed up on Render; remove -DskipTests for production)
RUN mvn -B -DskipTests package

# runtime stage
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app
# copy built jar (works if your build produces target/*.jar)
COPY --from=build /app/target/*.jar app.jar

# Expose Render default port; app will bind to PORT (see ENTRYPOINT)
EXPOSE 10000

# allow extra JVM options via JAVA_OPTS if needed
ENV JAVA_OPTS=""

# start and respect Render's PORT env var (default 10000). Use sh -c to expand env vars.
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -Dserver.port=${PORT:-10000} -jar /app/app.jar"]

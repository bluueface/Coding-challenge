import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.jetbrains.kotlin.noarg.gradle.NoArgExtension



plugins {
	id("org.springframework.boot") version "2.4.3"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	id("org.jetbrains.kotlin.plugin.noarg") version "1.3.31"
	kotlin("jvm") version "1.5.0-RC"
	kotlin("plugin.spring") version "1.4.30"
}

group = "de.imedia24"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

configurations {
	compileOnly {
		extendsFrom(configurations.annotationProcessor.get())
	}
	implementation {
		exclude(module = "spring-boot-starter-logging")
	}
}

configure<NoArgExtension> {
	annotation("de.imedia24.shop.domain.model.NoArg")
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.springframework.boot:spring-boot-starter-log4j2")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.flywaydb:flyway-core")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	implementation("com.h2database:h2:1.4.200")


	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

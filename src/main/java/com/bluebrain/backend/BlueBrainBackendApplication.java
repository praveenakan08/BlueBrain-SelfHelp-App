package com.bluebrain.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.bluebrain.backend.repository")
public class BlueBrainBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlueBrainBackendApplication.class, args);
	}
}

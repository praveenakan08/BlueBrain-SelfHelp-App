package com.bluebrain.backend.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/chat")
public class ChatController {

    private final WebClient webClient = WebClient.create("http://localhost:11434");

    @PostMapping()
    public Mono<Map<String, String>> chatWithAgent(@RequestBody Map<String, String> request) {
        String prompt = request.get("prompt");

        return webClient.post()
                .uri("/api/generate")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .bodyValue(Map.of(
                        "model", "llama3",
                        "prompt", prompt,
                        "stream", false
                ))
                .retrieve()
                .bodyToMono(String.class)
                .map(responseBody -> Map.of("response", extractActualResponse(responseBody)));
    }

    private String extractActualResponse(String body) {
        return body;
    }
}

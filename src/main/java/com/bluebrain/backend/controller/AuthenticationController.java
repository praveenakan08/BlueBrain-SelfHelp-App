package com.bluebrain.backend.controller;

import com.bluebrain.backend.model.dto.auth.AuthRequest;
import com.bluebrain.backend.model.dto.auth.AuthResponse;
import com.bluebrain.backend.model.dto.auth.RegisterRequest;
import com.bluebrain.backend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@RequestHeader("Authorization") String authHeader) {
        authenticationService.logout(authHeader);
        return ResponseEntity.ok("Logged out successfully");
    }
}

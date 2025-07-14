package com.bluebrain.backend.model.dto.auth;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
    private String accessToken;

    private String refreshToken;

    private String username;

    public AuthResponse(String accessToken, String username, String refreshToken) {
        this.accessToken = accessToken;
        this.username = username;
        this.refreshToken = refreshToken;
    }
}

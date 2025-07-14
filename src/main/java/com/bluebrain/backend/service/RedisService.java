package com.bluebrain.backend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, Object> redisTemplate;

    public boolean exists(String token) {
        Boolean hasKey = redisTemplate.hasKey(token);
        return hasKey != null && hasKey;
    }

    public void saveToken(String jwtToken, String email) {
        redisTemplate.opsForValue().set(jwtToken, email, 1, TimeUnit.HOURS);
    }

    public void delete(String token) {
        redisTemplate.delete(token);
    }
}

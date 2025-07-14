package com.bluebrain.backend.repository;

import com.bluebrain.backend.model.entity.TokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<TokenEntity, Long> {

    List<TokenEntity> findAllValidTokenByUserId(Long id);

    Optional<TokenEntity> findByToken(String token);
}

package com.bluebrain.backend.model.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class JournalEntryEntity {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @Lob
    private String content;

    private LocalDate createdAt;

    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity userEntity;
}

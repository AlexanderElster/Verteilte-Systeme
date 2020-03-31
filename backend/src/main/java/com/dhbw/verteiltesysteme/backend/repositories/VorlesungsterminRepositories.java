package com.dhbw.verteiltesysteme.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dhbw.verteiltesysteme.backend.entities.Vorlesungstermin;

public interface VorlesungsterminRepositories extends JpaRepository<Vorlesungstermin, Integer> {

}

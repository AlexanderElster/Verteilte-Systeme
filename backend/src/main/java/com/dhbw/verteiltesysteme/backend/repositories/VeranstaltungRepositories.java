package com.dhbw.verteiltesysteme.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dhbw.verteiltesysteme.backend.entities.Veranstaltung;

public interface VeranstaltungRepositories extends JpaRepository<Veranstaltung, Integer> {

}

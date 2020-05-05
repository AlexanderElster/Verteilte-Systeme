package com.dhbw.verteiltesysteme.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dhbw.verteiltesysteme.backend.entities.Kurs;
import com.dhbw.verteiltesysteme.backend.entities.User;

public interface KursRepositories extends JpaRepository<Kurs, Integer> {

}

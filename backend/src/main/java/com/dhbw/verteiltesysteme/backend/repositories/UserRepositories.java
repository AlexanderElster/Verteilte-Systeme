package com.dhbw.verteiltesysteme.backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dhbw.verteiltesysteme.backend.entities.User;

@Repository
public interface UserRepositories extends JpaRepository<User, Integer> {
	
	Optional<User> findByEmail(String email);
}

package com.dhbw.verteiltesysteme.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.verteiltesysteme.backend.entities.User;
import com.dhbw.verteiltesysteme.backend.repositories.UserRepositories;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	UserRepositories repository;

	@GetMapping(path = "/all")
	public ResponseEntity<Iterable<User>> getAllUsers() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody User user) {
		repository.save(user);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@RequestMapping(path = "/update", method = { RequestMethod.PATCH, RequestMethod.POST })
	public @ResponseBody boolean update(@RequestParam int id, @RequestParam String titel, @RequestParam String nachname,
			@RequestParam String vorname, @RequestParam String passwort, @RequestParam String email,
			@RequestParam String handynr) {
		boolean updated = true;
		Optional<User> result = repository.findById(id);

		if (result.isEmpty()) {
			updated = false;
		} else {
			User u = result.get();

			if (!titel.equals("")) {
				u.setTitel(titel);
			}
			if (!nachname.equals("")) {
				u.setNachname(nachname);
			}
			if (!vorname.equals("")) {
				u.setVorname(vorname);
			}
			if (!passwort.equals("")) {
				u.setPasswort(passwort);
			}
			if (!email.equals("")) {
				u.setEmail(email);
			}
			if (!handynr.equals("")) {
				u.setHandynr(handynr);
			}

			repository.save(u);
		}

		return updated;
	}
}
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
import com.dhbw.verteiltesysteme.backend.entities.Veranstaltung;
import com.dhbw.verteiltesysteme.backend.repositories.VeranstaltungRepositories;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/vorlesung")
public class VeranstaltungController {

	@Autowired
	VeranstaltungRepositories repository;

	@GetMapping(path = "/all")
	public ResponseEntity<Iterable<Veranstaltung>> getAllVorlesungen() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody Veranstaltung veranstaltung) {
		repository.save(veranstaltung);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@RequestMapping(path = "/update", method = { RequestMethod.PATCH, RequestMethod.POST })
	public @ResponseBody boolean update(@RequestParam int id, @RequestParam User dozent, @RequestParam int anztermine) {
		boolean updated = true;
		Optional<Veranstaltung> result = repository.findById(id);

		if (result.isEmpty()) {
			updated = false;
		} else {
			Veranstaltung v = result.get();

			if (dozent != null) {
				v.setDozent(dozent);
			}

			if (!(anztermine == 0)) {
				v.setAnztermine(anztermine);
			}
			repository.save(v);
		}

		return updated;
	}
}
package com.dhbw.verteiltesysteme.backend.controller;

import java.time.LocalTime;
import java.util.GregorianCalendar;
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

import com.dhbw.verteiltesysteme.backend.entities.Veranstaltung;
import com.dhbw.verteiltesysteme.backend.entities.Vorlesungstermin;
import com.dhbw.verteiltesysteme.backend.repositories.VorlesungsterminRepositories;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/vorlesungstermin")
public class VorlesungsterminController {

	@Autowired
	VorlesungsterminRepositories repository;

	@GetMapping(path = "/all")
	public ResponseEntity<Iterable<Vorlesungstermin>> getAllVorlesungstermine() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody Vorlesungstermin vorlesungstermin) {
		repository.save(vorlesungstermin);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@RequestMapping(path = "/update", method = { RequestMethod.PATCH, RequestMethod.POST })
	public @ResponseBody boolean update(@RequestParam int id, @RequestParam Veranstaltung veranstaltung,
			@RequestParam int tag, @RequestParam int monat, @RequestParam int jahr, @RequestParam int stdAnf,
			@RequestParam int minAnf, @RequestParam int stdEnd, @RequestParam int minEnd) {
		boolean updated = true;
		Optional<Vorlesungstermin> result = repository.findById(id);

		if (!result.isEmpty()) {
			updated = false;
		} else {
			Vorlesungstermin v = result.get();

			if (veranstaltung != null) {
				v.setVeranstaltung(veranstaltung);
			}

			if (tag != -1 && monat != -1 && jahr != -1) {
				v.setDatum(tag, monat, jahr);
			}

			if (stdAnf != -1 && minEnd != -1) {
				v.setAnfangszeit(stdAnf, minAnf);
			}

			if (stdEnd != -1 && minEnd != -1) {
				v.setEndezeit(stdEnd, minEnd);
			}
			
			repository.save(v);
		}

		return updated;
	}
}
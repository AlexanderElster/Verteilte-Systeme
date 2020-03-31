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

import com.dhbw.verteiltesysteme.backend.entities.Kurs;
import com.dhbw.verteiltesysteme.backend.repositories.KursRepositories;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/kurs")
public class KursController {

	@Autowired
	KursRepositories repository;

	@GetMapping(path = "/all")
	public ResponseEntity<Iterable<Kurs>> getAllKurse() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping(path = "/add")
	public void addKurs(@RequestBody Kurs kurs) {
		repository.save(kurs);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	@RequestMapping(path="/update", method= {RequestMethod.PATCH, RequestMethod.POST})
	public @ResponseBody boolean update(@RequestParam int id, @RequestParam String kursbezeichnung, @RequestParam String studleiter) {
		boolean updated = true;
		Optional<Kurs> result = repository.findById(id);
		
		if (result.isEmpty()) {
			updated = false;
		}
		else {
			Kurs k = result.get();
			
			if (!kursbezeichnung.equals("")) {
				k.setKursbezeichnung(kursbezeichnung);
			}
		}
		return updated;
	}
}

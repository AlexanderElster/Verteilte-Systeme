package com.dhbw.verteiltesysteme.backend.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
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
import com.dhbw.verteiltesysteme.backend.entities.User;
import com.dhbw.verteiltesysteme.backend.entities.Veranstaltung;
import com.dhbw.verteiltesysteme.backend.entities.VeranstaltungModel;
import com.dhbw.verteiltesysteme.backend.repositories.VeranstaltungRepositories;
import com.google.gson.Gson;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/veranstaltung")
public class VeranstaltungController {

	@Autowired
	VeranstaltungRepositories repository;

	@GetMapping(path = "/all")
	public ResponseEntity<Iterable<Veranstaltung>> getAllVorlesungen() {
		return ResponseEntity.ok(repository.findAll());
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody VeranstaltungModel veranstaltungm) throws IOException {
		String kursid = veranstaltungm.getKurs();
		String dozentid = veranstaltungm.getDozent();

		URL urlK = new URL("http://localhost:8080/api/kurs/" + kursid);
		HttpURLConnection conK = (HttpURLConnection) urlK.openConnection();
		conK.setRequestMethod("GET");
		BufferedReader inK = new BufferedReader(new InputStreamReader(conK.getInputStream()));
		String inputLineK;
		StringBuffer contentK = new StringBuffer();
		while ((inputLineK = inK.readLine()) != null) {
			contentK.append(inputLineK);
		}
		inK.close();
		conK.disconnect();
		String kurs = contentK.toString();

		URL urlD = new URL("http://localhost:8080/api/user/" + dozentid);
		HttpURLConnection conD = (HttpURLConnection) urlD.openConnection();
		conD.setRequestMethod("GET");
		BufferedReader inD = new BufferedReader(new InputStreamReader(conD.getInputStream()));
		String inputLineD;
		StringBuffer contentD = new StringBuffer();
		while ((inputLineD = inD.readLine()) != null) {
			contentD.append(inputLineD);
		}
		inD.close();
		conD.disconnect();
		String user = contentD.toString();
		
		Gson g = new Gson();
		Kurs k = g.fromJson(kurs, Kurs.class);
		User u = g.fromJson(user, User.class);
		Veranstaltung v = new Veranstaltung(veranstaltungm.getBezeichnung(), veranstaltungm.getAnztermine(), k, u);
		repository.save(v);
	}

	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<Veranstaltung>> getVeranstaltung(@PathVariable int id) {
		return ResponseEntity.ok(repository.findById(id));
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
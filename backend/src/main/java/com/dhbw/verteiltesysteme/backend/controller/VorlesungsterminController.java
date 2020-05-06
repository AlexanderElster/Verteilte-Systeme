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
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.verteiltesysteme.backend.entities.Veranstaltung;
import com.dhbw.verteiltesysteme.backend.entities.Vorlesungstermin;
import com.dhbw.verteiltesysteme.backend.entities.VorlesungsterminModel;
import com.dhbw.verteiltesysteme.backend.repositories.VorlesungsterminRepositories;
import com.google.gson.Gson;

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

	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<Vorlesungstermin>> getVeranstaltung(@PathVariable int id) {
		return ResponseEntity.ok(repository.findById(id));
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody VorlesungsterminModel vorlesungsterminm) throws IOException {
		String veranstaltungsId = vorlesungsterminm.getVeranstaltungsId();

		URL url = new URL("http://localhost:8080/api/veranstaltung/" + veranstaltungsId);
		HttpURLConnection con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod("GET");
		BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		String inputLine;
		StringBuffer content = new StringBuffer();
		while ((inputLine = in.readLine()) != null) {
			content.append(inputLine);
		}
		in.close();
		con.disconnect();
		String veranstaltung = content.toString();
		Gson g = new Gson();
		Veranstaltung ver = g.fromJson(veranstaltung, Veranstaltung.class);
		Vorlesungstermin v = new Vorlesungstermin(vorlesungsterminm.getDatum(), vorlesungsterminm.getAnfangszeit(),
				vorlesungsterminm.getEndezeit(), ver);
		
		repository.save(v);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	/*
	 * 
	 * @RequestMapping(path = "/update", method = { RequestMethod.PATCH,
	 * RequestMethod.POST }) public @ResponseBody boolean update(@RequestParam int
	 * id, @RequestParam Veranstaltung veranstaltung,
	 * 
	 * @RequestParam int tag, @RequestParam int monat, @RequestParam int
	 * jahr, @RequestParam int stdAnf,
	 * 
	 * @RequestParam int minAnf, @RequestParam int stdEnd, @RequestParam int minEnd)
	 * { boolean updated = true; Optional<Vorlesungstermin> result =
	 * repository.findById(id);
	 * 
	 * if (!result.isEmpty()) { updated = false; } else { Vorlesungstermin v =
	 * result.get();
	 * 
	 * if (veranstaltung != null) { v.setVeranstaltung(veranstaltung); }
	 * 
	 * if (tag != -1 && monat != -1 && jahr != -1) { v.setDatum(tag, monat, jahr); }
	 * 
	 * if (stdAnf != -1 && minAnf != -1) { v.setAnfangszeit(stdAnf, minAnf); }
	 * 
	 * if (stdEnd != -1 && minEnd != -1) { v.setEndezeit(stdEnd, minEnd); }
	 * 
	 * repository.save(v); }
	 * 
	 * return updated; }
	 */
}
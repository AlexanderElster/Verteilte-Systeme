package com.dhbw.verteiltesysteme.backend.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
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
import com.dhbw.verteiltesysteme.backend.entities.KursModel;
import com.dhbw.verteiltesysteme.backend.entities.User;
import com.dhbw.verteiltesysteme.backend.repositories.KursRepositories;
import com.dhbw.verteiltesysteme.backend.repositories.UserRepositories;
import com.google.gson.Gson;

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
	public void addKurs(@RequestBody KursModel kursh) throws IOException {
		String studid = kursh.getStudleiter();
		URL url = new URL("http://localhost:8080/api/user/" + studid);
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
		String user = content.toString();
		Gson g = new Gson();
		User u = g.fromJson(user, User.class);
		Kurs k = new Kurs(kursh.getKursbezeichnung(), u);
		repository.save(k);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

	/*
	 * 
	 * @RequestMapping(path="/update", method= {RequestMethod.PATCH,
	 * RequestMethod.POST}) public @ResponseBody boolean update(@RequestParam int
	 * id, @RequestParam String kursbezeichnung, @RequestParam User studleiter) {
	 * boolean updated = true; Optional<Kurs> result = repository.findById(id);
	 * 
	 * if (result.isEmpty()) { updated = false; } else { Kurs k = result.get(); if
	 * (studleiter != null) { k.setStudleiter(studleiter); } if
	 * (!kursbezeichnung.equals("")) { k.setKursbezeichnung(kursbezeichnung); }
	 * repository.save(k); } return updated; }
	 */
}

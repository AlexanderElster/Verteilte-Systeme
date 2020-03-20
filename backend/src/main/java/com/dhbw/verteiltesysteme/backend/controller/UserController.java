package com.dhbw.verteiltesysteme.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.verteiltesysteme.backend.entities.User;
import com.dhbw.verteiltesysteme.backend.repositories.UserRepositories;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserRepositories repository;
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return repository.findAll();
	}
	
	@PostMapping(path="/add")
	public @ResponseBody String addNewUser(@RequestParam String titel, @RequestParam String nachname, @RequestParam String vorname, @RequestParam String passwort, @RequestParam String email, @RequestParam String handynr) {
		User u = new User(titel, nachname, vorname, passwort, email, handynr);
		repository.save(u);
		return "Saved!";
	}
	
	@RequestMapping(path="/delete", method= {RequestMethod.DELETE, RequestMethod.POST})
	public @ResponseBody String delete(@RequestParam int id) {
		repository.deleteById(id);
		return "Deleted!";
	}
	
	@RequestMapping(path="/update", method= {RequestMethod.PATCH, RequestMethod.POST})
	public @ResponseBody String update(@RequestParam int id, @RequestParam String titel, @RequestParam String nachname, @RequestParam String vorname, @RequestParam String passwort, @RequestParam String email, @RequestParam String handynr) {
		String message = "Updated!";
		Optional<User> result = repository.findById(id);
		
		if (result.isEmpty()) {
			message = "No object with id = " + id;
		}		
		else {
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
			if(!email.equals("")) {
				u.setEmail(email);
			}
			if (!handynr.equals("")) {
				u.setHandynr(handynr);
			}
			
			repository.save(u);
		}
		
		return message;
	}
}

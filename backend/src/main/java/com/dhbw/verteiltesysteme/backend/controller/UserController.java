package com.dhbw.verteiltesysteme.backend.controller;

import java.util.NoSuchElementException;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhbw.verteiltesysteme.backend.entities.LoginUser;
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

	@GetMapping(path = "/{id}")
	public ResponseEntity<Optional<User>> getUser(@PathVariable int id) {
		return ResponseEntity.ok(repository.findById(id));
	}
	
	@PostMapping(path ="/login")
	@ResponseBody
	public User login (@RequestBody LoginUser logUser ) throws NoSuchElementException
	{
		try {
		String userEmail = logUser.getEmail();
		String userPasswort = logUser.getPasswort();
		Optional<User> loginUser = repository.findByEmail(userEmail);
			User user = loginUser.get();
			User notFound;
			notFound = new User();
		if(user.getEmail().equals(userEmail))
				{
					if(user.getPasswort().equals(userPasswort))
					{
						return  user;
					}
						
				}
		
		
		return notFound;
		
		} 
		catch(NoSuchElementException e) {
			User notFound = new User();
			return notFound;
		}
	}

	@PostMapping(path = "/add")
	public void addUser(@RequestBody User user) {
		repository.save(user);
	}

	@DeleteMapping(path = "/delete/{id}")
	public void delete(@PathVariable int id) {
		repository.deleteById(id);
	}

}
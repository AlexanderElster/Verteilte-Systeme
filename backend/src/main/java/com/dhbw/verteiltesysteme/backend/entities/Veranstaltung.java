package com.dhbw.verteiltesysteme.backend.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "veranstaltung")
public class Veranstaltung {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@ManyToOne
	@JoinColumn(name = "kursId")
	private Kurs kurs;

	@ManyToOne
	@JoinColumn(name = "dozentenId")
	private User dozent;

	private int anztermine;
	
	@OneToMany(mappedBy = "veranstaltung", cascade = CascadeType.ALL)
	private Set<Vorlesungstermin> vorlesungstermine;

	public Veranstaltung() {

	}

	public Veranstaltung(int anztermine, Vorlesungstermin...vorlesungstermine) {
		this.setAnztermine(anztermine);
		this.vorlesungstermine.forEach(x -> x.setVeranstaltung(this));
	}

	public int getAnztermine() {
		return anztermine;
	}

	public void setAnztermine(int anztermine) {
		this.anztermine = anztermine;
	}
	
	public int getId() {
		return id;
	}
	
	public void setDozent(User dozent) {
		this.dozent = dozent;
	}
	
	public User getDozent() {
		return dozent;
	}
	
	public void setKurs(Kurs kurs) {
		this.kurs = kurs;
	}
	
	public Kurs getKurs() {
		return kurs;
	}
}

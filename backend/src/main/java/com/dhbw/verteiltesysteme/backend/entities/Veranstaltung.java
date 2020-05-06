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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "veranstaltung")
public class Veranstaltung {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	private String bezeichnung;
	
	@JsonBackReference(value= "kurs")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "kurs_Id", referencedColumnName = "id")
	private Kurs kurs;
	@JsonBackReference(value = "dozent")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "dozent_Id", referencedColumnName = "id")
	private User dozent;

	private int anztermine;
	
	@OneToMany(mappedBy = "veranstaltung", cascade = CascadeType.MERGE)
	private Set<Vorlesungstermin> vorlesungstermine;

	public Veranstaltung() {

	}
	
	public Veranstaltung(String bezeichnung, int anztermine, Object kurs, Object dozent) {
		this.setBezeichnung(bezeichnung);
		this.setAnztermine(anztermine);
		this.setKurs((Kurs) kurs);
		this.setDozent((User) dozent);
	}

	public Veranstaltung(String bezeichnung, int anztermine, Kurs kurs ,User dozent ,Set<Vorlesungstermin> vorlesungstermine) {
		this.setBezeichnung(bezeichnung);
		this.setAnztermine(anztermine);
		this.setKurs(kurs);
		this.setDozent(dozent);
		this.setVorlesungstermine(vorlesungstermine);
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

	public void setDozent(User user) {
		this.dozent = user;
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

	public String getBezeichnung() {
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}
	
	public int getDozentId() {
		return dozent.getId();
	}

	public int getKursId() {
		return kurs.getId();
	}
	
	public Set<Vorlesungstermin> getVorlesungstermine() {
		return vorlesungstermine;
	}
	
	public void setVorlesungstermine(Set<Vorlesungstermin> vorlesungstermine) {
		this.vorlesungstermine = vorlesungstermine;
	}
}

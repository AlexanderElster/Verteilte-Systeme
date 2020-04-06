package com.dhbw.verteiltesysteme.backend.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "kurs")
public class Kurs {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private String kursbezeichnung;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(unique = true, name = "dozentId")
	private User studleiter;
	
	@OneToMany(mappedBy = "kurs", cascade = CascadeType.ALL)
	private Set<Veranstaltung> veranstaltungen;

	public Kurs() {
	}
	
	public Kurs(String kursbezeichnung, User studleiter) {
		this.studleiter.setKurs(this);
		this.setKursbezeichnung(kursbezeichnung);
	}

	public Kurs(String kursbezeichnung, User studleiter, Veranstaltung...veranstaltungen) {
		this.studleiter.setKurs(this);
		this.setKursbezeichnung(kursbezeichnung);
		this.veranstaltungen.forEach(x -> x.setKurs(this));
	}

	public void setKursbezeichnung(String kursbezeichnung) {
		this.kursbezeichnung = kursbezeichnung;
	}

	public String getKursbezeichnung() {
		return kursbezeichnung;
	}

	public int getId() {
		return id;
	}
	
	public User getStudleiter() {
		return studleiter;
	}
	
	public void setStudleiter(User studleiter) {
		this.studleiter = studleiter;
	}
}
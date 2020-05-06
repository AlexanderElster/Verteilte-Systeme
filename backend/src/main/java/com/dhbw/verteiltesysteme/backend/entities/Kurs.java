package com.dhbw.verteiltesysteme.backend.entities;

import java.util.Optional;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "kurs")
public class Kurs {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private String kursbezeichnung;
	
	@OneToMany(mappedBy = "kurs", cascade = CascadeType.MERGE)
	private Set<Veranstaltung> veranstaltungen;
	
	@JsonBackReference(value ="studleiter")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "studleiter_id", referencedColumnName = "id")
	private User studleiter;
	
	public Kurs() {
	}
	
	public Kurs(String kursbezeichnung, Object studleiter) { 
		this.setKursbezeichnung(kursbezeichnung);
		this.setStudleiter((User) studleiter);  
		}

	public Kurs(String kursbezeichnung, Object studleiter,Set<Veranstaltung> veranstaltungen) { 
		this.setKursbezeichnung(kursbezeichnung);
		this.setStudleiter((User) studleiter); 
		this.setVeranstaltungen(veranstaltungen);
		this.veranstaltungen.forEach(x ->
		x.setKurs(this)); 
		}
	
	@Override
	public String toString() {
		return String.format(
		"Customer[id=%d, kursbezeichnung='%s', studleiter='%s']", id, kursbezeichnung, studleiter);
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

	public void setStudleiter(User user) {
		this.studleiter = user;
	}
	
	public int getStudleiterId() {
		return studleiter.getId();
	}
	
	public void setVeranstaltungen(Set<Veranstaltung> veranstaltungen) {
		this.veranstaltungen = veranstaltungen;
	}
	
	public Set<Veranstaltung> getVeranstaltungen() {
		return veranstaltungen;
	}
}
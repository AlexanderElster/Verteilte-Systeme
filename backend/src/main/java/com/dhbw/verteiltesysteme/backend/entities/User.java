package com.dhbw.verteiltesysteme.backend.entities;

import java.util.Set;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String titel;

	private String nachname;

	private String vorname;

	private String passwort;

	private String email;

	private String handynr;
	
	@OneToOne(mappedBy = "studleiter")
	private Kurs kurs;
	
	@OneToMany(mappedBy = "dozent", cascade = CascadeType.MERGE)
	private Set<Veranstaltung> veranstaltungen;

	public User() {
	}
	
	public User(String titel, String nachname, String vorname, String passwort, String email, String handynr, Kurs kurs) {
		this.setTitel(titel);
		this.setNachname(nachname);
		this.setVorname(vorname);
		this.setPasswort(passwort);
		this.setEmail(email);
		this.setHandynr(handynr);
		this.setKurs(kurs);
	}
	
	public User(String titel, String nachname, String vorname, String passwort, String email, String handynr, Kurs kurs, Veranstaltung...veranstaltungen) {

		this.setTitel(titel);
		this.setNachname(nachname);
		this.setVorname(vorname);
		this.setPasswort(passwort);
		this.setEmail(email);
		this.setHandynr(handynr);
		this.setKurs(kurs);
		this.veranstaltungen.forEach(x -> x.setDozent(this));

	}

	public String getNachname() {
		return nachname;
	}

	public void setNachname(String nachname) {
		this.nachname = nachname;
	}

	public String getVorname() {
		return vorname;
	}

	public void setVorname(String vorname) {
		this.vorname = vorname;
	}

	public String getPasswort() {
		return passwort;
	}

	public void setPasswort(String passwort) {
		this.passwort = passwort;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getHandynr() {
		return handynr;
	}

	public void setHandynr(String handynr) {
		this.handynr = handynr;
	}

	public int getId() {
		return this.id;
	}

	public String getTitel() {
		return titel;
	}

	public void setTitel(String titel) {
		this.titel = titel;
	}
	
	public void setKurs(Kurs kurs) {
		this.kurs = kurs;
	}
	
	public Kurs getKurs() {
		return kurs;
	}
}

package com.dhbw.verteiltesysteme.backend.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "vorlesungstermin")
public class Vorlesungstermin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String datum;

	private String anfangszeit;

	private String endezeit;
	
	@JsonBackReference(value = "veranstaltung")
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "veranstatungs_Id", referencedColumnName ="id")
	private Veranstaltung veranstaltung;

	public Vorlesungstermin() {
		
	}
	
	public Vorlesungstermin(String datum, String anfangszeit, String endezeit, Veranstaltung veranstaltung) {
		this.setDatum(datum);
		this.setAnfangszeit(anfangszeit);
		this.setEndezeit(endezeit);
		this.setVeranstaltung(veranstaltung);
	}
	
	public int getId() {
		return id;
	}
	
	public void setVeranstaltung(Veranstaltung veranstaltung) {
		this.veranstaltung = veranstaltung;
	}
	
	public Veranstaltung getVeranstaltung() {
		return veranstaltung;
	}

	public String getDatum() {
		return datum;
	}

	public void setDatum(String datum) {
		this.datum = datum;
	}

	public String getAnfangszeit() {
		return anfangszeit;
	}

	public void setAnfangszeit(String anfangszeit) {
		this.anfangszeit = anfangszeit;
	}

	public String getEndezeit() {
		return endezeit;
	}

	public void setEndezeit(String endezeit) {
		this.endezeit = endezeit;
	}
	
	public int getVeranstaltungsId() {
		return this.veranstaltung.getId();
	}
}

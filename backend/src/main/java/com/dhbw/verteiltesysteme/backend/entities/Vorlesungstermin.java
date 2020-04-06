package com.dhbw.verteiltesysteme.backend.entities;

import java.time.LocalTime;
import java.util.GregorianCalendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vorlesungstermin")
public class Vorlesungstermin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@ManyToOne
	@JoinColumn(name = "veranstatungsId")
	private Veranstaltung veranstaltung;

	private GregorianCalendar datum;

	private LocalTime anfangszeit;

	private LocalTime endezeit;

	public Vorlesungstermin() {
		
	}
	
	public Vorlesungstermin(int tag, int monat, int jahr, int stdAnf, int minAnf, int stdEnd, int minEnd) {
		this.setDatum(tag, monat, jahr);
		this.setAnfangszeit(stdAnf, minAnf);
		this.setEndezeit(stdEnd, minEnd);
	}
	
	public LocalTime getAnfangszeit() {
		return anfangszeit;
	}

	public void setAnfangszeit(int hour, int minute) {
		this.anfangszeit = LocalTime.of(hour, minute);
	}

	public LocalTime getEndezeit() {
		return endezeit;
	}

	public void setEndezeit(int hour, int minute) {
		this.endezeit = LocalTime.of(hour, minute);
	}

	public GregorianCalendar getDatum() {
		return datum;
	}

	public void setDatum(int tag, int monat, int jahr) {
		this.datum = new GregorianCalendar(tag, monat - 1, jahr);
	}
	
	public void setDatum(GregorianCalendar datum) {
		this.datum = datum;
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
}

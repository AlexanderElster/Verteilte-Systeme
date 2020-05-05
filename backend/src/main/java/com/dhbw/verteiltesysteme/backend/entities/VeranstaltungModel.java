package com.dhbw.verteiltesysteme.backend.entities;

public class VeranstaltungModel {
	private int id;
	private String bezeichnung;
	private int anztermine;
	private String kurs;
	private String dozent;
	
	public VeranstaltungModel(int id, String bezeichnung, int anztermine, String kurs, String dozent) {
		this.setId(id);
		this.setBezeichnung(bezeichnung);
		this.setAnztermine(anztermine);
		this.setKurs(kurs);
		this.setDozent(dozent);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBezeichnung() {
		return bezeichnung;
	}

	public void setBezeichnung(String bezeichnung) {
		this.bezeichnung = bezeichnung;
	}

	public String getKurs() {
		return kurs;
	}

	public void setKurs(String kurs) {
		this.kurs = kurs;
	}

	public String getDozent() {
		return dozent;
	}

	public void setDozent(String dozent) {
		this.dozent = dozent;
	}

	public int getAnztermine() {
		return anztermine;
	}

	public void setAnztermine(int anztermine) {
		this.anztermine = anztermine;
	}
}

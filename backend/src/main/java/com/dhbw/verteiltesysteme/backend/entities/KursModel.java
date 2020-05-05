package com.dhbw.verteiltesysteme.backend.entities;

public class KursModel {
	private int id;
	private String kursbezeichnung;
	private String studleiter;
	
	public KursModel(int id, String Kursbezeichnung, String studleiter) {
		this.setId(id);
		this.setKursbezeichnung(Kursbezeichnung);
		this.setStudleiter(studleiter);
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getKursbezeichnung() {
		return kursbezeichnung;
	}
	public void setKursbezeichnung(String kursbezeichnung) {
		this.kursbezeichnung = kursbezeichnung;
	}
	public String getStudleiter() {
		return studleiter;
	}
	public void setStudleiter(String studleiter) {
		this.studleiter = studleiter;
	}
}

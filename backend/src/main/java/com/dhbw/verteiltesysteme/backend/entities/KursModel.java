package com.dhbw.verteiltesysteme.backend.entities;

public class KursModel {
	private int id;
	private String kursbezeichnung;
	private String studleiterId;
	
	public KursModel(int id, String Kursbezeichnung, String studleiterId) {
		this.setId(id);
		this.setKursbezeichnung(Kursbezeichnung);
		this.setStudleiterId(studleiterId);
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
	public String getStudleiterId() {
		return studleiterId;
	}
	public void setStudleiterId(String studleiterId) {
		this.studleiterId = studleiterId;
	}
}

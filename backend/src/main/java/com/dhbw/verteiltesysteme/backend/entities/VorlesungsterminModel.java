package com.dhbw.verteiltesysteme.backend.entities;

public class VorlesungsterminModel {
	
	private String anfangszeit;
	private String datum;
	private String endezeit;
	private String veranstaltungsId;
	
	public VorlesungsterminModel(String anfangszeit, String datum, String endezeit, String veranstaltungsId) {
		this.setAnfangszeit(anfangszeit);
		this.setDatum(datum);
		this.setEndezeit(endezeit);
		this.setVeranstaltungsId(veranstaltungsId);
	}
	
	public String getAnfangszeit() {
		return anfangszeit;
	}
	public void setAnfangszeit(String anfangszeit) {
		this.anfangszeit = anfangszeit;
	}
	public String getDatum() {
		return datum;
	}
	public void setDatum(String datum) {
		this.datum = datum;
	}
	public String getEndezeit() {
		return endezeit;
	}
	public void setEndezeit(String endezeit) {
		this.endezeit = endezeit;
	}
	public String getVeranstaltungsId() {
		return veranstaltungsId;
	}
	public void setVeranstaltungsId(String veranstaltungId) {
		this.veranstaltungsId = veranstaltungId;
	}
}

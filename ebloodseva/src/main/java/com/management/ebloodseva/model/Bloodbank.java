package com.management.ebloodseva.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodbanks")
public class Bloodbank {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="blood_bank_name")
	private String BloodbankName;
	
	@Column(name = "blood_bank_type")
	private String BloodbankType;
	
	private String BloodbankAddress;
	
	private Long BloodStocks;
		
	public Bloodbank() {
		
	}

	
	
	public Bloodbank(String bloodbankName, String bloodbankType, String bloodbankAddress, Long bloodStocks) {
		super();
		BloodbankName = bloodbankName;
		BloodbankType = bloodbankType;
		BloodbankAddress = bloodbankAddress;
		BloodStocks = bloodStocks;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBloodbankName() {
		return BloodbankName;
	}

	public void setBloodbankName(String bloodbankName) {
		BloodbankName = bloodbankName;
	}

	public String getBloodbankType() {
		return BloodbankType;
	}

	public void setBloodbankType(String bloodbankType) {
		BloodbankType = bloodbankType;
	}

	public String getBloodbankAddress() {
		return BloodbankAddress;
	}

	public void setBloodbankAddress(String bloodbankAddress) {
		BloodbankAddress = bloodbankAddress;
	}



	public Long getBloodStocks() {
		return BloodStocks;
	}



	public void setBloodStocks(Long bloodStocks) {
		BloodStocks = bloodStocks;
	}
	
	
}


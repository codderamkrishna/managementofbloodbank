package com.management.ebloodseva.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bloodbank_user")
public class BloodbankUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="blood_bank_name")
	private String BloodbankName;
	
	@Column(name = "blood_bank_type")
	private String BloodbankType;
	
	private String BloodbankAddress;
		
	public BloodbankUser() {
		
	}

	public BloodbankUser(String bloodbankName, String bloodbankType, String bloodbankAddress) {
		super();
		BloodbankName = bloodbankName;
		BloodbankType = bloodbankType;
		BloodbankAddress = bloodbankAddress;
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
}



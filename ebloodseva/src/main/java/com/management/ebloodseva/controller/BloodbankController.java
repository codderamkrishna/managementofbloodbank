package com.management.ebloodseva.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.ebloodseva.exception.ResourceNotFoundException;
import com.management.ebloodseva.model.Bloodbank;
import com.management.ebloodseva.repository.BloodbankRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BloodbankController {
	@Autowired
	private BloodbankRepository bloodbankRepository;
	
	//get all employees
	@GetMapping("/bloodbanks")
	public List<Bloodbank> getAllBloodbanks(){
		return bloodbankRepository.findAll();		
	}
	
	//create bloodbank rest api
	@PostMapping("/bloodbanks")
	public Bloodbank createBloodbank(@RequestBody Bloodbank bloodbank) {
		return bloodbankRepository.save(bloodbank);
	}
	
	//get bloodbank by id rest api
	@GetMapping("/bloodbanks/{id}")
	public ResponseEntity<Bloodbank> getBloodbankById(@PathVariable Long id) {
		
		Bloodbank bloodbank = bloodbankRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Blood Bank Not Exits with id:" + id));
		return ResponseEntity.ok(bloodbank);
	}
	
	//update bloodbank rest api
	@PutMapping("/bloodbanks/{id}")
	public ResponseEntity<Bloodbank> updateBloodbank(@PathVariable Long id,@RequestBody Bloodbank bloodbankDetails){
		Bloodbank bloodbank = bloodbankRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Blood Bank Not Exits with id:" + id));
		
		bloodbank.setBloodbankName(bloodbankDetails.getBloodbankName());
		bloodbank.setBloodbankAddress(bloodbankDetails.getBloodbankAddress());
		bloodbank.setBloodbankType(bloodbankDetails.getBloodbankType());
		bloodbank.setBloodStocks(bloodbankDetails.getBloodStocks());
		
		Bloodbank updatedBloodbank = bloodbankRepository.save(bloodbank);
		return ResponseEntity.ok(updatedBloodbank);
	}
	
	//delete bloodbank rest api
	@DeleteMapping("/bloodbanks/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteBloodbank(@PathVariable Long id){
		Bloodbank bloodbank = bloodbankRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Blood Bank Not Exits with id:" + id));
		
		bloodbankRepository.delete(bloodbank);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}

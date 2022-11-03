package com.management.ebloodseva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.management.ebloodseva.model.Bloodbank;

@Repository
public interface BloodbankRepository extends JpaRepository<Bloodbank, Long>{

}

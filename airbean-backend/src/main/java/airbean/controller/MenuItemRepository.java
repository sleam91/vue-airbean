package airbean.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import airbean.model.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Integer>{
	
	

}

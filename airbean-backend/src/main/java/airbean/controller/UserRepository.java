package airbean.controller;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import airbean.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	public Optional<User> findByNameAndEmail(String name, String email);

}

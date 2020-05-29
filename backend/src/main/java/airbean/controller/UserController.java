package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import airbean.model.Order;
import airbean.model.User;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping("/api/users/{id}")
	public User getUser(@PathVariable int id) {
		return userService.getUser(id);
	}

	@CrossOrigin(origins = "http://localhost:8080")
	@PutMapping("/api/users/{id}")
	public void addOrderToUser(@PathVariable int id, @RequestBody Order order) {
		User user = userService.getUser(id);
		user.getListOfOrders().add(order);
		userService.updateUser(user);

	}

	@CrossOrigin(origins = "http://localhost:8080")
	@PostMapping("/api/users")
	public void addOrGetUser(@RequestBody User user) {
		userService.getUser(user.getName(), user.getEmail());
	}

}

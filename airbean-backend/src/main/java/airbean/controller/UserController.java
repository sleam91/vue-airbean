package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import airbean.model.Order;
import airbean.model.User;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/api/users")
	public User addOrGetUser(@RequestBody User user) {
		return userService.addOrGetUser(user.getName(), user.getEmail());
	}

	@PutMapping("/api/users/{id}")
	public void addOrderToUser(@PathVariable int id, @RequestBody Order order) {
		User user = userService.getUser(id);
		user.getListOfOrders().add(order);
		userService.updateUser(user);

	}

}

package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import airbean.model.Order;

@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;

	@RequestMapping("/api/orders/highest")
	public int getHighestOrderNo() {
		return orderService.getHighestOrderNo();
	}

	@PostMapping("/api/orders")
	public void addOrderNoUser(@RequestBody Order order) {
		orderService.addOrderNoUser(order);
	}

}

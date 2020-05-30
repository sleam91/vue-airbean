package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;

	@CrossOrigin(origins = "http://localhost:8080")
	@RequestMapping("/api/orders/highest")
	public int getHighestOrderNo() {
		return orderService.getHighestOrderNo();
	}

}

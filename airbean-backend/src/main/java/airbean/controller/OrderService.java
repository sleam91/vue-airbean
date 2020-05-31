package airbean.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import airbean.model.Order;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public int getHighestOrderNo() {
		int orderNo;
		try {
			orderNo = orderRepository.getHighestOrderNo();
		} catch (Exception e) {
			orderNo = 9999;
		}
		return orderNo;
	}

	public void addOrderNoUser(Order order) {
		orderRepository.save(order);
	}

}

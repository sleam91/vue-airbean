package airbean.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import airbean.model.Order;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<Order> addOrder() {
		return orderRepository.findAll();
	}

	public int getHighestOrderNo() {
		int orderNo;
		try {
			orderNo = orderRepository.getHighestOrderNo();
		} catch (Exception e) {
			orderNo = 9999;
		}
		return orderNo;
	}

}

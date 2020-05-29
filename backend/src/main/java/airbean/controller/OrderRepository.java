package airbean.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import airbean.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {

	@Query("SELECT max(orderNo) FROM Order" )
	public int getHighestOrderNo();

}

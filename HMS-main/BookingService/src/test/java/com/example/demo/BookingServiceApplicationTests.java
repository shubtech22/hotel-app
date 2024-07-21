package com.example.demo;

import com.hms.demo.controller.BookingController;
import com.hms.demo.dao.BookingRepository;
import com.hms.demo.model.Booking;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@ExtendWith(MockitoExtension.class)
@SpringBootTest(classes = BookingController.class)
class BookingServiceApplicationTests {

//	@Mock
//	private BookingRepository repo;
//	private BookingController bookingController;
//	private MockMvc mockMvc;
//
//
//	@BeforeEach
//	void setUp() {
//		this.bookingController = new BookingController(this.repo);
//	}
//
//	//getAll
//	@Test
//	public void getAllBooking(){
//
//		bookingController.findAll();
//		verify(repo).findAll();
//
//	}
//
//
//	//getbyId
//	@Test
//	public void getBooking(){
//
//		bookingController.findBookingsByCustomer("1");
//		verify(repo).findById(1);
//
//	}
//
//	//Delete
//	@Test
//	public void deleteBooking() {
//		bookingController.findBookingsByCustomer("1");
//		assertThat(bookingController.findBookingsByCustomer("1").isEmpty());
//	}
//
//	//Add
//	@Test
//	public void addBooking() {
//		Booking booking =new Booking();
//		booking.setBookingId(1);
//		booking.setHotelId(11L);
//		booking.setRoomId(101L);
//		booking.setUserId("111");
//		booking.setUserName("Vikas");
//		booking.setFeedGiven(false);
//		assertNotNull(bookingController.findBookingsByCustomer("1"));
//	}
//
//	//	update
//		@Test
//		public void updateGuest () {
//			Booking booking=new Booking(1,11L,101L,"111","Vikas",false);
//			repo.save(booking);
//			booking.setFeedGiven(true);
//		    when(repo.save(any(Booking.class))).thenReturn(booking);
//			assertEquals(booking,bookingController.updateBooking(booking));
//		}

	@Autowired
	private BookingController bookingController;

	@Autowired
	private BookingRepository bookingRepository;

	@Test
	public void add() {
		Booking u=new Booking();
		u.setFeedGiven(true);
		u.setBookingId(1);
		u.setUserName("vikas");
		u.setUserId("v1");
		u.setRoomId(11L);
		u.setHotelId(2222L);
		u.setApprovalStatus("success");
//		u.setCheckin("02-02-2022");
//		u.setCheckout(04-02-2022);
		u.setFinalPrice(1000);
		u.setNumOfGuests(2);
		bookingController.addBooking(u);
		Booking u1=bookingRepository.findById(u.getHotelId());
		assertNotNull(u1);
	}
	@Test
	public void get() {
		Booking u=new Booking();
		u.setFeedGiven(true);
		u.setBookingId(1);
		u.setUserName("vikas");
		u.setUserId("v1");
		u.setRoomId(11L);
		u.setHotelId(2222L);
		u.setApprovalStatus("success");
//		u.setCheckin(02/02/2022);
//		u.setCheckout(04-02-2022);
		u.setFinalPrice(1000);
		u.setNumOfGuests(2);
		bookingController.addBooking(u);
		Booking u1=bookingRepository.findById(u.getId());
		assertEquals("1",u1.getId());
	}
	@Test
	public void getAll() {
		List list=bookingRepository.findAll();
		assertNotEquals(0, list.size());
	}
//	@Test
//	public void delete() {
//		Booking u=new Booking();
//		u.setFeedGiven(true);
//		u.setBookingId(1);
//		u.setUserName("vikas");
//		u.setUserId("v1");
//		u.setRoomId(11L);
//		u.setHotelId(2222L);
//		u.setApprovalStatus("success");
////		u.setCheckin(02-02-2022);
////		u.setCheckout(04-02-2022);
//		u.setFinalPrice(1000);
//		u.setNumOfGuests(2);
//		bookingController.addBooking(u);
//		bookingController.delete("surya123@gmail.com");;
//		Booking u1=bookingRepository.findById(11);
//		assertEquals(true,u1.isPresent());
//	}
	@Test
	public void update() {
		Booking u=new Booking();
		u.setFeedGiven(true);
		u.setBookingId(1);
		u.setUserName("vikas");
		u.setUserId("v1");
		u.setRoomId(11L);
		u.setHotelId(2222L);
		u.setApprovalStatus("success");
//		u.setCheckin(02-02-2022);
//		u.setCheckout(04-02-2022);
		u.setFinalPrice(1000);
		u.setNumOfGuests(2);
		bookingController.updateBooking(u);
		assertEquals("vikas",u.getUserName());

	}

}
//}

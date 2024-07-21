package com.example.demo;

import com.hms.demo.controller.RoomController;
import com.hms.demo.dao.RoomRepository;
import com.hms.demo.model.Hotel;
import com.hms.demo.model.Room;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;

//@SpringBootTest(classes= {ServiceMackitoTests.class})
@ExtendWith(MockitoExtension.class)
@SpringBootTest
class HotelServiceApplicationTests {

//	@Mock
//	RoomRepository roomRepository;
//
//	@InjectMocks
//	RoomController roomController;
//
//	public List<Room> room;

//	@Test
//	//@Order(1)
//	public void getAllRoomTest() {
//
//		List<Room> room1 =new ArrayList<>(); //Defining the variable
//		Hotel hotel = new Hotel(11,"Marriott",4,"Bangalore",567824,"8975346587", "marriott@gmail.com","Best For Family");
//		room1.add(new Room(1,"101","Deluxe",1000,true,"hotel"));
//		Mockito.when(roomRepository.findAll()).thenReturn(room); //Mocking Statement
//		Assertions.assertEquals(1, roomController.findAll().size());
//	}

}

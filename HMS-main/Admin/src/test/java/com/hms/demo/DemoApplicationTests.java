package com.hms.demo;

//import com.hms.demo.controller.StaffController;
//import com.hms.demo.exception.ResourceNotFoundException;
//import com.hms.demo.model.Staff;
//import com.hms.demo.repository.StaffRepository;
//import com.hms.demo.service.SequenceGeneratorService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
import com.hms.demo.controller.StaffController;
import com.hms.demo.exception.ResourceNotFoundException;
import com.hms.demo.model.Staff;
import com.hms.demo.repository.StaffRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
//import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.verify;
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.mockito.Mockito.when;

//@ExtendWith(MockitoExtension.class)
@SpringBootTest
class DemoApplicationTests {

//	@Mock
//	private StaffRepository repo;
//
//	private StaffController staffImpl;
//
//	private SequenceGeneratorService sequenceGeneratorService;
//
//
//	@BeforeEach
//	void setUp() {
//		this.staffImpl = new StaffController(this.staffImpl);
//	}
//
//	//getAllemp
//	@Test
//	public void getAllEmployee() {
//
//		staffImpl.getAllStaff();
//		verify(repo).findAll();
//
//	}
//
//	//getbyId
//	@Test
//	public void getEmp() throws ResourceNotFoundException {
//
//		staffImpl.getStaffById(1L);
//		verify(repo).findById(1L);
//
//	}

//	//Delete
//	@Test
//	public void deleteEmp() throws ResourceNotFoundException {
//		staffImpl.deleteStaff(1L);
//		assertThat(staffImpl.getStaffById(1L).isEmpty());
//	}
//
//
//	//Add
//	@Test
//	public void addEmp() throws ResourceNotFoundException {
//		Staff staff=new Staff();
//		staff.setId(1L);
//		staff.setFirstName("Akshay");
//		staff.setLastName("Kumar");
//		staff.setEmailId("akshay@gmail.com");
//		staffImpl.createEmployee(staff);
//		assertNotNull(staffImpl.getStaffById(1L));
//
//	}
//
//	 //update
//
//	 @Test public void updateEmp () {
//		Staff staff = new Staff(1L,"Akshay","Kumar","akshay@gmail.com");
//	 repo.save(staff); staff.setLastName("Gupta");
//	 when(repo.save(any(Staff.class))).thenReturn(staff);
//	 assertEquals(staff,staffImpl.updateEmployee(staff));
//	}
//}
@Autowired
private StaffController staffController;
@Autowired
private StaffRepository staffRepository;
    @Test
    public void add() {
        Staff u=new Staff();
        u.setId(44);
        u.setFirstName("shyam");
        u.setLastName("kumar");
        u.setEmailId("shyam@gmail.com");
        staffController.createEmployee(u);
       Optional <Staff> u1=staffRepository.findById(u.getId());
        Assertions.assertNotNull(44);
    }

    @Test
    public void get() {
        Staff u=new Staff();
        u.setId(1);
        u.setFirstName("shub");
        u.setLastName("pol");
        u.setEmailId("shub@gmail.com");
        staffController.createEmployee(u);
        Optional<Staff> u1=staffRepository.findById(u.getId());
        Assertions.assertEquals(10,u1.get().getId());
    }
    @Test
    public void getAll() {
        List list=staffRepository.findAll();
        Assertions.assertNotEquals(0, list.size());
    }
    @Test
    public void delete() throws ResourceNotFoundException {
        Staff u=new Staff();
        u.setId(4L);
        u.setFirstName("shub");
        u.setLastName("pol");
        u.setEmailId("shub@gmail.com");
        staffController.createEmployee(u);
        staffController.deleteStaff(4L);
        Optional<Staff> u1=staffRepository.findById(4L);
        assertEquals(false,u1.isPresent());
    }
//    @Test
//    public void update() {
//        Staff u = new Staff();
//        u.setId(1L);
//        u.setFirstName("shub");
//        u.setLastName("pol");
//        u.setEmailId("shub@gmail.com");
//        staffController.createEmployee(u);
//        u.setFirstName("Vishal");
//        staffController.updateEmployee(1);
//        Assertions.assertEquals("Vishal",u.getFirstName());
//
//    }

}



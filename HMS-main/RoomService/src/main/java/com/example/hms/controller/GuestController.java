package com.example.hms.controller;

import com.example.hms.model.Guest;
import com.example.hms.model.Room;
import com.example.hms.service.GuestService;
import com.example.hms.service.RoomService;
import com.example.hms.service.SequenceGeneratorService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/g")
public class GuestController {

    @Autowired
    private GuestService service;


    @GetMapping("/guest")
    public List<Guest> findAll(){

        return service.findAll();
    }

//    @ApiOperation(value = "add guest")
//    @PostMapping("/addGuest")
//    public void createRoom(@RequestBody Guest guest) {
//        System.out.println("HYYYYY");
//        guest.setGuestId("guest");
//        if(guest.getGuestId() == 0) {
//            SequenceGeneratorService sequenceGeneratorService;
//            guest.setGuestId(sequenceGeneratorService.generateSequence(guest.SEQUENCE_NAME));}
//
//        guestRepository.save(guest);
//    }

    @PostMapping("/addGuest")
    public String createRoom(@RequestBody Guest guest) {
        System.out.println("CAME");
        service.createGuest(guest);
        return "guest created";
    }

    @DeleteMapping("/deleteGuest/{guestId}")
    public String deleteRoom(@PathVariable Long guestId) {

        service.deleteGuest(guestId);
        return "deleted successfully";
    }

    @PutMapping("/guest/{guestId}")
    public void updateGuest(@RequestBody Guest guest) {

        service.updateGuest(guest);
    }


    @GetMapping("/guest/{guestId}")
    public Optional<Guest> findById(@PathVariable Long guestId) {

        return service.findById(guestId);
    }

}

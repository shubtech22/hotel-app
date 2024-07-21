package com.example.hms.service;

import com.example.hms.model.Guest;
import com.example.hms.model.Room;
import com.example.hms.repository.GuestRepository;
import com.example.hms.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class GuestService {

    @Autowired
    private GuestRepository guestRepository;

    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;

    public List<Guest> findAll(){

        return guestRepository.findAll();
    }

    public void createGuest(@RequestBody Guest guest) {


        guest.setId(sequenceGeneratorService.generateSequence(guest.SEQUENCE_NAME));
        guestRepository.save(guest);
    }

    public String deleteGuest(@PathVariable Long guestId) {

        guestRepository.deleteById(guestId);
        return "deleted successfully";
    }
    public void updateGuest(@RequestBody Guest guest) {

        guestRepository.save(guest);
    }

    public Optional<Guest> findById(@PathVariable Long roomId) {

        return guestRepository.findById(roomId);
    }

}
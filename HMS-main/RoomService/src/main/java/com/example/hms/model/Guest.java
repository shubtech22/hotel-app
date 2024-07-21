package com.example.hms.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="guest")
public class Guest {
    @Transient
    public static final String SEQUENCE_NAME = "guest_sequence";


    @Id
    private String guestId;
    private String company;
    private String name;
    private String mailid;
    private String gender;
    private String address;
    private String phone_number;

    public Guest() {
    }

    public Guest(String guestId, String company, String name, String mailid, String gender, String address, String phone_number) {
        this.guestId = guestId;
        this.company = company;
        this.name = name;
        this.mailid = mailid;
        this.gender = gender;
        this.address = address;
        this.phone_number = phone_number;
    }

    public String getGuestId() {
        return guestId;
    }

    public void setGuestId(String guestId) {
        this.guestId = guestId;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMailid() {
        return mailid;
    }

    public void setMailid(String mailid) {
        this.mailid = mailid;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    @Override
    public String toString() {
        return "Guest{" +
                "guestId='" + guestId + '\'' +
                ", company='" + company + '\'' +
                ", name='" + name + '\'' +
                ", mailid='" + mailid + '\'' +
                ", gender='" + gender + '\'' +
                ", address='" + address + '\'' +
                ", phone_number='" + phone_number + '\'' +
                '}';
    }

    public void setId(long generateSequence) {
    }

}

package com.mechcabs.model;

import java.sql.Timestamp;

public class User {
    private Long id;
    private String phone;
    private String password;
    private String role; // "USER", "MECHANIC", "DRIVER"
    private Timestamp createdAt;

    public User() {
    }

    public User(Long id, String phone, String password, String role, Timestamp createdAt) {
        this.id = id;
        this.phone = phone;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}

package com.mechcabs.model;

import java.sql.Timestamp;

public class ServiceRequest {
    private Long id;
    private Long userId;
    private String serviceType; // "mechanic", "tow", "fuel", "cab"
    private String status;      // "PENDING", "ACCEPTED", "COMPLETED"
    private String location;
    private Timestamp createdAt;

    public ServiceRequest() {
    }

    public ServiceRequest(Long id, Long userId, String serviceType, String status, String location, Timestamp createdAt) {
        this.id = id;
        this.userId = userId;
        this.serviceType = serviceType;
        this.status = status;
        this.location = location;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getServiceType() {
        return serviceType;
    }
    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}

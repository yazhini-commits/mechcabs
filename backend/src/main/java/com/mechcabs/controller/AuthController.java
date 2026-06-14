package com.mechcabs.controller;

import com.mechcabs.model.User;
import com.mechcabs.repository.UserRepository;
import com.mechcabs.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public static class AuthRequest {
        public String phone;
        public String password;
        public String role;
    }

    public static class AuthResponse {
        public String token;
        public String message;
        public AuthResponse(String token, String message) {
            this.token = token;
            this.message = message;
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AuthRequest request) {
        if (userRepository.findByPhone(request.phone).isPresent()) {
            return ResponseEntity.badRequest().body("Phone number already registered.");
        }
        User user = new User();
        user.setPhone(request.phone);
        user.setPassword(passwordEncoder.encode(request.password));
        user.setRole(request.role != null ? request.role : "USER");
        
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Optional<User> userOpt = userRepository.findByPhone(request.phone);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (passwordEncoder.matches(request.password, user.getPassword())) {
                String token = jwtUtil.generateToken(user.getPhone());
                return ResponseEntity.ok(new AuthResponse(token, "Login successful"));
            }
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}

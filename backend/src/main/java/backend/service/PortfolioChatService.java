package backend.service;

import org.springframework.stereotype.Service;

@Service
public class PortfolioChatService {

    public String getReply(String message) {

        if (message == null || message.trim().isEmpty()) {
            return "Please ask me something about Pabasara's portfolio. 🌸";
        }

        String question = message.toLowerCase();

        if (question.contains("skill")
                || question.contains("technology")
                || question.contains("technologies")) {

            return "Pabasara works with Java, React, Spring Boot, JavaScript, MySQL, C#, C, PHP, Git, GitHub, and UI/UX technologies.";
        }

        if (question.contains("milkguard")
                || question.contains("milk spoilage")) {

            return "MilkGuard is an IoT-based milk spoilage detection system developed using an ESP32 and sensors to monitor conditions related to milk spoilage.";
        }

        if (question.contains("project")
                || question.contains("projects")) {

            return "Pabasara has worked on software development, web applications, IoT, AI-related projects, and other university projects.";
        }

        if (question.contains("education")
                || question.contains("study")
                || question.contains("qualification")) {

            return "Pabasara is pursuing a Higher National Diploma in Software Engineering at NIBM. She previously completed a Diploma in Software Engineering with a GPA of 3.8 and a Certificate in Software Engineering.";
        }

        if (question.contains("achievement")
                || question.contains("award")
                || question.contains("pixel peak")) {

            return "Pabasara secured 1st Place in the Pixel Peak multimedia competition. 🥇 She has also taken leadership roles in student technology events.";
        }

        if (question.contains("hello")
                || question.contains("hi")
                || question.contains("hey")) {

            return "Hi! I'm Lyra 🌸 I'm Pabasara's portfolio assistant. Ask me about her skills, projects, education, or achievements.";
        }

        if (question.contains("who are you")
                || question.contains("your name")) {

            return "I'm Lyra 🌸, Pabasara's portfolio assistant. I can tell you about her skills, projects, education, and achievements.";
        }

        return "I'm still learning about Pabasara's portfolio 🌸 Try asking me about her skills, projects, education, MilkGuard, or achievements.";
    }
}
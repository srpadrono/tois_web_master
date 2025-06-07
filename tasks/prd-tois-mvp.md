# Product Requirements Document: Tois MVP

## Introduction/Overview

Tois is a lightweight digital web application designed to help pediatric occupational therapists create and deliver personalized sensory home programs for children. The platform enables therapists to assign structured, engaging activities that families can follow at home, supporting consistency, improving clinical outcomes, and reducing administrative time.

The MVP focuses on core functionality that allows therapists to build customized sensory programs from a preloaded activity library, share them with caregivers, and track basic completion feedback to inform future sessions.

## Goals

1. **Reduce Administrative Burden**: Streamline the creation and distribution of home sensory programs for pediatric occupational therapists
2. **Improve Family Engagement**: Provide clear, structured activities that caregivers can confidently implement at home
3. **Enhance Clinical Outcomes**: Enable consistent tracking of activity completion and child responses to inform treatment planning
4. **Support Multi-Therapist Practices**: Allow multiple therapists within a practice to collaborate and share resources
5. **Ensure Compliance**: Maintain HIPAA-ready data security and privacy standards

## User Stories

### Therapist Stories
- As a pediatric occupational therapist, I want to securely log into the platform so that I can access my client information and create programs
- As a therapist, I want to create detailed client profiles so that I can track each child's specific sensory needs and program history
- As a therapist, I want to select from a library of proven sensory activities so that I can quickly build effective home programs
- As a therapist, I want to upload my own custom activities so that I can personalize programs with practice-specific interventions
- As a therapist, I want to set activity frequency and instructions so that caregivers understand exactly how to implement each activity
- As a therapist, I want to view caregiver feedback so that I can adjust treatment plans based on home program success

### Caregiver Stories
- As a parent/caregiver, I want to create an account and receive program notifications so that I stay informed about my child's home activities
- As a caregiver, I want to view clear activity instructions with visual aids so that I can confidently implement sensory activities at home
- As a caregiver, I want to mark activities as completed and rate my child's response so that the therapist understands how the program is working
- As a caregiver, I want to receive email or in-app notifications so that I don't miss important program updates

## Functional Requirements

### Authentication & User Management
1. The system must integrate with Auth0 for secure user authentication and management
2. The system must support therapist account creation with email/password login
3. The system must support caregiver account creation through Auth0
4. The system must implement password reset functionality through Auth0
5. The system must support role-based access (therapist vs. caregiver permissions)

### Therapist Dashboard
6. The system must display a therapist home screen showing assigned clients, recently created programs, and quick actions
7. The system must provide quick action buttons for "Create Program" and "Add Client"
8. The system must show program completion statistics and recent caregiver feedback

### Client Profile Management
9. The system must allow therapists to add new client profiles with name, date of birth, and parent/caregiver contact information
10. The system must allow therapists to edit existing client profiles
11. The system must support notes fields for diagnosis and sensory needs documentation
12. The system must track which programs have been assigned to each client
13. The system must maintain program history for each client indefinitely

### Activity Library
14. The system must include a preloaded library of 50-100 common pediatric sensory activities
15. The system must categorize activities by sensory type (tactile, vestibular, proprioceptive, etc.)
16. Each activity must include: title, description, category, and media (photo or diagram)
17. The system must allow therapists to upload custom activities with their own images and descriptions
18. The system must support image upload functionality for activity media
19. The system must organize activities in a searchable, filterable interface

### Home Program Builder
20. The system must allow therapists to select 3-10 activities from the library to create a program
21. The system must allow therapists to set frequency recommendations for each activity (e.g., "3 times per day", "before mealtimes")
22. The system must support adding parent-friendly instructions for each activity
23. The system must allow therapists to save programs as drafts before publishing
24. The system must enable therapists to send completed programs to assigned caregivers
25. The system must allow duplication and modification of existing programs

### Caregiver Interface
26. The system must provide caregivers with a dedicated interface to view assigned programs
27. The system must display activities with clear instructions, images, and frequency recommendations
28. The system must allow caregivers to mark activities as completed (yes/no)
29. The system must provide an emoji response scale (😊😐☹️) for child reaction feedback
30. The system must send email and/or in-app notifications when new programs are assigned

### Progress Tracking & Reporting
31. The system must generate weekly completion summaries for therapists to review
32. The system must track completion rates and child response patterns
33. The system must provide basic reporting on program engagement and outcomes
34. The system must allow therapists to view historical feedback for treatment planning

### Communication & Notifications
35. The system must send email notifications to caregivers when programs are assigned or updated
36. The system must provide in-app notification system for both therapists and caregivers
37. The system must maintain an activity log of caregiver interactions with programs

## Non-Goals (Out of Scope)

- Video calling or real-time communication between therapists and caregivers
- Billing or insurance integration
- Advanced analytics or machine learning recommendations
- Mobile app development (web-responsive only)
- Integration with electronic health record (EHR) systems
- Multi-language support
- Advanced custom activity creation tools (beyond basic upload)
- Caregiver-to-caregiver communication or forums

## Design Considerations

- **Responsive Design**: Must work seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Follow WCAG 2.1 AA guidelines for accessibility compliance
- **Clean Interface**: Prioritize simplicity and ease of use for both therapists and caregivers
- **Visual Hierarchy**: Use clear typography and spacing to guide users through workflows
- **Activity Display**: Ensure activity images are prominently displayed with clear, readable instructions
- **Feedback Interface**: Make completion tracking and response rating intuitive and quick

## Technical Considerations

- **Authentication**: Implement Auth0 for secure user management and SSO capabilities
- **Data Storage**: Ensure all client data is encrypted at rest and in transit
- **File Upload**: Support secure image upload and storage for custom activities
- **Email Integration**: Implement reliable email service for notifications (consider SendGrid, AWS SES)
- **Database**: Design for data retention "forever" with proper backup and archival strategies
- **Subscription Management**: Integrate subscription billing system (Stripe recommended)
- **Hosting**: Consider HIPAA-compliant hosting solutions (AWS, Azure)

## Success Metrics

1. **Task Completion Rate**: Percentage of assigned activities marked as completed by caregivers
2. **User Engagement**: Average number of programs created per therapist per week
3. **Caregiver Adoption**: Percentage of caregivers who actively use the feedback system
4. **Program Effectiveness**: Positive response ratings (😊) as percentage of total responses
5. **Time Savings**: Reduction in time spent by therapists on administrative tasks
6. **Client Retention**: Number of active clients per therapist over time
7. **Subscription Growth**: Monthly recurring revenue and user acquisition metrics

## Open Questions

1. Should there be a limit on the number of clients per therapist account?
2. What specific image file formats and size limits should be supported for activity uploads?
3. Should caregivers be able to add notes or photos when providing feedback?
4. Do we need audit trails for compliance purposes beyond basic activity logging?
5. Should therapists be able to share custom activities with other therapists in their practice?
6. What subscription tiers and pricing structure should be implemented?
7. Should there be reminder notifications for caregivers if activities aren't completed?
8. Do we need offline capability for viewing programs when internet is unavailable?

## Implementation Priority

### Phase 1 (Core MVP)
- Auth0 integration and user management
- Basic client profile creation
- Preloaded activity library with core activities
- Simple program builder
- Basic caregiver interface and feedback system

### Phase 2 (Enhanced Features)
- Custom activity upload functionality
- Email notification system
- Basic reporting and analytics
- Program duplication and templates

### Phase 3 (Polish & Scale)
- Advanced reporting features
- Subscription billing integration
- Performance optimization
- Enhanced accessibility features 
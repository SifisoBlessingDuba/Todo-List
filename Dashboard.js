import React from 'react';
import { Link } from 'react-router-dom';
import signin from '../layout/signedUpLink';


const Dashboard = () => {
    return (
        <div class="intro-container">
            <h1>Welcome to Your Secure ToDo List App!</h1>
            <p>Welcome to <strong>ToDo List</strong>, the best way to organize your tasks and stay productive! Whether you're juggling multiple projects, planning your day, or managing personal goals, our app helps you stay on top of it all — anytime, anywhere.</p>

            <h3>Why Choose ToDo List?</h3>

            <p><strong>Always Accessible</strong>With ToDo List, you can manage your tasks from any device. Whether you're at home, in the office, or on the go, all your important tasks are always just a tap away.</p>

            <p><strong>Secure & Private</strong>We understand that your information is valuable. That’s why we use <strong>state-of-the-art security measures</strong> to keep your data safe and private. Your tasks, notes, and personal information are always protected with the highest level of encryption and security protocols.</p>

            <p><strong>Simple & User-Friendly</strong>Our intuitive design makes task management easier than ever. You don’t need to be tech-savvy to use it! Whether you're adding tasks, setting reminders, or organizing your projects, everything is just a few clicks away.</p>

            <p><strong>Customize Your Workflow</strong>Everyone works differently, and ToDo List lets you customize the way you manage tasks. With categories, due dates, reminders, and priority settings, you can tailor the app to fit your unique needs.</p>

            <p><strong>Track Your Progress</strong>Stay motivated by tracking your progress. As you complete tasks, you’ll see how much you’ve accomplished. Our <strong>progress tracking feature</strong> helps you visualize your achievements and stay on track to meet your goals.</p>

            <p><strong>Free to Use</strong>Getting started is easy and completely free! We believe in providing value without making you pay upfront. Whether you’re using it for personal tasks or professional projects, you won’t have to worry about any hidden fees.</p>

            
            <p><strong>Seamless Experience</strong>Experience seamless syncing across all devices. Start working on your tasks on your phone, and pick up right where you left off on your laptop or tablet.</p>

            <h3>Start Organizing Your Life with ToDo List!</h3>

            <p>ToDo List makes managing your day easier than ever before. Whether you're organizing your home life, work projects, or personal goals, you’ll find our platform quick, easy, and effective.</p>

            <h3>Getting Started is Simple:</h3>
            <ol>
                <p><strong>Create an Account</strong> — Sign up in just a few seconds and create your personal ToDo List.</p>
                <p><strong>Add Tasks</strong> — Start adding tasks and categorize them based on priority, deadlines, or projects.</p>
                <p><strong>Stay on Track</strong> — Set reminders, track your progress, and complete tasks to stay productive.</p>
                <p><strong>Stay Secure</strong> — Rest easy knowing that your data is always safe with our encryption protocols.</p>
            </ol>

            <h3>We're Here for You, Every Step of the Way</h3>

            <p>We believe that everyone deserves a way to stay organized and productive. With ToDo List, you can rest assured that your tasks are secure, accessible, and always at your fingertips.</p>

            <p>Don't wait any longer — <strong><Link to='/Signin'>get started today</Link></strong> and see how ToDo List can help you take control of your life!</p>
        </div>

    )
}
export default Dashboard;
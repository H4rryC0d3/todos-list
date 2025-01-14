import React from 'react';

const About = () => {
  return (
    <div className="container my-5 bg-light rounded shadow-sm p-4" style={{ maxWidth: '800px', backgroundColor: '#f8f9fa' }}>
      <h2 className="text-center text-primary mb-4">About Us</h2>
      <p className="text-muted">
      The ToDoList project is a simple and user-friendly web application designed to help users manage 
      their daily tasks efficiently. It allows users to add, delete, and mark tasks as completed, providing 
      an organized way to track progress and stay productive. Built using HTML, CSS, and JavaScript, this project
       showcases dynamic updates and responsive design, ensuring a seamless user experience. 
      </p>
      <p className="text-muted">
      The intuitive interface makes it easy to add new tasks, remove unnecessary ones, and clear the entire list 
      with just a click. This project is an excellent demonstration of web development fundamentals, including DOM 
      manipulation,event handling, and interactive UI design.
      </p>
      <p className="text-muted">
      Potential enhancements like local storage, categorization, and reminders make it a versatile application with 
      real-world use. Perfect for improving productivity and a great addition to any developer's portfolio, this project
       highlights essential programming skills and creativity in solving everyday problems.
      </p>
    </div>
  );
};

export default About;

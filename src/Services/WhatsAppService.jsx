//For the Components page
export const handleWhatsAppAllComponents = (e, boardTitle, subjectName, subjectCode) => {
  e.preventDefault(); // Prevent default anchor behavior
  
  const phoneNumber = "923292248788"; 
  
  // Dynamically insert the parameters passed from the component
  const message = `Hi Resourza! I'm interested in purchasing ALL topical components for ${boardTitle} ${subjectName} (${subjectCode}). Could you share the details?`;
  
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

//For the Topics page

export const handleWhatsappTopics = (e, boardTitle, subjectName, subjectCode, componentName, selectedTopicNames) => {
    e.preventDefault();
    
    // Guard clause: Use the argument passed to the function, not the React state
    if (!selectedTopicNames || selectedTopicNames.length === 0) return; 

    const phoneNumber = "923292248788"; // Your actual WhatsApp number
    
    // Map the selected names (which were passed as an array) into a bulleted list
    const topicsList = selectedTopicNames.map(name => `- ${name}`).join("\n");

    // Construct the message using the arguments, NOT the old boardData/subjectData variables
    const message = `Hi Resourza! I'm interested in purchasing the following topics for ${boardTitle} ${subjectName} (${subjectCode}) - ${componentName}:\n\n${topicsList}\n\nCould you share the details?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

//For general inquiry — accepts an optional context string for dynamic messages
//  - No context → generic message (landing page, footer, mobile header, etc.)
//  - With context → message includes which page / board / subject the user is viewing

export const handleWhatsAppGeneralInquiry = (e, context) => {
  e.preventDefault();

  const phoneNumber = "923292248788";

  const message = context
    ? `Hi Resourza! I'm reaching out from the ${context} page. I'd like to learn more about the resources available. Could you please assist me?`
    : "Hi Resourza! I have a general inquiry about your premium academic resources. Could you please assist me?";

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};


// For the mock papers
export const handleWhatsAppMockPapers = (e) => {
  e.preventDefault();
  
  const phoneNumber = "923292248788"; 
  const message = "Hi Resourza! I'm an educator interested in your custom Mock Paper service for my students. Can we discuss the requirements?";
  
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};